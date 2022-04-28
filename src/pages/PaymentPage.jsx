import React from 'react';
import Navbar from '../components/Navbar';
import WhatYouPay from '../components/WhatYouPay';
import PaymentForm from '../components/PaymentForm';
import { useSelector } from "react-redux";


const PaymentPage = () => {
    const item = useSelector(state => state.store.checkoutItem);
    const address = "/#/store/" + item.name.replaceAll(" ", "-").toLowerCase() + "/checkout/confirm";
    return (
        <div>
            <Navbar />
            <div style={{ marginLeft: "40px", marginTop: "20px", marginRight: "40px" }}>
                <div style={{ display: "flex", flexDirection: "row"}}>
                    <div style={{ width: "100%" }}>
                        <div style={{ fontSize: "24pt", fontWeight: "bolder", color: "#190944" }}>
                            Shipping and Payment Information
                        </div>
                        <PaymentForm item={item} />
                    </div>
                    <WhatYouPay item={item} address={address} isForm={true} />
                </div>
                
            </div>
        </div>
    )
}

export default PaymentPage;
