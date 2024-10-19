import React from 'react';
import { useLocation } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import './Layout.css';

const Layout = ({ children }) => {
  const location = useLocation();
  const isLoginPage = location.pathname === '/login';

  return (
    <div className="app-container">
      <Navbar />
      <main className="main-content">{children}</main>
      {!isLoginPage && <Footer />}
    </div>
  );
};

export default Layout;
