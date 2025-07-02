import styles from "./Button.module.css";
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
const Button = ({ children, buttonClicked, color }: Props) => {
  return (
    <button
      type="button"
      className={[styles.btn, styles["btn-" + color]].join(" ")}
      onClick={buttonClicked}
    >
      {children}
    </button>
  );
};

export default Button;
