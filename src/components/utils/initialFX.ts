import { SplitText } from "gsap/SplitText";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollSmoother } from "gsap/ScrollSmoother";

export function initialFX() {
  document.body.style.overflowY = "auto";
  const smoother = ScrollSmoother.get();
  if (smoother) {
    smoother.paused(false);
  }
  ScrollTrigger.sort();
  ScrollTrigger.refresh();

  const mainElem = document.getElementsByTagName("main")[0];
  if (mainElem) {
    mainElem.classList.add("main-active");
  }

  gsap.to("body", {
    backgroundColor: "#0b080c",
    duration: 0.5,
    delay: 1,
  });

  const introTargets = document.querySelectorAll(".landing-intro h2, .landing-intro h1");
  if (introTargets.length > 0) {
    const landingText = new SplitText(introTargets, {
      type: "chars,lines",
      linesClass: "split-line",
    });
    gsap.fromTo(
      landingText.chars,
      { opacity: 0, y: 80, filter: "blur(5px)" },
      {
        opacity: 1,
        duration: 1.2,
        filter: "blur(0px)",
        ease: "power3.inOut",
        y: 0,
        stagger: 0.025,
        delay: 0.3,
      }
    );
  }

  gsap.fromTo(
    [".header", ".icons-section", ".nav-fade"],
    { opacity: 0 },
    {
      opacity: 1,
      duration: 1.2,
      ease: "power1.inOut",
      delay: 0.1,
    }
  );

  // Animate roles, description, CTA, and tagline
  gsap.fromTo(
    ".landing-roles",
    { opacity: 0, y: 20 },
    {
      opacity: 1,
      duration: 1,
      ease: "power2.out",
      y: 0,
      delay: 0.6,
    }
  );

  gsap.fromTo(
    ".landing-description",
    { opacity: 0, y: 20 },
    {
      opacity: 1,
      duration: 1,
      ease: "power2.out",
      y: 0,
      delay: 0.8,
    }
  );

  gsap.fromTo(
    ".landing-cta",
    { opacity: 0, y: 20 },
    {
      opacity: 1,
      duration: 1,
      ease: "power2.out",
      y: 0,
      delay: 1.0,
    }
  );

  gsap.fromTo(
    ".landing-tagline",
    { opacity: 0, x: 20 },
    {
      opacity: 1,
      duration: 1.2,
      ease: "power2.out",
      x: 0,
      delay: 1.1,
    }
  );
}
