interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
  extraClassName?: string;
}
const InputField: React.FC<Props> = (props) => {
  return (
    <input
      className={`custom-input-field ${props.extraClassName}`}
      {...props}
    />
  );
};

export default InputField;
