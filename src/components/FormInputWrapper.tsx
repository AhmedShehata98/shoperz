import React from "react";

interface Props extends React.HTMLProps<HTMLSpanElement> {
  extraClassName?: string;
  dir: "col" | "row";
}
const FormInputWrapper: React.FC<Props> = (props: Props) => {
  return (
    <span
      className={`form-input-wrapper ${
        props.dir === "col" ? "!flex-col" : "!flex-row"
      } ${props.extraClassName}`}
    >
      {props.children}
    </span>
  );
};

export default FormInputWrapper;
