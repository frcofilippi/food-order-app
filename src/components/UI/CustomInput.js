import classes from "./CustomInput.module.css";

const CustomInput = (props) => {
  return (
    <div className={classes.input}>
      <label htmlFor={props.id}>{props.label}</label>
      <input {...props} />
    </div>
  );
};

export default CustomInput;
