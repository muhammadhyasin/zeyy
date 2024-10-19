import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

function Home() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  return (
    <div className="home-container">
      {/* Hero Section */}
      <header className="hero-section">
        <div className="hero-content">
          <h1 className="hero-title">You're at Wills Cart</h1>
          <p className="hero-description">
          Discover the latest trends and essentials, all delivered to your door.<br></br>Shop smart, save more, and make your wishlist a reality!          </p>
          <Link to="/products" className="button button-primary hero-button">Shop Now</Link>
          </div>
      </header>

      {/* Featured Products Section */}
      <section className="featured-products">
        <div className="container d-flex flex-column justify-content-between h-100">
          <div className="featured-products-header text-center mb-4">
            <p className="sub-heading">Featured Products</p>
          </div>
          <div className="d-flex flex-grow-1 align-items-center">
            <div className="row justify-content-center w-100">
              {products.slice(0, 8).map((product) => (
                <div key={product.id} className="col-md-3 mb-3">
                  <div className="card product-card">
                    <img src={product.image} className="card-img-top" alt={product.title} />
                    <div className="card-body">
                      <h5 className="card-title">{product.title}</h5>
                      <p className="card-text">${product.price.toFixed(2)}</p>
                      <Link to={`/products/${product.id}`} className="button button-primary">View Details</Link>
                      </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="text-center mt-4">
          <Link to="/products" className="button button-secondary see-more-button">See More</Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
