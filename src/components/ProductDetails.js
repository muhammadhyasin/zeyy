import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addToCart } from '../store/productsSlice';
import './ProductDetails.css'; 

function ProductDetails() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const dispatch = useDispatch();

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then((res) => res.json())
      .then((data) => setProduct(data));
  }, [id]);

  const handleAddToCart = () => {
    dispatch(addToCart(product));
  };

  return (
    product ? (
      <div className="product-details-container">
        <div className="image-section">
          <img src={product.image} className="img-fluid" alt={product.title} />
        </div>
        <div className="content-section">
          <h2>{product.title}</h2>
          <p className="category">Category: {product.category}</p>
          <p>{product.description}</p>
          <h3>${product.price}</h3>
          <button className="btn btn-primary" onClick={handleAddToCart}>Add to Cart</button>
        </div>
      </div>
    ) : <p>Loading...</p>
  );
}

export default ProductDetails;
