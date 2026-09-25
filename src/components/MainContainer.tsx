import { lazy, Suspense, useLayoutEffect, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollSmoother } from "gsap/ScrollSmoother";
import About from "./About";
import Career from "./Career";
import Contact from "./Contact";
import Cursor from "./Cursor";
import Landing from "./Landing";
import Navbar from "./Navbar";
import SocialIcons from "./SocialIcons";
import WhatIDo from "./WhatIDo";
import Work from "./Work";
import setSplitText from "./utils/splitText";
import { setAllTimeline } from "./utils/GsapScroll";

gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

const ParticleField = lazy(() => import("./ParticleField"));

const MainContainer = () => {
  const [, setIsDesktopView] = useState<boolean>(
    window.innerWidth > 1024
  );

  useLayoutEffect(() => {
    let smootherInstance = ScrollSmoother.get();
    if (!smootherInstance) {
      smootherInstance = ScrollSmoother.create({
        wrapper: "#smooth-wrapper",
        content: "#smooth-content",
        smooth: 1.7,
        speed: 1.7,
        effects: true,
        autoResize: true,
        ignoreMobileResize: true,
      });
      smootherInstance.scrollTop(0);
      smootherInstance.paused(true);
    }

    setSplitText();
    setAllTimeline();
    ScrollTrigger.sort();
    ScrollTrigger.refresh();

    const resizeHandler = () => {
      setSplitText();
      setAllTimeline();
      setIsDesktopView(window.innerWidth > 1024);
      ScrollSmoother.refresh(true);
      ScrollTrigger.refresh();
    };

    window.addEventListener("resize", resizeHandler);
    return () => {
      window.removeEventListener("resize", resizeHandler);
    };
  }, []);

  return (
    <div className="container-main">
      <Cursor />
      <Navbar />
      <SocialIcons />
      <Suspense fallback={null}>
        <ParticleField />
      </Suspense>
      <div id="smooth-wrapper">
        <div id="smooth-content">
          <div className="container-main">
            <Landing />
            <About />
            <WhatIDo />
            <Career />
            <Work />
            <Contact />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainContainer;
