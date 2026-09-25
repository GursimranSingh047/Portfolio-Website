import { FaGithub, FaLinkedinIn } from "react-icons/fa6";
import { MdOutlineEmail, MdFileDownload, MdArrowOutward, MdCopyright } from "react-icons/md";
import "./styles/Contact.css";

const Contact = () => {
  return (
    <div className="contact-section section-container" id="contact">
      <div className="contact-container">
        {/* Top Tag & CTA */}
        <div className="contact-header">
          <div className="contact-badge">GET IN TOUCH</div>
          <h2 className="contact-cta-title">
            Let's build something <br />
            <span>intelligent.</span>
          </h2>
          <p className="contact-bio">
            <strong>Gursimran Singh</strong> — AI/ML Engineer | Full-Stack Developer
          </p>
        </div>

        {/* 4 Interactive Action Buttons */}
        <div className="contact-actions">
          <a
            href="mailto:gursimranbaidwan23@gmail.com"
            className="contact-btn contact-btn-primary"
            data-cursor="disable"
            aria-label="Send Email to Gursimran Singh"
          >
            <MdOutlineEmail className="contact-btn-icon" />
            <span>Email Me</span>
            <MdArrowOutward className="contact-btn-arrow" />
          </a>

          <a
            href="https://github.com/GursimranSingh047"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-btn contact-btn-glass"
            data-cursor="disable"
            aria-label="Visit Gursimran Singh GitHub Profile"
          >
            <FaGithub className="contact-btn-icon" />
            <span>GitHub</span>
            <MdArrowOutward className="contact-btn-arrow" />
          </a>

          <a
            href="https://www.linkedin.com/in/gursimran-singh-3ab29035a/"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-btn contact-btn-glass"
            data-cursor="disable"
            aria-label="Visit Gursimran Singh LinkedIn Profile"
          >
            <FaLinkedinIn className="contact-btn-icon" />
            <span>LinkedIn</span>
            <MdArrowOutward className="contact-btn-arrow" />
          </a>

          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            download="Gursimran_Singh_Resume.pdf"
            className="contact-btn contact-btn-glass"
            data-cursor="disable"
            aria-label="Download Resume PDF"
          >
            <MdFileDownload className="contact-btn-icon" />
            <span>Download Resume</span>
          </a>
        </div>

        {/* Footer Area */}
        <div className="contact-footer">
          <div className="footer-left">
            <span className="footer-brand">Gursimran.dev</span>
            <p className="footer-role">AI/ML Engineer & Full-Stack Developer</p>
          </div>

          <div className="footer-center">
            <a
              href="mailto:gursimranbaidwan23@gmail.com"
              className="footer-email"
              data-cursor="disable"
            >
              gursimranbaidwan23@gmail.com
            </a>
          </div>

          <div className="footer-right">
            <div className="footer-socials">
              <a
                href="https://github.com/GursimranSingh047"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub Profile"
                data-cursor="disable"
              >
                <FaGithub />
              </a>
              <a
                href="https://www.linkedin.com/in/gursimran-singh-3ab29035a/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn Profile"
                data-cursor="disable"
              >
                <FaLinkedinIn />
              </a>
            </div>
            <div className="footer-copyright">
              <MdCopyright /> {new Date().getFullYear()} Gursimran Singh. All rights reserved.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
