import React from "react";
import { BsSearch } from "react-icons/bs";

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {}
const InputField: React.FC<Props> = (props) => {
  return (
    <input className={`custom-input-field ${props.className}`} {...props} />
  );
};

export default InputField;
