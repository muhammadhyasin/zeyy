import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { selectCartItemCount } from '../redux/productsSlice'; 
import { selectUserName, setUserName } from '../redux/userSlice'; 
import { Navbar, Nav, NavDropdown } from 'react-bootstrap'; 
import './Navbar.css'; 

function NavbarComponent() {
  const cartItemCount = useSelector(selectCartItemCount);
  const userName = useSelector(selectUserName);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(setUserName('')); 
    navigate('/'); 
  };

  return (
    <Navbar className="navbar" expand="lg" fixed="top">
      <Navbar.Brand as={Link} to="/" className='me-2'>Wills Cart.</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          <Nav.Link as={Link} to="/E-Commerce">Home</Nav.Link>
          <Nav.Link as={Link} to="/products">Products</Nav.Link>
          <NavDropdown title="Categories" id="basic-nav-dropdown">
            <NavDropdown.Item as={Link} to="/products?category=electronics">Electronics</NavDropdown.Item>
            <NavDropdown.Item as={Link} to="/products?category=jewelery">Jewelery</NavDropdown.Item>
            <NavDropdown.Item as={Link} to="/products?category=men's clothing">Men's Clothing</NavDropdown.Item>
            <NavDropdown.Item as={Link} to="/products?category=women's clothing">Women's Clothing</NavDropdown.Item>
          </NavDropdown>
          {userName ? (
            <>
              <Nav.Link disabled className="nav-link disabled">Welcome, {userName}</Nav.Link>
              <Nav.Link onClick={handleLogout}>Logout</Nav.Link>
            </>
          ) : (
            <Nav.Link as={Link} to="/">Login</Nav.Link>
          )}
          <Nav.Link as={Link} to="/cart">
            <i className="fa fa-shopping-cart" aria-label="cart"></i>
            <span className="badge badge-pill badge-danger" aria-label="cart items count">
              {cartItemCount}
            </span>
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default NavbarComponent;
