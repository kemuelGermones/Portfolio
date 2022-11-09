import { Fragment } from "react";

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
