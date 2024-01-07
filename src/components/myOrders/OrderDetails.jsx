// Write all the code here
import React from "react";
import "../../styles/orderDetails.scss";

const OrderDetails = () => {
  return (
    <section className="order-details">
      <div>
        <h1>Status</h1>
        {/* Render Order Status, Placed At, Delivered At content */}
        <p>Order Status: Processing</p>
        <p>Placed At: {new Date().toLocaleString()}</p>
        <p>Delivered At: {new Date().toLocaleString()}</p>
      </div>

      <div>
        <h1>Payment</h1>
        {/* Render Payment Method, Payment Reference, Paid At content */}
        <p>Payment Method: COD</p>
        <p>Payment Reference: ABC123</p>
        <p>Paid At: {new Date().toLocaleString()}</p>
      </div>
    </section>
  );
};

export default OrderDetails;
