import React from 'react';
import {Link} from 'react-router-dom';

const Navbar = (props) => {
  return (
  <nav className="navbar navbar-expand-md navbar-dark">
    <Link to="/" className="navbar-brand">
      Styme
    </Link>
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>

    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav mr-auto">
        <li className="nav-item ml-2">
          <Link to="/" className="nav-link">
            Home
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/products" className="nav-link">
            Our Products
          </Link>
        </li>
      </ul>
      <Link to="/cart" className="ml-auto">
          <button className="btn">
            <span className="mr-2">
              <i className="fas fa-cart-plus " />
            </span>
            My Cart
          </button>
      </Link>
    </div>
  </nav>
  );
}

export default Navbar;
