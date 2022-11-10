import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

import classes from "./HeroSection.module.css";

function HeroSection() {

    useEffect(() => {
        Aos.init({ duration: 1500})
    }, []);

  return (
    <section className={classes.hero} id="home">
      <h1 data-aos="fade-down">
        I’m Kemuel,
        <br />
        <span> a full stack developer based in Philippines</span>
      </h1>
      <p>
        Currently looking for a web developer job as a self taught developer. If
        you are interested working with me email me at kemuelgermones@gmail.com
      </p>
    </section>
  );
}

export default HeroSection;
