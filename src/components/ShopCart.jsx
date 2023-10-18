import DeleteIcon from '@mui/icons-material/Delete';
import imgMovie from './../assets/avataren.jpeg';
import styled from './../styles/CartStyle.css';
import { Collections } from '@mui/icons-material';
import React, { useState } from 'react';
import { useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import ConfirmationOrderPage from '../pages/ConfirmationOrderPage';


const ShopCart = (props) => {

    function increment(movieData){
        movieData.quantity += 1;
        props.updateCart();
    }
    function decrement(movieData){
        movieData.quantity -= 1;
        
        if (movieData.quantity < 1){
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

    return (

      
     <div>
        <ul className={`shopCart ${empty && 'empty'}`}>
            {
         props.cart.map((movieData) => (
        <li className='listItem' key={movieData.id}>
        <img id="cart-img"src={`https://image.tmdb.org/t/p/w300${movieData.poster_path}`} alt="" />
        <h2>{movieData.title}</h2> 
        
        <h4>Score: {movieData.vote_average}</h4>
        <h4>Price: {movieData.quantity*49}</h4>
        <button onClick={() => increment(movieData)} className='cartButtonPlus'>+</button><button className='cartcounter'> {movieData.quantity} </button><button onClick={() => decrement(movieData)}  className='cartButtonMin'>-</button>
        <button className='IconButton'onClick={()=> props.remove(movieData)}><DeleteIcon/></button>
        
        <button className='globalCheckoutButton' onClick={checkout}>Checkout</button>

       </li>
             ))}   
        </ul> 

        <h3>Total price:{props.cartPrice()}</h3>
      
      
      </div>
    

    )
    }

export default ShopCart;