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
         props.cart.map((item) => (
        <li className='listItem'>
        <img src={imgMovie} alt="" />
        <h2>{item}</h2> 
        <label>Art.nr:</label><br />
        <button className='cartButton'>-</button> 0 <button className='cartButton'>+</button>
        <h4>pris:</h4>
        <button className='IconButton'onClick={()=> props.remove(item)}><DeleteIcon/></button>
       </li>
             ))}   
        </ul>  

    )
    }

export default ShopCart;