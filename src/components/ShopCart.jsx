import DeleteIcon from '@mui/icons-material/Delete';
import imgMovie from './../assets/avataren.jpeg';
import styled from './../styles/CartStyle.css';
import { Collections } from '@mui/icons-material';
import React, { useState } from 'react';
import { useEffect } from 'react';

const ShopCart = (props) => {


    return (

        <ul>
            {
         props.cart.map((movieData) => (
        <li className='listItem' key={movieData.id}>
        <img id="cart-img"src={`https://image.tmdb.org/t/p/w300${movieData.poster_path}`} alt="" />
        <h2>{movieData.title}</h2> 
        <button className='cartButton'>-</button> 0 <button className='cartButton'>+</button>
        <h4>pris:</h4>
        <button className='IconButton'onClick={()=> props.remove(movieData)}><DeleteIcon/></button>
       </li>
             ))}   
        </ul>  

    )
    }

export default ShopCart;