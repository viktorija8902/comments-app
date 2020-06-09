import React from "react";
import "./buttonWithData.scss";

function ButtonWithData({ label, data, onClick }) {
  return (
    <button className="data-button" onClick={onClick}>
      <b className="data-button__data">{data}</b>&nbsp;<div>{label}</div>
    </button>
  );
}

export default ButtonWithData;
