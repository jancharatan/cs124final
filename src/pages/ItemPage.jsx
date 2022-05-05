import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import Navbar from '../components/Navbar';
import { storeItems } from '../data/storeItems';
import PreferencePicker from '../components/PreferencePicker';
import { setCheckoutItem } from '../features/storeSlice';

const getAdditional = (options, items, name) => {
    var total = 0;
    const o = items[name].options;
    for (let i in o) {
        var optionVal = options[o[i].optionName];
        total += o[i].levels[optionVal];
    }
    return total;
}

const ItemPage = ({ name }) => {
    const dispatch = useDispatch();

    const options = storeItems[name].options;

    var initialState = {}
    for(let i = 0; i < options.length; i++) {
        initialState[options[i].optionName] = Object.keys(options[i].levels)[0];
    }

    const [currOptions, setCurrOptions] = useState(initialState);

    const address = "/#/store/" + name.replaceAll(" ", "-").toLowerCase() + "/checkout";
    const monthlyPrice = storeItems[name].basePrice + getAdditional(currOptions, storeItems, name);

    const itemToCheckOut = {
        name: name,
        options: currOptions,
        price: monthlyPrice
    }

    return (
        <div>
            <Navbar />
            <div style={{ display: "flex", flexDirection: "row", marginLeft: "40px", marginTop: "20px", marginRight: "40px" }}>
                <div style={{ display: "flex", flexDirection: "column" }}>
                    <img src={storeItems[name].path} alt={name} width={280} />
                </div>
                <div style={{ backgroundColor: "lightgrey", width: "100%", height: "100%", marginLeft: "20px", padding: "20px", borderRadius: "10px" }}>
                    <div style={{ fontSize: "24pt", fontWeight: "bolder" }}>
                        {name}
                    </div>
                    <div style={{ fontSize: "12pt", fontWeight: "normal", marginTop: "10px" }}>
                        {storeItems[name].description}
                    </div>
                    <div>
                        {storeItems[name].options.map(s => <PreferencePicker options={s} curr={currOptions} set={setCurrOptions} />)}
                    </div>
                    <div style={{ fontSize: "16pt", fontWeight: "bolder", marginTop: "20px" }}>
                        You Pay... 
                        <div style={{ display: "flex", flexDirection: "row", marginTop: "10px", width: "100%", justifyContent: "space-between" }}>
                            <div style={{ display: "flex", fontWeight: "lighter", height: "40px", width: "160px", backgroundColor: "white", justifyContent: "center", alignItems: "center", borderRadius: "10px" }}>
                                ${monthlyPrice}/month
                            </div>
                            <button className="emphasis-button" style={{ height: "40px", width: "200px" }} onClick={(e) => {e.preventDefault(); dispatch(setCheckoutItem(itemToCheckOut)); window.location.href=address;}}>
                                Checkout
                            </button>
                        </div>  
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ItemPage;