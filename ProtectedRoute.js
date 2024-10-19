import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate, useLocation } from 'react-router-dom';
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

const useAuth = () => {
  const user = store.getState().user; 
  return user.name; 
};

const Layout = ({ children }) => {
  const location = useLocation();
  const isLoginPage = location.pathname === '/';
  
  return (
    <>
      {!isLoginPage && <Navbar className="navbar" />}
      <main>{children}</main>
      {!isLoginPage && <Footer />}
    </>
  );
};

function App() {
  const isAuthenticated = useAuth(); 

  return (
    <Provider store={store}>
      <Router>
        <div id="root">
          <Layout>
            <Routes>
              <Route path="/" element={<Login />} />
              <Route path="/home" element={isAuthenticated ? <Home /> : <Navigate to="/" />} />
              <Route path="/products" element={isAuthenticated ? <Products /> : <Navigate to="/" />} />
              <Route path="/product/:id" element={isAuthenticated ? <ProductDetails /> : <Navigate to="/" />} />
              <Route path="/cart" element={isAuthenticated ? <Cart /> : <Navigate to="/" />} />
              <Route path="/order-placed" element={isAuthenticated ? <OrderPlaced /> : <Navigate to="/" />} />
              <Route path="/products/category/:category" element={isAuthenticated ? <CategoryPage /> : <Navigate to="/" />} />
              <Route path="/contact" element={isAuthenticated ? <Contact /> : <Navigate to="/" />} />
            </Routes>
          </Layout>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
