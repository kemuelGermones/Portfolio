import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

import classes from "./ProjectsSection.module.css";
import ProjectCard from "../UI/ProjectCard";

const projectsData = [
  {
    imageSrc: "/unexplained.jpg",
    title: "Unexplained",
    description:
      "Unexplained is an online forum dedicated to the discussion of sightings of paranormal entities, UFOs, the possibility of extraterrestrial life and other strange events that cannot be explain.",
    technologies: "MongoDB - Express.js - Node",
    githubLink: "https://github.com/kemuelGermones/Unexplained.git",
    liveLink: "https://unexplained.onrender.com/",
  },
  {
    imageSrc: "/appblast.jpg",
    title: "AppBlast",
    description:
      "AppBlast is a self-promotion website where web designers and developers can showcase their work in which other users can also review.",
    technologies: "MongoDB - Express.js - React.js - Node",
    githubLink: "https://github.com/kemuelGermones/AppBlast.git",
    liveLink: "https://appblast-260d3.web.app/projects",
  },
  {
    imageSrc: "/playmath.jpg",
    title: "PlayMath",
    description:
      "PlayMath is a math game that tests your mathematical skills in addition, subtraction, multiplication and division.",
    technologies: "React.js",
    githubLink: "https://github.com/kemuelGermones/PlayMath.git",
    liveLink: "https://playmath-a4738.web.app/",
  },
];

function ProjectsSection() {
  useEffect(() => {
    Aos.init({ duration: 1500 });
  }, []);

  return (
    <section className={classes.projects} id="projects">
      <h1 className={classes.title} data-aos="fade-down">
        <span>Featured</span> projects
      </h1>
      <ul data-aos="fade-up">
        {projectsData.map((project, index) => (
          <li key={index}>
            <ProjectCard data={project} />
          </li>
        ))}
      </ul>
    </section>
  );
}

export default ProjectsSection;
