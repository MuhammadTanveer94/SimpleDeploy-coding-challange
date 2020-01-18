import React from "react";

function SquareButton(props) {
  let { value, type = "outline-secondary", onClick } = props;
  return (
    <button
      className={`btn btn-${type}`}
      type="button"
      id="button-addon2"
      onClick={onClick}
    >
      {value}
    </button>
  );
}

export default SquareButton;
