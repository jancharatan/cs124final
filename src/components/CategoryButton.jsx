import React from 'react';

const CategoryButton = ({ label, isSelected, onClick }) => (
    <button className={`category-button ${isSelected ? 'category-selected' : 'category-not-selected'}`} onClick={onClick}>
        {label}
    </button>
)

export default CategoryButton;
