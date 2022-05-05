import React from 'react';
import { useSelector } from 'react-redux';
import ItemPanel from './ItemPanel';
import { storeItems } from '../data/storeItems';

const StoreItems = () => {
    const category = useSelector(state => state.store.category);
    return (
        <div style={{ marginTop: "20px", marginLeft: "20px", padding: "25px", borderRadius: "15px", marginRight: "40px", backgroundColor: "lightgrey", marginBottom: "40px" }}>
            <div>
                <div style={{ fontWeight: "bolder", color: "#190944" }}>
                    {category}
                </div>
                <div style={{ display: "flex", flexDirection: "row", flexWrap: "wrap" }}>
                    { category === "All Items" ? Object.keys(storeItems).map(item => <ItemPanel name={item} price={storeItems[item].basePrice} picture={storeItems[item].path}/>) : null}
                    { Object.keys(storeItems).map(item => storeItems[item].category === category ? <ItemPanel name={item} price={storeItems[item].basePrice} picture={storeItems[item].path}/> : null) } 
                </div>
            </div>
        </div>
    )
}

export default StoreItems;
