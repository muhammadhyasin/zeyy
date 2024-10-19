import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Products from './pages/Products';
import Login from './pages/Login';
import ProductDetails from './components/ProductDetails';
import Cart from './components/Cart';
import OrderPlaced from './pages/OrderPlaced';
import CategoryPage from './pages/CategoryPage';
import Contact from './pages/Contact';
import './App.css';

function AppContent() {
  const location = useLocation();
  const hideFooter = location.pathname === '/'; 

  return (
    <div id="root">
      <Navbar className="navbar" />
      <main>
        <Routes>
          <Route path="/Home" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/" element={<Login />} />
          <Route path="/product/:id" element={<ProductDetails />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/order-placed" element={<OrderPlaced />} />
          <Route path="/products/category/:category" element={<CategoryPage />} />
          <Route path="/Contact" element={<Contact />} />
        </Routes>
      </main>
      {!hideFooter && <Footer />} 
    </div>
  );
}

function App() {
  return (
    <Provider store={store}>
      <Router basename="/E-commerce">
        <AppContent />
      </Router>
    </Provider>
  );
}

export default App;