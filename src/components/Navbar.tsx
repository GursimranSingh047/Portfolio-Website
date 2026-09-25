import { useEffect } from "react";
import HoverLinks from "./HoverLinks";
import { ScrollSmoother } from "gsap/ScrollSmoother";
import "./styles/Navbar.css";

const Navbar = () => {
  useEffect(() => {
    const links = document.querySelectorAll(".header ul a");
    links.forEach((elem) => {
      const element = elem as HTMLAnchorElement;
      element.addEventListener("click", (e) => {
        if (window.innerWidth > 1024) {
          e.preventDefault();
          const target = e.currentTarget as HTMLAnchorElement;
          const section = target.getAttribute("data-href");
          const smoother = ScrollSmoother.get();
          if (smoother && section) {
            smoother.scrollTo(section, true, "top top");
          }
        }
      });
    });
  }, []);


  return (
    <>
      <div className="header">
        <a href="/#" className="navbar-brand" data-cursor="disable">
          <div className="navbar-avatar-wrap">
            <img
              src="/images/portrait.jpg"
              alt="Gursimran Singh"
              className="navbar-avatar"
            />
          </div>
          <div className="navbar-brand-text">
            <span className="navbar-title">Gursimran.dev</span>
            <span className="navbar-subtitle">Gursimran Singh</span>
          </div>
        </a>

        <a
          href="mailto:gursimranbaidwan23@gmail.com"
          className="navbar-connect"
          data-cursor="disable"
        >
          gursimranbaidwan23@gmail.com
        </a>

        <ul>
          <li>
            <a data-href="#about" href="#about">
              <HoverLinks text="ABOUT" />
            </a>
          </li>
          <li>
            <a data-href="#skills" href="#skills">
              <HoverLinks text="SKILLS" />
            </a>
          </li>
          <li>
            <a data-href="#projects" href="#projects">
              <HoverLinks text="PROJECTS" />
            </a>
          </li>
          <li>
            <a data-href="#experience" href="#experience">
              <HoverLinks text="EXPERIENCE" />
            </a>
          </li>
          <li>
            <a data-href="#contact" href="#contact">
              <HoverLinks text="CONTACT" />
            </a>
          </li>
        </ul>
      </div>

      <div className="landing-circle1"></div>
      <div className="landing-circle2"></div>
      <div className="nav-fade"></div>
    </>
  );
};

export default Navbar;
