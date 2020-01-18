import React from "react";

const Loader = ({ type = "primary", classes = "" }) => {
  return (
    <div className={`spinner-border text-${type} ${classes}`} role="status">
      <span className="sr-only">Loading...</span>
    </div>
  );
};

export default Loader;
