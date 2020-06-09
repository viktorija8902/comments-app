import React from "react";
import "./buttonWithImage.scss";

function ButtonWithImage({ label, image, alt, onClick }) {
  return (
    <button className="image-button" onClick={onClick} aria-label={alt}>
      <img alt="" src={image}></img>
      &nbsp;
      <div>{label}</div>
    </button>
  );
}

export default ButtonWithImage;
