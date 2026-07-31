import "./Slider.css";
import { useState, useEffect } from "react";
import img1 from "../Images/img1.jpg";
import img2 from "../Images/img2.jpg";

function Slider() {
  const images = [img1, img2];
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImage((prev) => (prev === images.length - 1 ? 0 : prev + 1));
    }, 1500);

    return () => clearInterval(timer);
  }, );

  return (
    <div className="slider">
      <img src={images[currentImage]} alt={`Slide ${currentImage + 1}`} />
    </div>
  );
}

export default Slider;
