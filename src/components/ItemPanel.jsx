import React from 'react';

const ItemPanel = ({ name, price, picture }) => {
    const address = "/#/store/" + name.replaceAll(" ", "-").toLowerCase();
    return (
        <div className="hover-dropshadow" style={{ marginTop: "10px", marginRight: "10px", width: "220px", backgroundColor: "white", borderRadius: "10px" }} onClick={(e) => {e.preventDefault(); window.location.href=address;}}>
            <div style={{ padding: "10px", textAlign: "center", color: "#190944" }}>
                <div style={{ fontWeight: "bold" }}>{name}</div>
                <div style={{ marginTop: "10px", marginBottom: "10px" }}>
                    <img src={picture} height={150} alt={`${name}`} />
                </div>
                <div>Starting from <span style={{ fontWeight: "bolder" }}> ${price} </span> per month</div>
            </div>
        </div>
    )
}

export default ItemPanel;
