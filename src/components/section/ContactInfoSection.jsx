import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

import classes from "./ContactInfoSection.module.css";

function ContactInfoSection() {
  useEffect(() => {
    Aos.init({ duration: 1500 });
  }, []);

  return (
    <section className={classes.contact} id="contact">
      <ul className={classes.intro} data-aos="fade-down">
        <li>Want to work together?</li>
        <li>Send me a message</li>
      </ul>
      <h1 data-aos="fade-up">
        <a href="mailto: kemuelgermones@gmail.com">kemuelgermones@gmail.com</a>
      </h1>
    </section>
  );
}

export default ContactInfoSection;
