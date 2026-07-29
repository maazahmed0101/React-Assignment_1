import { useState } from "react";
import "./Navbar.css";
import bullLogo from "../../assets/logo.png";
import { ShoppingCartOutlined } from "@ant-design/icons";
import { Button } from "antd";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      {/* Top Navbar */}
      <nav className="nav">
        {/* Logo */}
        <div className="logo">
          <img src={bullLogo} alt="Logo" />
        </div>

        {/* Search */}
        <div className="searchBox">
          <input type="text" placeholder="Search products..." />
        </div>

        {/* Desktop Menu */}
        <div className="desktopMenu">
          <Button
            className="shopBtn"
            type="primary"
            icon={<ShoppingCartOutlined />}
          >
            Shop
          </Button>
          <button className="loginBtn">Login</button>
        </div>

        {/* Mobile Menu Button */}
        <button className="menuBtn" onClick={() => setMenuOpen(true)}>
          ☰
        </button>
      </nav>

      {/* Dark Background */}
      <div
        className={`overlay ${menuOpen ? "showOverlay" : ""}`}
        onClick={() => setMenuOpen(false)}
      ></div>

      {/* Right Side Navbar */}
      <div className={`sideNavbar ${menuOpen ? "open" : ""}`}>
        {/* Close Button */}
        <button className="closeBtn" onClick={() => setMenuOpen(false)}>
          ×
        </button>

        {/* Mobile Menu Links */}
        <div className="sideMenu">
          <a href="#home" onClick={() => setMenuOpen(false)}>
            Home
          </a>

          <a href="#shop" onClick={() => setMenuOpen(false)}>
            Shop
          </a>

          <a href="#products" onClick={() => setMenuOpen(false)}>
            Products
          </a>

          <a href="#about" onClick={() => setMenuOpen(false)}>
            About
          </a>

          <button className="sideLoginBtn" onClick={() => setMenuOpen(false)}>
            Login
          </button>
        </div>
      </div>
    </>
  );
}

export default Navbar;
