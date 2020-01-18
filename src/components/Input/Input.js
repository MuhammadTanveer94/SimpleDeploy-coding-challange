import React from "react";

function InputText(props) {
  let { value, type = "text", placeholder, onChange } = props;
  return (
    <input
      type={type}
      className="form-control"
      value={value}
      placeholder={placeholder}
      aria-label="Recipient's username"
      aria-describedby="button-addon2"
      onChange={onChange}
    />
  );
}

export default InputText;
