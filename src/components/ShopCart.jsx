import DeleteIcon from '@mui/icons-material/Delete';
import imgMovie from './../assets/avataren.jpeg';
import styled from './../styles/CartStyle.css';
import { Collections } from '@mui/icons-material';
import React, { useState } from 'react';
import { useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import ConfirmationOrderPage from '../pages/ConfirmationOrderPage';


const ShopCart = (props) => {
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

      <ul className={`shopCart ${empty && 'empty'}`}>
            {
         props.cart.map((movieData) => (
        <li className='listItem' key={movieData.id}>
        <img id="cart-img"src={`https://image.tmdb.org/t/p/w300${movieData.poster_path}`} alt="" />
        <h2>{movieData.title}</h2> 
        
        
        
        <button className='cartButtonMin'>-</button><button className='cartcounter'> 0 </button><button className='cartButtonPlus'>+</button>
        <h5>Pris:</h5>
        <button className='IconButton'onClick={()=> props.remove(movieData)}><DeleteIcon/></button>
        
        <button className='globalCheckoutButton' onClick={checkout}>Checkout</button>

       </li>
             ))}   
        </ul> 
        
        
        
        
    )
    }

export default ShopCart;