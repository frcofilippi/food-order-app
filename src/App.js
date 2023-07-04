import Header from "./components/Layout/Header";
import { Fragment, useState } from "react";
import Meals from "./components/Meal/Meals";
import ShoppingCart from "./components/Cart/ShoppingCart";

function App() {
  const [cartIsVisible, setCartIsVisible] = useState(false);

  const showShoppingCartHandlder = () => {
    setCartIsVisible(true);
  };

  const hideShoppingCartHandlder = () => {
    setCartIsVisible(false);
  };

  return (
    <Fragment>
      <Header openCart={showShoppingCartHandlder} />
      <main>
        {cartIsVisible && <ShoppingCart onClose={hideShoppingCartHandlder} />}
        <Meals />
      </main>
    </Fragment>
  );
}

export default App;
