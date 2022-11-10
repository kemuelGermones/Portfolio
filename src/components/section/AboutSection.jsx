import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

import classes from "./AboutSection.module.css";
import AboutCard from "../UI/AboutCard";

function AboutSection() {
  useEffect(() => {
    Aos.init({ duration: 1500 });
  }, []);

  return (
    <section className={classes.about} id="about">
      <div className={classes.img} data-aos="fade-up">
        <AboutCard />
      </div>
      <div className={classes.body}>
        <h1 data-aos="fade-down">
          <span>A bit </span>about me
        </h1>
        <p data-aos="fade-up">
          Hello! My name is Kemuel, I am a self-taught developer for over a year
          now. Since discovering the field of software development, I've always
          been interested in pursuing it, but I am also hesitant since my course
          doesn't align with this field. After countless YouTube motivational
          videos, I've decided to self learn all the necessary tools and
          technologies to develop a web application but it isn't easy.
        </p>
        <p data-aos="fade-up">
          I'd thought that I could be a full stack developer for three months
          but I was slapped by reality. So I decided to take my time and learn
          at my own pace. After a year of ups and downs of learning, I've
          managed to build full stack web applications and I've realized that
          even one year isn't enough, life-long learning does.
        </p>
        <p data-aos="fade-up">Here are a few technologies I’ve learned:</p>
        <ul data-aos="fade-up">
          <li>HTML</li>
          <li>CSS</li>
          <li>Bootstrap</li>
          <li>Javascript</li>
          <li>React</li>
          <li>Node.js</li>
          <li>Express</li>
          <li>MongoDB</li>
        </ul>
      </div>
    </section>
  );
}

export default AboutSection;
