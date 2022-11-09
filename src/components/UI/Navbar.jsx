import { useState, useEffect } from "react";
import { BiMenu } from "react-icons/bi";
import { MdClose } from "react-icons/md";
import { CSSTransition } from "react-transition-group";

import classes from "./Navbar.module.css";
import Button from "./Button";

const classListNav = {
  enter: "",
  enterActive: classes["navbar-show"],
  exit: "",
  exitActive: classes["navbar-hide"],
};

const menu = [
  {
    link: "#",
    name: "About",
  },
  {
    link: "#",
    name: "Projects",
  },
  {
    link: "#",
    name: "Contact",
  },
  {
    link: "#",
    name: "Resume",
  },
];

function NavBar() {
  const [showSidebar, setSidebar] = useState(false);
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const controlNavbar = () => {
    if (typeof window !== "undefined") {
      if (window.scrollY > lastScrollY) {
        setShowNavbar(false);
      } else {
        setShowNavbar(true);
      }
      setLastScrollY(window.scrollY);
    }
  };

  const sidebarHandler = () => {
    setSidebar((state) => !state);
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", controlNavbar);

      return () => {
        window.removeEventListener("scroll", controlNavbar);
      };
    }
  }, [lastScrollY]);

  return (
    <CSSTransition
      mountOnEnter
      unmountOnExit
      in={showNavbar}
      timeout={200}
      classNames={classListNav}
    >
      <nav className={classes.navbar}>
        <h1>KG.</h1>
        <div className={classes.mobileicon} onClick={sidebarHandler}>
          {!showSidebar ? <BiMenu size="2em" /> : <MdClose size="2em" />}
        </div>
        <ul style={{right: !showSidebar ? null : 0}}>
            {menu.map((item, index) => {
              if (menu.length - 1 === index) {
                return (
                  <li key={index}>
                    <Button>{item.name}</Button>
                  </li>
                );
              }
              return (
                <li key={index}>
                  <a href={item.link}>{item.name}</a>
                </li>
              );
            })}
          </ul>
      </nav>
    </CSSTransition>
  );
}

export default NavBar;
