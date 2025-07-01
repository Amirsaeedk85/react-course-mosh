import { Children } from "react";

interface Props {
  children: string;
  color?:
    | "primary"
    | "secondary"
    | "success"
    | "danger"
    | "warning"
    | "info"
    | "light"
    | "dark";
  buttonClicked: () => void;
}
const Button = ({ children, buttonClicked }: Props) => {
  return (
    <button type="button" className="btn btn-primary" onClick={buttonClicked}>
      {children}
    </button>
  );
};

export default Button;
