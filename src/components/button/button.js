import React from "react";

function Button(props) {
    return(
        <div>
            <button style={{backgroundColor:props.color, width:props.w, height:props.h, borderRadius:props.radius}}>{props.text}</button>
        </div>
    );
}

export default Button;