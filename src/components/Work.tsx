import { FaGithub } from "react-icons/fa6";
import { MdArrowOutward } from "react-icons/md";
import "./styles/Work.css";
import WorkImage from "./WorkImage";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);

interface Project {
  num: string;
  title: string;
  category: string;
  description: string;
  tools: string[];
  image: string;
  liveUrl?: string;
  githubUrl?: string;
  status?: string;
}

const projects: Project[] = [
  {
    num: "01",
    title: "AI Co-Builder",
    category: "AI / Full-Stack",
    description:
      "AI-powered project planning and development assistant that helps turn project ideas into structured development roadmaps.",
    tools: ["Python", "FastAPI", "React", "Gemini API", "Machine Learning"],
    image: "/images/ai-co-builder.png",
    liveUrl: "https://ai-cobuilder.netlify.app/",
    githubUrl: "https://github.com/GursimranSingh047/AICoBuilder",
  },
  {
    num: "02",
    title: "AI Stack Auditor",
    category: "AI / Security",
    description:
      "AI-powered application auditing system designed to analyze application stacks and identify potential security and technical issues.",
    tools: ["Python", "FastAPI", "AI", "REST APIs", "Security Analysis"],
    image: "/images/ai-stack-auditor.png",
    liveUrl: "https://ai-stack-auditor-two.vercel.app",
    githubUrl: "https://github.com/GursimranSingh047/AI-stack-auditor/tree/main",
  },
  {
    num: "03",
    title: "Breast Cancer Prediction System",
    category: "Machine Learning",
    description:
      "Machine-learning application that uses trained classification models to predict breast cancer outcomes from input features.",
    tools: ["Python", "Scikit-learn", "Pandas", "NumPy", "Machine Learning"],
    image: "/images/breast-cancer-prediction.png",
    liveUrl: "https://breast-cancer-dashboard-kocyrqgchb7qli6hdgftr6.streamlit.app",
    githubUrl: "https://github.com/GursimranSingh047/breast-cancer-dashboard",
  },
  {
    num: "04",
    title: "Punjabi Music Recommender",
    category: "Machine Learning / Recommendation System",
    description:
      "Personalized Punjabi music recommendation system that recommends songs based on user preferences and similarity between songs.",
    tools: ["Python", "Pandas", "NumPy", "Scikit-learn", "Streamlit"],
    image: "/images/punjabi-music-recommender.png",
    githubUrl: "https://github.com/GursimranSingh047/Music_Recommender",
  },
  {
    num: "05",
    title: "CodeSage",
    category: "AI / Cybersecurity / Multi-Agent",
    status: "IN PROGRESS",
    description:
      "AI-powered multi-agent security auditing platform combining static analysis, LLM-based vulnerability triage, automated patch generation, verification, and GitHub pull-request automation.",
    tools: [
      "Python",
      "LangGraph",
      "LLM",
      "FastAPI",
      "React",
      "Semgrep",
      "Bandit",
      "Gitleaks",
    ],
    image: "/images/codesage.png",
    githubUrl: "https://github.com/GursimranSingh047/CodeSage",
  },
];

const Work = () => {
  useGSAP(() => {
    function calculateScroll() {
      const workFlex = document.querySelector(".work-flex") as HTMLElement;
      if (!workFlex) return 0;
      const scrollWidth = workFlex.scrollWidth;
      const clientWidth = window.innerWidth;
      const extraOffset = clientWidth > 768 ? 160 : 60;
      return Math.max(0, scrollWidth - clientWidth + extraOffset);
    }

    const timeline = gsap.timeline({
      scrollTrigger: {
        trigger: ".work-section",
        start: "top top",
        end: () => `+=${calculateScroll()}`,
        scrub: 1,
        pin: true,
        pinSpacing: true,
        anticipatePin: 1,
        id: "work",
        invalidateOnRefresh: true,
      },
    });

    timeline.to(".work-flex", {
      x: () => -calculateScroll(),
      ease: "none",
    });

    const handleResize = () => {
      ScrollTrigger.refresh();
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      timeline.kill();
      ScrollTrigger.getById("work")?.kill();
    };
  }, []);

  return (
    <div className="work-section" id="projects">
      <span id="work" style={{ position: "absolute", top: 0 }}></span>
      <div className="work-container">
        <h2>
          My <span>Work</span>
        </h2>
        <div className="work-flex">
          {projects.map((project) => (
            <div className="work-box" key={project.num}>
              <div className="work-info">
                <div className="work-title">
                  <h3>{project.num}</h3>
                  <div>
                    <h4>{project.title}</h4>
                    <p className="work-category">{project.category}</p>
                  </div>
                </div>

                {project.status && (
                  <div className="work-status-wrap">
                    <span className="work-status-badge">
                      <span className="work-status-dot"></span>
                      {project.status}
                    </span>
                  </div>
                )}

                <p className="work-desc">{project.description}</p>

                <div className="work-tools-wrap">
                  {project.tools.map((tool) => (
                    <span className="work-tool-tag" key={tool}>
                      {tool}
                    </span>
                  ))}
                </div>

                <div className="work-links-row">
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="work-btn work-btn-primary"
                      data-cursor="disable"
                      aria-label={`Open Live Demo for ${project.title}`}
                    >
                      <span>LIVE DEMO</span>
                      <MdArrowOutward />
                    </a>
                  )}
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="work-btn work-btn-secondary"
                      data-cursor="disable"
                      aria-label={`View ${project.title} on GitHub`}
                    >
                      <FaGithub />
                      <span>GITHUB</span>
                    </a>
                  )}
                </div>
              </div>

              <WorkImage
                image={project.image}
                alt={project.title}
                link={project.liveUrl || project.githubUrl}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Work;
