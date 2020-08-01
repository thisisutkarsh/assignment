import React from "react";

const Header = ({ title = "Heading" }) => {
  return (
    <div>
      <h1 className="header">{title} </h1>
    </div>
  );
};

export default Header;
