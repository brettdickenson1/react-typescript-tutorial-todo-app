import React from "react";
import "./styles.css";

const InputField = () => {
  return (
    <form className="input">
      <input className="input__box" type="input" placeholder="enter a task" />
      <button className="input__submit" type="submit">
        Go
      </button>
    </form>
  );
};

export default InputField;
