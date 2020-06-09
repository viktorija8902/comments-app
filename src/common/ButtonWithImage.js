import React from "react";
import "./buttonWithImage.scss";

function ButtonWithImage({ label, image, imageAlt, onClick }) {
  return (
    <button className="image-button" onClick={onClick}>
      <img alt={imageAlt} src={image}></img>
      <div>{label}</div>
    </button>
  );
}

export default ButtonWithImage;
