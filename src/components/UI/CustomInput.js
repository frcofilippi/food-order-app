import React from "react";
import classes from "./CustomInput.module.css";

const CustomInput = React.forwardRef((props, ref) => {
  return (
    <div className={classes.input}>
      <label htmlFor={props.id}>{props.label}</label>
      <input ref={ref} {...props} />
    </div>
  );
});

export default CustomInput;
