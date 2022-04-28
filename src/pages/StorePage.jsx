import React from "react";
import Navbar from "../components/Navbar";
import CategoryPicker from "../components/CategoryPicker";
import StoreItems from "../components/StoreItems";
import "../App.css";

const StorePage = () => {
    return (
        <div>
            <Navbar />
            <div style={{ display: "flex", flexDirection: "column" }}>
                <div style={{ fontSize: "24pt", fontWeight: "bolder", marginTop: "20px", marginLeft: "40px", color: "#190944" }}>
                    Explore Our Amazing Options!
                </div>
                <div style={{ display: "flex", flexDirection: "row", marginLeft: "40px"}}>
                    <CategoryPicker />
                    <StoreItems />
                </div>
            </div>
        </div>
    )
}

export default StorePage;