import React from 'react';
import { useDispatch } from 'react-redux';
import { addToCart } from '../store/productsSlice';
import { Link } from 'react-router-dom';
import './ProductList.css';

function ProductList({ products }) {
  const dispatch = useDispatch();

  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
  };

  console.log('Products in ProductList:', products);

  return (
    <div className="product-list">
      {products.length > 0 ? (
        products.map((product) => (
          <div key={product.id} className="product-card">
            <img src={product.image} alt={product.title} />
            <div className="card-body">
              <h5 className="card-title">{product.title}</h5>
              <p className="card-text">${product.price}</p>
              <div className="button-group">
                <Link to={`/product/${product.id}`} className="btn-common">View Details</Link>
                <button className="btn-common" onClick={() => handleAddToCart(product)}>Add to Cart</button>
              </div>
            </div>
          </div>
        ))
      ) : (
        <p>No products found for this category.</p>
      )}
    </div>
  );
}

export default ProductList;
