import React from "react";
import "./Footer.css";

const Footer = () => {
    return (
        <footer className="footer">
            <p>© {new Date().getFullYear()} Wills Cart.</p>
            <p>Ultimate shopping destination!</p>
            <div>
                <a href="/Home" className="footer-link">Home</a> | 
                <a href="/products" className="footer-link">Products</a> | 
                <a href="/Contact" className="footer-link">Contact Us</a>
            </div>
        </footer>
    );
};

export default Footer;