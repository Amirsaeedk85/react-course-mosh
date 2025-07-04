import Navbar from "./components/navbar";
import Cart from "./components/Cart";
import { useState } from "react";
function App() {
  const [cart, setCart] = useState(["product1", "product2"]);

  return (
    <>
      <Navbar itemsLenght={cart.length}></Navbar>
      <Cart cartItems={cart} onClear={() => setCart([])}></Cart>
    </>
  );
}

export default App;
