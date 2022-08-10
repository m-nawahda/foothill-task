import { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  const [classNames, setClassNames] = useState(["pages-links"]);

  const handleToggleBtn = () => {
    const updateClassNames = [...classNames];
    if (classNames.length > 1) {
      updateClassNames.pop();
    } else {
      updateClassNames.push("active");
    }
    setClassNames(updateClassNames);
  };

  return (
    <nav className="navigation-bar">
      <Link to="/" className="shop-name">
        e-commerce
      </Link>
      <a href="#" className="hamburger-btn" onClick={handleToggleBtn}>
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </a>
      <nav className={classNames.join(" ")}>
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
