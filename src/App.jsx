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
import SeriesInfo from "./pages/SeriesInfo";
import Search from "./pages/Search";
import Checkout from "./pages/Checkout";
import ConfirmationOrderPage from "./pages/ConfirmationOrderPage";

function App() {
  const [cart, setCart] = useState([]);

function updateCart(){
  setCart([...cart]);
}

function removeFromCart (item) {
  setCart(cart.filter(i => i != item));
}
function addToCart(item,renting){
  item.quantity = 1;
  item.renting = renting;

  let existingMovies = cart.filter(m => item.id == m.id);
  if(existingMovies.length > 0){
    return;
    
  }
  showSnackBar();
  setCart([...cart,item]);
}

function cartPrice () {
let totalPrice = 0;

for (let i = 0; i < cart.length; i++) {

  var movie = cart[i];
  if (movie.renting) {

    totalPrice += 49 * movie.quantity;

}else{
    totalPrice += 99 * movie.quantity;
}

}

return totalPrice;

}

function showSnackBar() {
    var x = document.getElementById("snackbar");
    x.className = "show";
    setTimeout(function(){ x.className = x.className.replace("show", ""); }, 3000);
  }


  return (
    <div className="app">
      <Router>
        <Navbar cart={cart}/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/cart" element={<ShopCart cart={cart} updateCart={updateCart} add={addToCart} remove={removeFromCart} cartPrice={cartPrice}/>}/>
          <Route path="/movies" element={<Movies/>}/>
          <Route path="/series" element={<Series/>}/>
          <Route path="/movieinfo/:movieId" element={<MovieInfo addToCart={addToCart} showSnackBar={showSnackBar}/>} /> {/* Lägg till vägen för MovieInfo */}
          <Route path="/search" element={<Search/>}/>
          <Route path="/checkout" element={<Checkout/>}/>
          <Route path="/movieinfo/:movieId" element={<MovieInfo addToCart={addToCart}/>} /> {/* Lägg till vägen för MovieInfo */}
          <Route path="/confirmation" element={<ConfirmationOrderPage cart={cart} />} />
          <Route path="/seriesinfo/:seriesId" element={<SeriesInfo addToCart={addToCart}/>} /> {/* Lägg till vägen för SeriesInfo */}
        </Routes>
        <Footer/>
      </Router>
      <div id="snackbar">Added to cart!</div>
    </div>
  );
}

export default App;
