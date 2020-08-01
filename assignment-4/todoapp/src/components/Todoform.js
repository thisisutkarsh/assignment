import React, { useState } from "react";

const ToDoForm = ({ addtolist }) => {
  const [value, setValue] = useState("");

  return (
    <form onSubmit="handleClick">
      <input type="text" className="input" value="value" />
    </form>
  );
};

export default ToDoForm;
