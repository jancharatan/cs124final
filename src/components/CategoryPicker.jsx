import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setCategory } from "../features/storeSlice";
import CategoryButton from "./CategoryButton";

const CategoryPicker = () => {
    const category = useSelector(state => state.store.category);
    const dispatch = useDispatch();

    return (
        <div style={{ marginTop: "20px", padding: "25px", borderRadius: "15px", backgroundColor: "lightgrey" }}>
            <div style={{ fontWeight: "bolder", color: "#190944" }}>
                What are you looking for?
            </div>
            <div style={{ display: "flex", flexDirection: "column" }}>
                <CategoryButton label="All Items" isSelected={category === "All Items"} onClick={() => dispatch(setCategory("All Items"))} />
                <CategoryButton label="Gaming" isSelected={category === "Gaming"}  onClick={() => dispatch(setCategory("Gaming"))} />
                <CategoryButton label="Phones" isSelected={category === "Phones"} onClick={() => dispatch(setCategory("Phones"))} />
                <CategoryButton label="Computers" isSelected={category === "Computers"} onClick={() => dispatch(setCategory("Computers"))} />
                <CategoryButton label="Audio" isSelected={category === "Audio"} onClick={() => dispatch(setCategory("Audio"))} />
                <CategoryButton label="Wearables" isSelected={category === "Wearables"} onClick={() => dispatch(setCategory("Wearables"))} />
                <CategoryButton label="Entertainment" isSelected={category === "Entertainment"} onClick={() => dispatch(setCategory("Entertainment"))} />
            </div>
        </div>
    )
}

export default CategoryPicker;
