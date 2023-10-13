import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home"
import Movies from "./pages/Movies"
import Series from "./pages/Series"
import { HashRouter as Router, Route, Routes } from "react-router-dom";
import ShopCart from "./components/ShopCart";
import SeriesAPI from "./components/SeriesAPI";
import MovieAPI from "./components/MovieAPI";
import MovieGenre from "./components/MovieGenre";
import SeriesGenre from "./components/SeriesGenre";
import MovieInfo from "./pages/MovieInfo";

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
          <Route path="/movies" element={<Movies/>}/>
          <Route path="/series" element={<Series/>}/>
          <Route path="/movieinfo/:movieId" element={<MovieInfo />} /> {/* Lägg till vägen för MovieInfo */}

        </Routes>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;
