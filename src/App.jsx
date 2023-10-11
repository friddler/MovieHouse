import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./pages/Home"
import { HashRouter as Router, Route, Routes } from "react-router-dom";
import ShopCart from "./components/ShopCart";

function App() {
  const [cart, setCart] = useState(["Avatar the blue","aviator"]);

function remove (item) {
  setCart(cart.filter(i => i != item));
}
function add(item){
  setCart([...cart,item]);
}



  return (
    <div className="app">
      <Router>
        <Navbar cart={cart}/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="cart" element={<ShopCart cart={cart} add={add} remove={remove}/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
