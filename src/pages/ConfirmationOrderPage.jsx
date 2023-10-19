import React from "react";
import "../styles/Confirm.css";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import ShopCart from "../components/ShopCart";
import { PropaneSharp } from "@mui/icons-material";
import App from "../App";


const ConfirmationOrderPage = (props) => {
  const navigate = useNavigate();
  const [cart, setCart] = useState(props.cart);


  const [redirectCancelled, setRedirectCancelled] = useState(false);
  const [timeRemaining, setTimeRemaining] = useState(1000); // seconds



  
  

  
  useEffect(()=>{
    props.resetCart();
  },[])


  useEffect(() => {
    if (!redirectCancelled) {
      const interval = setInterval(() => {
        setTimeRemaining(timeRemaining - 1);

        if (timeRemaining === 0) {
          navigate("/");
        }
      }, 1000); // milliseconds

      return () => clearInterval(interval);
    }
  }, [redirectCancelled, timeRemaining]);

  const cancelRedirect = () => {
    setRedirectCancelled(true);
  };

  

  const formatTimeRemaining = (timeRemaining) => {
    const minutes = Math.floor(timeRemaining / 60);
    const seconds = timeRemaining % 60;

    return `${seconds}`;
  };

 


  

  return (

    
    <div className="confirmation-order-page">
      

      
      <h1>Thank you for your order!</h1>

      <p>Your order has been confirmed and will be shipped shortly.</p> 

      
      
      <table>
        <thead>
          <tr>
            <th>Title</th>
            <th>Quantity</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          {cart.map((item) => (
            <tr key={item.id}>
              <td>{item.title}</td>
              
              <td>{item.quantity}</td>
              <td>{item.renting ? "49" : "99"} kr</td>
              
              
              
              

              <img id="cart-img"src={`https://image.tmdb.org/t/p/w300${item.poster_path}`} alt="" />
            </tr>
          ))}
        </tbody>
      </table>
        
        


      <p>Your order number is: **1234567890**</p>
        

      <p>Your order total is: {cart.reduce((total, item) => total + (item.renting ? 49 : 99) * item.quantity, 0)} kr</p>

      <div className="clock">
        <p>You will be redirected to the main page in <span className="time-remaining">{formatTimeRemaining(timeRemaining)}</span>.</p>
      </div>

      <button onClick={cancelRedirect}>Cancel Redirect</button>
    </div> 
    
  );
};

export default ConfirmationOrderPage;
