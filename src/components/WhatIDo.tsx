import { useRef } from "react";
import {
  FaBrain,
  FaServer,
  FaCode,
  FaMicrochip,
  FaCompass,
} from "react-icons/fa6";
import "./styles/WhatIDo.css";

const skillCategories = [
  {
    id: "ai-ml",
    title: "AI / MACHINE LEARNING",
    icon: <FaBrain />,
    skills: [
      "Python",
      "Machine Learning",
      "Generative AI",
      "LLM Integration",
      "Scikit-learn",
      "Pandas",
      "NumPy",
    ],
  },
  {
    id: "backend",
    title: "BACKEND",
    icon: <FaServer />,
    skills: [
      "Python",
      "FastAPI",
      "REST APIs",
      "SQL",
      "PostgreSQL",
      "JWT / Authentication",
    ],
  },
  {
    id: "frontend",
    title: "FRONTEND",
    icon: <FaCode />,
    skills: ["React.js", "JavaScript", "HTML", "CSS", "Tailwind CSS"],
  },
  {
    id: "tools-platforms",
    title: "TOOLS & AI PLATFORMS",
    icon: <FaMicrochip />,
    skills: ["Git", "GitHub", "Docker", "Google Gemini API", "LangGraph"],
  },
];

const exploringSkills = [
  "TypeScript",
  "Next.js",
  "Node.js",
  "NLP",
  "RAG",
  "AI Agents",
];

const WhatIDo = () => {
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

  const handleMouseMove = (
    e: React.MouseEvent<HTMLDivElement>,
    index: number
  ) => {
    const card = cardsRef.current[index];
    if (!card) return;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = ((y - centerY) / centerY) * -5;
    const rotateY = ((x - centerX) / centerX) * 5;

    card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-4px)`;
    card.style.setProperty("--mouse-x", `${x}px`);
    card.style.setProperty("--mouse-y", `${y}px`);
  };

  const handleMouseLeave = (index: number) => {
    const card = cardsRef.current[index];
    if (!card) return;
    card.style.transform = "perspective(1000px) rotateX(0deg) rotateY(0deg) translateY(0)";
  };

  return (
    <div className="whatIDO skills-section section-container" id="skills">
      {/* GSAP marker helper */}
      <div className="what-box-in" style={{ display: "none" }}></div>

      <div className="skills-container">
        {/* Header */}
        <div className="skills-header">
          <div className="skills-badge">CAPABILITIES</div>
          <h2>
            Technical <br />
            <span>Skills</span>
          </h2>
          <p className="skills-subtitle">
            A focused overview of my core engineering toolkit across AI/ML, backend, frontend, and modern development platforms.
          </p>
        </div>

        {/* 4 Main Skill Cards */}
        <div className="skills-grid">
          {skillCategories.map((category, index) => (
            <div
              key={category.id}
              className="skill-card"
              ref={(el) => (cardsRef.current[index] = el)}
              onMouseMove={(e) => handleMouseMove(e, index)}
              onMouseLeave={() => handleMouseLeave(index)}
            >
              <div className="skill-card-glow"></div>
              <div className="skill-card-header">
                <div className="skill-icon-box">{category.icon}</div>
                <h3>{category.title}</h3>
              </div>
              <div className="skill-pills-wrap">
                {category.skills.map((skill) => (
                  <span key={skill} className="skill-pill">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Currently Exploring Sub-Section */}
        <div className="exploring-card">
          <div className="exploring-header">
            <div className="exploring-icon-box">
              <FaCompass />
            </div>
            <div>
              <div className="exploring-title">CURRENTLY EXPLORING</div>
              <p className="exploring-desc">
                Currently exploring technologies for building more advanced AI-powered applications.
              </p>
            </div>
          </div>
          <div className="exploring-pills-wrap">
            {exploringSkills.map((skill) => (
              <span key={skill} className="exploring-pill">
                <span className="exploring-dot"></span>
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhatIDo;
