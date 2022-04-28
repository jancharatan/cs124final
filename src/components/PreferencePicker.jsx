import React from 'react';

const setOption = (optionName, option, curr, set) => {
    curr = {...curr, [optionName]: option};
    set(curr);
}

const PreferencePicker = ({ options, curr, set }) => {
    return (
        <div style={{ marginTop: "20px" }}>
            <div style={{ fontWeight: "bold" }}>
                {options.optionName}
            </div>
            <div style={{ width: "100%", height: "50px", backgroundColor: "white", borderRadius: "10px", marginTop: "10px" }}>
                <div style={{ display: "flex", flexDirection: "row", alignItems: "center", height: "100%" }}>
                    {Object.keys(options.levels).map(option => <div onClick={() => setOption(options.optionName, option, curr, set)} className={option === curr[options.optionName] ? "selected-option" : "hover-selector"} style={{ display: "flex", width: "100%", justifyContent: "center", alignItems: "center", height: "100%", flexDirection: "column" }}>
                        <div style={{ fontWeight: "bolder"}}>
                            {option}
                        </div>   
                        <div style={{ fontSize: "10pt", fontWeight: "normal" }}>
                            {options.levels[option] !== 0 ? `+$${options.levels[option]}/month` : null}
                        </div> 
                    </div>)}
                </div>
            </div>
        </div>
    )
}

export default PreferencePicker;
