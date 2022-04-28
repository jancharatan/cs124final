import React from "react";
import Navbar from "../components/Navbar";
import WhatYouPay from "../components/WhatYouPay";
import "../App.css";
import { useSelector } from "react-redux";
import { storeItems } from "../data/storeItems";

const StorePage = () => {
    const item = useSelector(state => state.store.checkoutItem);
    const address = "/#/store/" + item.name.replaceAll(" ", "-").toLowerCase() + "/checkout/pay";
    return (
        <div>
            <Navbar />
            <div style={{ marginLeft: "40px", marginTop: "20px", marginRight: "40px" }}>
                <div style={{ display: "flex", flexDirection: "row"}}>
                    <div style={{ width: "100%" }}>
                        <div style={{ fontSize: "24pt", fontWeight: "bolder", color: "#190944" }}>
                            Your Order
                        </div>
                        <div style={{width: "100%", backgroundColor: "lightgrey", borderRadius: "10px", marginTop: "10px" }}>
                            <div style={{ display: "flex", width: "100%", height: "100%", padding: "20px", flexDirection: "row" }}>
                                <div style={{ display: "flex", alignItems: "center", justifyContent: "center", height: "200px", width: "200px", backgroundColor: "white", borderRadius: "10px" }}>
                                    <img src={storeItems[item.name].path} alt={item.name} width={180} height={180} />
                                </div>
                                <div style={{ marginLeft: "20px" }}>
                                    <div style={{ fontSize: "24pt", fontWeight: "bolder" }}>
                                        {item.name}
                                    </div>
                                    <div style={{ marginTop: "10px", fontSize: "16pt" }}>
                                        Base Price: ${storeItems[item.name].basePrice}/month
                                    </div>
                                    {
                                        Object.keys(item.options).map(option => 
                                            <div style={{ fontWeight: "lighter", fontSize: "16pt" }}> 
                                                {option}: {item.options[option]} ({storeItems[item.name].options.map(opt => opt.optionName === option ? `+$${opt.levels[item.options[option]]}/month` : null)}) 
                                            </div>)
                                    }
                                    <div style={{ fontWeight: "bolder", marginTop: "10px", fontSize: "16pt" }}>
                                        Total Price: ${item.price}/month
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <WhatYouPay address={address} item={item} />
                </div>
            </div>
        </div>
    )
}

export default StorePage;