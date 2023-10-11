import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./pages/Home"
import { HashRouter as Router, Route, Routes } from "react-router-dom";
import ShopCart from "./components/ShopCart";

function App() {
  const [cart, setCart] = useState(["Avatar the blue","aviator"]);

function remove (item) {
  let copyCart = cart;
  let index = copyCart.indexOf(item);
  let removedItem = copyCart.splice(index,1);
  console.log(removedItem);
  setCart(copyCart);
}




  return (
    <div className="app">
      <Router>
        <Navbar cart={cart}/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="cart" element={<ShopCart cart={cart} remove={remove}/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
