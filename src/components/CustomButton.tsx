import React from "react";

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {}
const CustomButton: React.FC<Props> = (props) => {
  return (
    <button className="custom-button" {...props}>
      {props.children}
    </button>
  );
};

export default CustomButton;
