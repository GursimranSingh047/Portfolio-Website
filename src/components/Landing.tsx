import { MdArrowForward, MdFileDownload } from "react-icons/md";
import "./styles/Landing.css";

const Landing = () => {
  return (
    <div className="landing-section" id="landingDiv">
      <div className="landing-container">
        <div className="landing-intro">
          <h2>HELLO! I'M</h2>
          <h1>
            GURSIMRAN
            <br />
            <span className="name-purple">SINGH</span>
          </h1>
          <div className="landing-roles">
            <div className="role-primary">AI/ML ENGINEER</div>
            <div className="role-secondary">FULL-STACK DEVELOPER</div>
          </div>
          <p className="landing-description">
            I build intelligent products using AI, data and modern web technologies.
          </p>
          <div className="landing-cta">
            <a href="#projects" className="cta-button cta-primary" data-cursor="disable">
              <span>VIEW MY WORK</span>
              <MdArrowForward className="cta-icon" />
            </a>
            <a
              href="/resume.pdf"
              className="cta-button cta-secondary"
              data-cursor="disable"
              target="_blank"
              rel="noopener noreferrer"
              download="Gursimran_Singh_Resume.pdf"
            >
              <span>DOWNLOAD RESUME</span>
              <MdFileDownload className="cta-icon" />
            </a>
          </div>
        </div>

        <div className="landing-tagline">
          <span>BUILDING</span>
          <span>INTELLIGENT</span>
          <span>SOLUTIONS</span>
          <span>FOR A</span>
          <span>BETTER</span>
          <span>TOMORROW</span>
        </div>
      </div>
    </div>
  );
};

export default Landing;
