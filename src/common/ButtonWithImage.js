import React from "react";

function ButtonWithImage({ label, image, imageAlt, onClick }) {
  return (
    <button onClick={onClick}>
      <img alt={imageAlt} src={image}></img>
      <div>{label}</div>
    </button>
  );
}

export default ButtonWithImage;
