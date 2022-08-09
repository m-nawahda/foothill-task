import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
const Navbar = () => {
  const classNames = ["hamburger-btn"];
  const handleToggleBtn = () => {
    if (classNames.length > 1) {
      classNames.push("active");
    } else {
      classNames.pop();
    }
  };
  return (
    <nav className="navigation-bar">
      <Link to="/" className="shop-name">
        e-commerce
      </Link>
      <a href="#" className={classNames.join(" ")} onClick={handleToggleBtn}>
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </a>
      <nav className="pages-links">
        <ul>
          <li>
            <Link to="/products">Products</Link>
          </li>
          <li>
            <Link to="/shopping-carts">Shopping Carts</Link>
          </li>
        </ul>
      </nav>
    </nav>
  );
};

export default Navbar;
