import classes from "./AboutCard.module.css";

function AboutCard() {
  return (
    <div className={classes.card}>
      <img src="/profile.jpg" alt="profile" />
    </div>
  );
}

export default AboutCard;
