import React, { useState } from "react";
import "../styles/Checkout.css";
import { useNavigate } from "react-router-dom";


const Checkout = () => {
    const navigate = useNavigate();

  const [cart, setCart] = useState([]);
  const [shippingAddress, setShippingAddress] = useState({
    name: "",
    address: "",
    city: "",
    state: "",
    zipCode: "",
  });
  const [paymentMethod, setPaymentMethod] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // Place the order here

    

    
     // Redirect the user to the confirmation page
     navigate("/confirmation");
};
    
  

  return (
    <div className="checkout-container">
      <h1>Checkout</h1>

      <form onSubmit={handleSubmit}>
        <section>
          <h2>Shipping Address</h2>

          <input
            type="text"
            name="name"
            placeholder="Name"
            value={shippingAddress.name}
            onChange={(e) => setShippingAddress({ ...shippingAddress, name: e.target.value })}
          />

          <input
            type="text"
            name="address"
            placeholder="Address"
            value={shippingAddress.address}
            onChange={(e) => setShippingAddress({ ...shippingAddress, address: e.target.value })}
          />

          <input
            type="text"
            name="city"
            placeholder="City"
            value={shippingAddress.city}
            onChange={(e) => setShippingAddress({ ...shippingAddress, city: e.target.value })}
          />

          <input
            type="text"
            name="state"
            placeholder="State"
            value={shippingAddress.state}
            onChange={(e) => setShippingAddress({ ...shippingAddress, state: e.target.value })}
          />

          <input
            type="text"
            name="zipCode"
            placeholder="Zip Code"
            value={shippingAddress.zipCode}
            onChange={(e) => setShippingAddress({ ...shippingAddress, zipCode: e.target.value })}
          />
        </section>

        <section>
          <h2>Payment Method</h2>

          <select name="paymentMethod" value={paymentMethod} onChange={(e) => setPaymentMethod(e.target.value)}>
            <option value="">Select a payment method</option>
            <option value="creditCard">Credit Card</option>
            <option value="paypal">PayPal</option>
          </select>
        </section>

        <button type="submit">Place Order</button>
      </form>
    </div>
  );
};

export default Checkout;