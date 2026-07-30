import "./Navbar.css";
import { ShoppingCartOutlined } from "@ant-design/icons";

import { Input } from "antd";
import { Button } from "antd";
import bullLogo from "../../assets/logo.png";
const Search = Input.Search;
function Navbar() {
  return (
    <>
      <nav className="mainNav">
        {/* Logo */}
        <div className="logoNav">
          <img src={bullLogo} alt="Logo" />
        </div>

        {/* input */}
        <Search
          placeholder="enter some text"
          className="navbarr"
          size="large"
        />
        {/* Button */}
        <ShoppingCartOutlined />
        <Button type="primary" style={{}} />
      </nav>
    </>
  );
}
export default Navbar;
// import { useState } from "react";
// import bullLogo from "../../assets/logo.png";
// import { ShoppingCartOutlined } from "@ant-design/icons";

// function Navbar() {
//   const [menuOpen, setMenuOpen] = useState(false);

//   return (
//     <>
//       {/* Top Navbar */}
//       <nav className="nav">
//         {/* Logo */}
//         <div className="logo">
//           <img src={bullLogo} alt="Logo" />
//         </div>

//         {/* Search */}
//         <div className="searchBox">
//           <input type="text" placeholder="Search products..." />
//         </div>

//         {/* Desktop Menu */}
//         <div className="desktopMenu">
//           <Button
//             className="shopBtn"
//             type="primary"
//             icon={<ShoppingCartOutlined />}
//           >
//             Shop
//           </Button>
//           <button className="loginBtn">Login</button>
//         </div>

//         {/* Mobile Menu Button */}
//         <button className="menuBtn" onClick={() => setMenuOpen(true)}>
//           ☰
//         </button>
//       </nav>

//       {/* Dark Background */}
//       <div
//         className={`overlay ${menuOpen ? "showOverlay" : ""}`}
//         onClick={() => setMenuOpen(false)}
//       ></div>

//       {/* Right Side Navbar */}
//       <div className={`sideNavbar ${menuOpen ? "open" : ""}`}>
//         {/* Close Button */}
//         <button className="closeBtn" onClick={() => setMenuOpen(false)}>
//           ×
//         </button>

//         {/* Mobile Menu Links */}
//         <div className="sideMenu">
//           <a href="#home" onClick={() => setMenuOpen(false)}>
//             Home
//           </a>

//           <a href="#shop" onClick={() => setMenuOpen(false)}>
//             Shop
//           </a>

//           <a href="#products" onClick={() => setMenuOpen(false)}>
//             Products
//           </a>

//           <a href="#about" onClick={() => setMenuOpen(false)}>
//             About
//           </a>

//           <button className="sideLoginBtn" onClick={() => setMenuOpen(false)}>
//             Login
//           </button>
//         </div>
//       </div>
//     </>
//   );
// }

// export default Navbar;
