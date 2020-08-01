import React from "react";

const Button = ({ content = "Just something" }) => {
  return (
    <div>
      <button>{content}</button>
    </div>
  );
};

export default Button;
