import React from 'react';
import Navbar from '../components/Navbar';
import { useSelector } from "react-redux";
import { storeItems } from "../data/storeItems";
import { randomInt } from 'mathjs';

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

const ConfirmPage = () => {
    const item = useSelector(state => state.store.checkoutItem);
    const date = new Date();
    const orderNo = randomInt(10000, 99999);
    return(
    <div>
        <Navbar />
        <div style={{ marginLeft: "40px", marginTop: "20px", marginRight: "40px" }}>
            <div style={{ display: "flex", flexDirection: "row" }}>
                <div style={{ width: "70%" }}>
                    
                    <div style={{ fontSize: "24pt", fontWeight: "bolder", color: "#190944" }}>
                        Your Order
                    </div>
                    <div style={{ display: "flex", flexDirection: "row", backgroundColor: "lightgrey", padding: "20px", borderRadius: "10px", marginTop: "10px" }}>
                        <div style={{ display: "flex", alignItems: "center", justifyContent: "center", height: "200px", width: "200px", backgroundColor: "white", borderRadius: "10px" }}>
                            <img src={storeItems[item.name].path} alt={item.name} width={180} height={180} />
                        </div>
                        <div style={{ marginLeft: "20px" }}>
                            <div style={{ fontSize: "24pt", fontWeight: "bolder", color: "#190944" }}>
                                {item.name}
                            </div>
                            <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-between", marginTop: "10px", color: "#190944" }}>
                                <div>
                                    You paid
                                </div>
                                <div style={{ fontWeight: "bolder", color: "#190944"}}>
                                    ${Math.round((item.price + 5.99) * 100) / 100}
                                </div>
                            </div>
                            <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-between", color: "#190944"}}>
                                <div>
                                    You pay per month
                                </div>
                                <div style={{ fontWeight: "bolder", color: "#190944"}}>
                                    ${item.price}.00
                                </div>
                            </div>
                            <div style={{ marginTop: "5px", fontSize: "8pt", color: "#190944" }}>
                                Return by {new Date(date.setMonth(date.getMonth()+getMonths(item.options["Rental Period"]))).toDateString()}
                            </div>
                        </div>
                    </div>
                </div>
                <div style={{ display: "flex", width: "100%", marginLeft: "80px", alignItems: "center", flexDirection: "column" }}>
                    <div style={{ fontSize: "24pt", color: "#190944", fontWeight: "bolder" }}>
                        We've received your order!
                    </div>
                    <div style={{ fontSize: "16pt", color: "#190944", marginTop: "20px" }}>
                        Order number: {orderNo}
                    </div>
                    <div style={{ fontSize: "16pt", color: "#190944" }}>
                        Return Date: {new Date(date.setMonth(date.getMonth()+getMonths(item.options["Rental Period"]))).toDateString()}
                    </div>
                    <div style={{ fontSize: "14pt", color: "#190944", marginTop: "20px", textAlign: "center" }}>
                        Thank you for shopping with circular. A summary of your purchase can be found on the left. Again, your confirmation number is {orderNo}.
                    </div>
                    <div style={{ fontSize: "14pt", color: "#190944", marginTop: "20px", textAlign: "center" }}>
                        Please allow up to 5 business days for us to process and ship your order. You will receive an email with a receipt of this order and you will also recceive an email when your order has shipped. You do not need to do anything else at this time!
                    </div>
                    <div style={{ fontSize: "14pt", color: "#190944", marginTop: "20px", textAlign: "center" }}>
                        Any other questions about the process? Check our <a href="/#/faq">FAQ</a>.
                    </div>
                </div>
            </div>
        </div>
    </div>)
}

export default ConfirmPage;
