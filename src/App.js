import Header from "./components/Layout/Header";
import { useState } from "react";
import Meals from "./components/Meal/Meals";
import ShoppingCart from "./components/Cart/ShoppingCart";
import CartProvider from "./store/CartProvider";
import { CatalogProvider } from "./store/catalog-context";

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
        <CatalogProvider>
          <Meals />
        </CatalogProvider>
      </main>
    </CartProvider>
  );
}

export default App;
