import React from 'react';
import './OrderPlaced.css'; 

function OrderPlaced() {
  return (
    <div className="order-placed-container">
      <div className='order-dialouge'>
      <div>
        <h2 class="box">Order Placed</h2>
      </div>
      <div className="message">
        <p>Thank you for your purchase! Your order has been placed successfully.</p>
        <p>We will notify you once your order is on its way.</p>
      </div>
      </div>
    </div>
  );
}

export default OrderPlaced;
