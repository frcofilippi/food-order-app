import { useRef, useState } from "react";
import Button from "../../UI/Button";
import CustomInput from "../../UI/CustomInput";

const MealForm = (props) => {
  const [isValidInput, setIsValidInput] = useState(true);
  const inputRef = useRef();

  const onSubmitHandler = (event) => {
    event.preventDefault();
    // const qty = event.target.elements.qty.value;
    // console.log(`Added ${qty} item: ${props.item.price} to the bag`);
    // this could be done with 2-way binding but I'll use Ref just for the sake of practicing
    const inputedQty = inputRef.current.value;
    const qty = +inputedQty;
    if (inputedQty.trim().length === 0 || qty < 1 || qty > 5) {
      setIsValidInput(false);
      return;
    }
    props.onAddtoBag(qty);
  };

  return (
    <form onSubmit={(event) => onSubmitHandler(event)}>
      <CustomInput
        ref={inputRef}
        id={"qty"}
        type={"number"}
        label={"Qty: "}
        min={1}
        max={5}
        step={1}
        defaultValue={1}
      />
      <Button label={"Add to bag"} />
      {!isValidInput ? <p>Invalid quantity</p> : null}
    </form>
  );
};

export default MealForm;
