import classes from "./Button.module.css";

function Button({ title, link }) {
  return (
    <a type="button" className={classes.button} href={link} target="_blank">
      {title}
    </a>
  );
}

export default Button;
