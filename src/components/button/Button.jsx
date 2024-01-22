import React from "react";

const Button = ({ children, onClick }) => {
  return (
    <>
      <button
        className="flex items-center justify-center px-5 py-3 mt-auto rounded-lg bg-primary gap-x-2"
        onClick={onClick}
      >
        {children}
      </button>
    </>
  );
};

export default Button;
