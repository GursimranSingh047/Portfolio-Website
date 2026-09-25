import { FaLaptopCode, FaBrain } from "react-icons/fa6";
import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container" id="experience">
      <div className="career-container">
        <div className="career-header">
          <div className="career-badge">JOURNEY</div>
          <h2>
            My career & <br />
            <span>experience</span>
          </h2>
          <p className="career-subtitle">
            A short timeline of my learning, work experience and key milestones.
          </p>
        </div>

        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>

          {/* Item 01 */}
          <div className="career-info-box">
            <div className="career-card">
              <div className="career-card-header">
                <div className="career-icon-box">
                  <FaLaptopCode />
                </div>
                <div className="career-card-title-wrap">
                  <h4>Web Development Trainee</h4>
                  <p className="career-company">
                    Deftsoft <span>|</span> Punjab, India
                  </p>
                </div>
              </div>
              <ul className="career-bullet-list">
                <li>
                  <span className="bullet-dot"></span>
                  <span>
                    Completed professional training in Full-Stack Web Development with the MERN Stack.
                  </span>
                </li>
                <li>
                  <span className="bullet-dot"></span>
                  <span>
                    Developed responsive web applications using React.js and MongoDB.
                  </span>
                </li>
                <li>
                  <span className="bullet-dot"></span>
                  <span>
                    Built RESTful APIs, implemented backend logic, and integrated databases.
                  </span>
                </li>
                <li>
                  <span className="bullet-dot"></span>
                  <span>
                    Worked with Git, authentication, API integration, and modern development workflows.
                  </span>
                </li>
                <li>
                  <span className="bullet-dot"></span>
                  <span>
                    Strengthened debugging, problem-solving, and collaborative software development skills.
                  </span>
                </li>
              </ul>
            </div>

            <div className="career-middle-col">
              <div className="career-node">
                <div className="career-node-inner"></div>
              </div>
              <div className="career-date-badge">JUN 2026 – JUL 2026</div>
              <div className="career-watermark">01</div>
            </div>

            <div className="career-keywords-col">
              <div className="career-dash"></div>
              <div className="career-keywords">
                <span>BUILD</span>
                <span>DEVELOP</span>
                <span>LEARN</span>
                <span>GROW</span>
              </div>
            </div>
          </div>

          {/* Item 02 */}
          <div className="career-info-box">
            <div className="career-card">
              <div className="career-card-header">
                <div className="career-icon-box">
                  <FaBrain />
                </div>
                <div className="career-card-title-wrap">
                  <h4>Project-Based Learning | Python, AI & ML</h4>
                  <p className="career-company">
                    ThinkNext Technologies <span>|</span> Punjab, India
                  </p>
                </div>
              </div>
              <ul className="career-bullet-list">
                <li>
                  <span className="bullet-dot"></span>
                  <span>
                    Developed backend applications using Python (Flask) with CRUD operations and REST APIs.
                  </span>
                </li>
                <li>
                  <span className="bullet-dot"></span>
                  <span>
                    Performed data preprocessing and implemented machine learning models for predictive analysis.
                  </span>
                </li>
                <li>
                  <span className="bullet-dot"></span>
                  <span>
                    Improved application performance through debugging, testing, and code optimization.
                  </span>
                </li>
                <li>
                  <span className="bullet-dot"></span>
                  <span>
                    Built a Music Recommender System using Python and Machine Learning techniques for personalized song recommendations.
                  </span>
                </li>
              </ul>
            </div>

            <div className="career-middle-col">
              <div className="career-node">
                <div className="career-node-inner"></div>
              </div>
              <div className="career-date-badge">JUN 2025 – AUG 2025</div>
              <div className="career-watermark">02</div>
            </div>

            <div className="career-keywords-col">
              <div className="career-dash"></div>
              <div className="career-keywords">
                <span>EXPLORE</span>
                <span>EXPERIMENT</span>
                <span>SOLVE</span>
                <span>IMPROVE</span>
              </div>
            </div>
          </div>

          {/* Timeline footer marker */}
          <div className="career-footer-marker">
            <div className="career-continuing-badge">AND CONTINUING ...</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
