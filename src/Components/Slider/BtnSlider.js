import React from "react";
import "./Slider.css";

export default function BtnSlider({ direction, moveSlide }) {
  return (
    <button
      onClick={moveSlide}
      className={direction === "next" ? "btn-slide next" : "btn-slide prev"}
    >
     
    {direction === "next" ? <svg xmlns="http://www.w3.org/2000/svg" width="10.707" height="6.061" viewBox="0 0 10.707 6.061">
  <path id="Další" d="M18,7.5l5,5-5,5" transform="translate(17.854 -17.646) rotate(90)" fill="none" stroke="#4a4a4a" strokeWidth="1" opacity="0.498"/>
</svg> : <svg xmlns="http://www.w3.org/2000/svg" width="10.707" height="6.061" viewBox="0 0 10.707 6.061">
<path id="Zpět" d="M0,10,5,5,0,0" transform="translate(0.354 5.707) rotate(-90)" fill="none" stroke="#4a4a4a" strokeWidth="1" opacity="0.498"/>
</svg>}

    </button>
  );
}

