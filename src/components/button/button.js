import React from "react";

function Button(props) {
  return (
    <div>
      <button
        style={{
          backgroundColor: props.backgroundColor,
          width: props.w,
          height: props.h,
          borderRadius: props.radius,
          fontSize: props.fontSize,
          color: props.color,
          marginLeft: props.marginLeft,
          fontWeight: props.fontWeight,
        }}
      >
        {props.text}
      </button>
    </div>
  );
}

export default Button;
