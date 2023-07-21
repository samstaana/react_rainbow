import React from "react";

function ColorBlock (props) {
    return(
        <div className="colorblock"
        style={{ 'backgroundColor': props.color }}>
            <p>{ props.color }</p>
        </div>
    )
}

export default ColorBlock;
// DO NOT forget to export your component once you have built it!