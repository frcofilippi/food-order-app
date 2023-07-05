import { useContext } from "react";
import Button from "../../UI/Button";
import CustomInput from "../../UI/CustomInput";
import CartContext from "../../../store/cart-context";

const MealForm = (props) => {
  const cartCtx = useContext(CartContext);

  const onSubmitHandler = (event) => {
    event.preventDefault();
    const qty = event.target.elements.qty.value;
    console.log(`Added ${qty} item: ${props.item.price} to the bag`);
    cartCtx.addItem({ ...props.item, qty });
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
      <Button label={"Add to bag"} />
    </form>
  );
};

export default MealForm;
