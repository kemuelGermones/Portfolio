import { Fragment } from "react";
import AnimatedCursor from "react-animated-cursor";

import Container from "./components/UI/Container";
import NavBar from "./components/UI/Navbar";
import HeroSection from "./components/section/HeroSection";
import AboutSection from "./components/section/AboutSection";
import ProjectsSection from "./components/section/ProjectsSection";
import ContactInfoSection from "./components/section/ContactInfoSection";
import Footer from "./components/UI/Footer";

function App() {
  return (
    <Fragment>
      <AnimatedCursor
        innerSize={10}
        outerSize={60}
        color="0, 0, 0"
        outerAlpha={0.2}
        innerScale={1}
        outerScale={1.5}
        clickables={["a", "button"]}
      />
      <Container>
        <NavBar />
        <HeroSection />
        <AboutSection />
        <ProjectsSection />
        <ContactInfoSection />
        <Footer />
      </Container>
    </Fragment>
  );
}

export default App;
