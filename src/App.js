import Header from "./components/Layout/Header";
import { useState } from "react";
import Meals from "./components/Meal/Meals";
import ShoppingCart from "./components/Cart/ShoppingCart";
import CartProvider from "./store/CartProvider";

function App() {
  const [cartIsVisible, setCartIsVisible] = useState(false);

  const showShoppingCartHandlder = () => {
    setCartIsVisible(true);
  };

  const hideShoppingCartHandlder = () => {
    setCartIsVisible(false);
  };

  return (
    <CartProvider>
      <Header openCart={showShoppingCartHandlder} />
      <main>
        {cartIsVisible && <ShoppingCart onClose={hideShoppingCartHandlder} />}
        <Meals />
      </main>
    </CartProvider>
  );
}

export default App;
