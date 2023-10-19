import DeleteIcon from "@mui/icons-material/Delete";
import imgMovie from "./../assets/avataren.jpeg";
import "../styles/CartStyle.css";
import { Collections } from "@mui/icons-material";
import React, { useState } from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import ConfirmationOrderPage from "../pages/ConfirmationOrderPage";

const ShopCart = (props) => {
  function increment(movieData) {
    movieData.quantity += 1;
    props.updateCart();
  }
  function decrement(movieData) {
    movieData.quantity -= 1;

    if (movieData.quantity < 1) {
      movieData.quantity = 1;
    }
    props.updateCart();
  }
  const [empty, setEmpty] = useState(false);

  useEffect(() => {
    if (props.cart.length === 0) {
      setEmpty(true);
    } else {
      setEmpty(false);
    }
  }, [props.cart]);

  const navigate = useNavigate();

  const checkout = () => {
    navigate("/checkout");
  };

  function moviePrice (movie) {

    if (movie.renting) {

        return 49 * movie.quantity;

    }else{
        return 99 * movie.quantity;
    }
    
  }

  function showRentOrBuy (movie) {

    if (movie.renting) {
      
        return <>RENT</>;
    }else{

        return <>BUY</>;
    }


  }

  return (
    <div className="cartContainer">
      <ul className={`shopCart ${empty && "empty"}`}>
        {props.cart.map((movieData) => (
          <li className="listItem" key={movieData.id}>
            <div className="cart-img-container">
              <img
                className="cart-img"
                src={`https://image.tmdb.org/t/p/w300${movieData.poster_path}`}
                alt={movieData.title}
              />
            </div>
            <div className="movieDetails">
              <h2>{showRentOrBuy(movieData)} - {movieData.title}</h2>
              <h4>Price: {moviePrice(movieData)}kr</h4>
            </div>
            <div className="actions">
              <div className="quantityControls">
                <button
                  onClick={() => decrement(movieData)}
                  className="cartButtonMin"
                >
                  -
                </button>
                <span className="cartcounter">{movieData.quantity}</span>
                <button
                  onClick={() => increment(movieData)}
                  className="cartButtonPlus"
                >
                  +
                </button>
              </div>
              <button
                className="IconButton"
                onClick={() => props.remove(movieData)}
              >
                <DeleteIcon />
              </button>
            </div>
          </li>
        ))}
      </ul>
      <div className="checkoutSection">
        <h3 className="total-price">Total price: {props.cartPrice() + "kr"}</h3>
        <button className="globalCheckoutButton" onClick={checkout}>
          Checkout
        </button>
      </div>
      </div>
    

    )
        }

export default ShopCart;
