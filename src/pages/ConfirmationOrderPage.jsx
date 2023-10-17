import React from "react";
import "../styles/Confirm.css";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import ShopCart from "../components/ShopCart";
import { PropaneSharp } from "@mui/icons-material";

const ConfirmationOrderPage = (props) => {
  const navigate = useNavigate();

  const [redirectCancelled, setRedirectCancelled] = useState(false);
  const [timeRemaining, setTimeRemaining] = useState(10); // seconds
  const [cart, setCart] = useState([]);

  
  


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

      
      
     

        <img id="img"src={`https://i.imgur.com/kCdTY8z.jpeg`} alt="" /> 
        


        <p>Your order number is: 123456789</p>
        

      <p>Your order total is: $100.00</p>

      <div className="clock">
        <p>You will be redirected to the main page in <span className="time-remaining">{formatTimeRemaining(timeRemaining)}</span>.</p>
      </div>

      <button onClick={cancelRedirect}>Cancel Redirect</button>
    </div> 
    
  );
};

export default ConfirmationOrderPage;
