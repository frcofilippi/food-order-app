import Button from "../../UI/Button";
import CustomInput from "../../UI/CustomInput";
// import classes from "./MealForm.module.css";

const MealForm = (props) => {
  const onSubmitHandler = (event) => {
    event.preventDefault();
    console.log(
      `Added ${event.target.elements.qty.value} item: ${props.itemId} to the bag`
    );
  };
  return (
    <form onSubmit={(event) => onSubmitHandler(event)}>
      <CustomInput
        id={"qty"}
        type={"number"}
        label={"Qty: "}
        min={1}
        max={5}
        step={1}
        defaultValue={1}
      />
      <Button label={"Add to bag"}/>
    </form>
  );
};

export default MealForm;
