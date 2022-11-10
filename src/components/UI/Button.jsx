import classes from "./Button.module.css";

function Button({ children }) {
  return <button className={classes.button}>{children}</button>;
}

export default Button;
