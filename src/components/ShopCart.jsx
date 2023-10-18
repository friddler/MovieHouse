import DeleteIcon from '@mui/icons-material/Delete';
import imgMovie from './../assets/avataren.jpeg';
import styled from './../styles/CartStyle.css';
import { Collections } from '@mui/icons-material';
import React, { useState } from 'react';
import { useEffect } from 'react';

const ShopCart = (props) => {

    function increment(movieData){
        movieData.quantity += 1;
        props.updateCart();
    }
    function decrement(movieData){
        movieData.quantity -= 1;
        props.updateCart();

        if (movieData.quantity < 0){
            movieData.quantity = 0;
        }
 
    }


    return (
     <div>
    <ul>
            {
         props.cart.map((movieData) => (
        <li className='listItem' key={movieData.id}>
        <img id="cart-img"src={`https://image.tmdb.org/t/p/w300${movieData.poster_path}`} alt="" />
        <h2>{movieData.title}</h2> 
        <button onClick={() => decrement(movieData)} className='cartButton'>-</button> {movieData.quantity} <button onClick={() => increment(movieData)} className='cartButton'>+</button>
        <h4>price:</h4>
        <button className='IconButton'onClick={()=> props.remove(movieData)}><DeleteIcon/></button>
       </li>
             ))}   
        </ul> 

        <h3>Total price:{props.cartPrice()}</h3>
      
      
      </div>
    

    )
    }

export default ShopCart;