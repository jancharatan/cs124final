import React from 'react';

const getMonths = (input) => {
    switch(input) {
        case "1 Month":
            return 1
        case "3 Months":
            return 3
        case "12 Months":
            return 12
        default:
            return 1
    }
}

const WhatYouPay = ({ address, item, isForm }) => {
    const date = new Date();
    console.log(item);
    return (
    <div style={{ width: "40%", marginLeft: "20px" }}>
        <div style={{ fontSize: "24pt", fontWeight: "bolder", color: "#190944" }}>
            What You Pay
        </div>
        <div style={{ marginTop: "10px" }}>
            <div style={{ display: "flex", width: "210px", height: "30px", backgroundColor: "lightgrey", alignItems: "center", justifyContent: "center", borderRadius: "10px", fontWeight: "bolder" }}>
                Subscriptions
            </div>
            <div style={{ display: "flex", marginTop: "10px", flexDirection: "row", justifyContent: "space-between" }}>
                <div>
                    {item.name}
                </div>
                <div style={{ fontWeight: "bolder" }}>
                    ${item.price}/month
                </div>
            </div>
            <div style={{ textAlign: "end" }}>
                x{item.options["Rental Period"]}
            </div>
            <div style={{ textAlign: "end" }}>
                Subtotal: ${item.price * getMonths(item.options["Rental Period"])}
            </div>
        </div>
        <div style={{ marginTop: "10px" }}>
            <div style={{ display: "flex", width: "210px", height: "30px", backgroundColor: "lightgrey", alignItems: "center", justifyContent: "center", borderRadius: "10px", fontWeight: "bolder" }}>
                Shipping and Handling
            </div>
            <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-between", marginTop: "10px" }}>
                <div>
                    Standard Shipping
                </div>
                <div style={{ fontWeight: "bolder" }}>
                    $5.99
                </div>
            </div>
        </div>
        <div style={{ marginTop: "30px" }}>
            <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-between" }}>
                <div>
                    You Pay Now:
                </div>
                <div style={{ fontWeight: "bolder" }}>
                    ${Math.round((item.price + 5.99) * 100) / 100} 
                </div>
            </div>
            <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-between" }}>
                <div>
                    You Pay Per Month:
                </div>
                <div style={{ fontWeight: "bolder" }}>
                    ${item.price}.00 
                </div>
            </div>
        </div>
        <div style={{ marginTop: "5px", fontSize: "8pt" }}>
            Return by {new Date(date.setMonth(date.getMonth()+getMonths(item.options["Rental Period"]))).toDateString()}
        </div>
        { isForm ? <button form="form1" type="submit" className="pay-button">
            Pay Now
        </button> : <button className="pay-button" onClick={(e) => {e.preventDefault(); window.location.href=address}}>
            Pay Now
        </button>}
        
    </div>)
}

export default WhatYouPay;
