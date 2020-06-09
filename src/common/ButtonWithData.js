import React from "react";

function ButtonWithData({ label, data, onClick }) {
  return (
    <button onClick={onClick}>
      <b>{data}</b>
      <div>{label}</div>
    </button>
  );
}

export default ButtonWithData;
