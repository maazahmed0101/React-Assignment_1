import "./App.css";
import Navbar from "./component/navbar/Navbar.jsx";
import { useState, useEffect } from "react";
import Slider from "./component/slider/Slider.jsx";
function App() {
  const [count, setcount] = useState(0);
  useEffect(() => {
    console.log("component is running");
  }, []);
  return (
    <>
      <Navbar />
      {/* <h2 style={{color:'white'}}>{count}</h2>
      <button
        onClick={() => { setcount(count + 1);
        }}
      >click</button> */}
      <Slider />
    </>
  );
}

export default App;
