import { RiGithubLine } from "react-icons/ri";
import { GoLinkExternal } from "react-icons/go";

import classes from "./ProjectCard.module.css";

function ImageCard({ data }) {
  return (
    <div className={classes.card}>
      <img src={data.imageSrc} alt={data.title} />
      <div className={classes["card-body"]}>
        <h1 className={classes["card-title"]}>{data.title}</h1>
        <div>{data.description}</div>
        <div>{data.technologies}</div>
        <div className={classes["card-icons"]}>
          <a href={data.githubLink} target="_blank">
            <RiGithubLine size="2em" />
          </a>
          <a href={data.liveLink} target="_blank">
            <GoLinkExternal size="2em" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default ImageCard;
