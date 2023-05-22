import React from "react";

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  extraClassName: string;
}
const CustomButton: React.FC<Props> = (props) => {
  return (
    <button className={`custom-button ${props.extraClassName}`} {...props}>
      {props.children}
    </button>
  );
};

export default CustomButton;
