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
import Search from "./pages/Search";
import Checkout from "./pages/Checkout";
import ConfirmationOrderPage from "./pages/ConfirmationOrderPage";

function App() {
  const [cart, setCart] = useState([]);

function removeFromCart (item) {
  setCart(cart.filter(i => i != item));
}
function addToCart(item){

  //we dont want to add the same movie twice
  //see if we can find out if the movie already exists in the cart by looking for its id
  let existingMovies = cart.filter(m => item.id == m.id);
  //if the length is more than 0, that means we already added this movie!
  if(existingMovies.length > 0){
    return;
  }

  setCart([...cart,item]);
}



  return (
    <div className="app">
      <Router>
        <Navbar cart={cart}/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/cart" element={<ShopCart cart={cart} add={addToCart} remove={removeFromCart}/>}/>
          <Route path="/movies" element={<Movies/>}/>
          <Route path="/series" element={<Series/>}/>
          <Route path="/search" element={<Search/>}/>
          <Route path="/checkout" element={<Checkout/>}/>
          <Route path="/movieinfo/:movieId" element={<MovieInfo addToCart={addToCart}/>} /> {/* Lägg till vägen för MovieInfo */}
          <Route path="/confirmation" element={<ConfirmationOrderPage />} />


        </Routes>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;
