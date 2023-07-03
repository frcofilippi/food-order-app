import Header from "./components/Layout/Header";
import { Fragment } from "react";
import Meals from "./components/Meal/Meals";
import ShoppingCart from "./components/Cart/ShoppingCart";

function App() {
  return (
    <Fragment>
      <Header />
      <main>
        <ShoppingCart />
        <Meals />
      </main>
    </Fragment>
  );
}

export default App;
