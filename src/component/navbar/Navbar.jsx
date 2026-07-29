import "./Navbar.css";
import bullLogo from '../../assets/logo.png'
// import { Button } from "antd";


function Navbar() {

  console.log("logo added");

  return (
    <>
      <nav className="nav">
        <div className="logo">
        <img src={bullLogo} alt="not available" />
        </div>
        <input type="text" placeholder="enter some from search"/ >
        <div className="shopIcon">Shop</div>
        <div className="loginBtn">Login</div>
        <div className="Btn">Button</div>
      </nav>

    </>
  );
}

export default Navbar;


