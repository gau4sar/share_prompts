import React from "react";

const Spinner = () => {
  return (
    <svg className="spinner" viewBox="0 0 24 24">
      <circle
        className="path"
        cx="25"
        cy="25"
        r="20"
        fill="none"
        strokeWidth="2"
      ></circle>
    </svg>
  );
};

export default Spinner;
