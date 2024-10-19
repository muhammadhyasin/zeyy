import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { removeFromCart, updateQuantity } from '../store/productsSlice';
import { Link } from 'react-router-dom';
import './Cart.css'; 

function Cart() {
  const cartItems = useSelector((state) => state.products.cart);
  const dispatch = useDispatch();

  const handleRemoveFromCart = (id) => {
    dispatch(removeFromCart(id));
  };

  const handleQuantityChange = (id, change) => {
    const item = cartItems.find(item => item.id === id);
    if (item) {
      dispatch(updateQuantity({ id, quantity: item.quantity + change }));
    }
  };

  const getTotalPrice = () => {
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  const totalPrice = getTotalPrice();
  const gst = (totalPrice * 0.05).toFixed(2);
  const finalPrice = (totalPrice + parseFloat(gst)).toFixed(2);

  return (
    <div className="cart-container">
      <h2 className="cart-title">Shopping Cart</h2>
      {cartItems.length === 0 ? (
        <p className="empty-cart-message">Your cart is empty.</p>
      ) : (
        <>
          <ul className="cart-list">
            {cartItems.map((item) => (
              <li key={item.id} className="cart-item d-flex align-items-center">
              <img src={item.image} alt={item.title} className="cart-item-image" />
              <div className="cart-item-details flex-grow-1">
                <span>{item.title}</span>
                <span>${item.price}</span>
                <div className="quantity-control">
                  <button className="btn btn-secondary btn-sm" onClick={() => handleQuantityChange(item.id, -1)}>-</button>
                  <span className="quantity">{item.quantity}</span>
                  <button className="btn btn-secondary btn-sm" onClick={() => handleQuantityChange(item.id, 1)}>+</button>
                </div>
              </div>
              <button className="btn btn-danger btn-sm ml-auto" onClick={() => handleRemoveFromCart(item.id)}>Remove</button>
            </li>
            ))}
          </ul>
          <div className="cart-summary mt-4">
            <div className="bill-detail">
              <div className="d-flex justify-content-between mb-2">
                <strong>Subtotal:</strong>
                <span>${totalPrice.toFixed(2)}</span>
              </div>
              <div className="d-flex justify-content-between mb-2">
                <strong>GST (5%):</strong>
                <span>${gst}</span>
              </div>
              <div className="d-flex justify-content-between mb-2">
                <strong>Total Price:</strong>
                <span>${finalPrice}</span>
              </div>
            </div>
            <Link to="/order-placed" className="btn btn-success mt-2 ms-1">Buy Now</Link>
          </div>
        </>
      )}
    </div>
  );
}

export default Cart;
