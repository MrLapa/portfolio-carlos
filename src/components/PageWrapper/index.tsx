'use client'

import About from "@/src/screens/About";
import Sidebar from "../Sidebar";
import { InView } from "react-intersection-observer";
import Services from "@/src/screens/Services";
import Portfolio from "@/src/screens/Portfolio";
import ContactUs from "@/src/screens/ContactUs";
import { useRef, useState } from "react";
import Welcome from "@/src/screens/Welcome";

const PageWrapper = () => {
  const [activeSection, setActiveSection] = useState({
    section: "home",
    isEnteringFromTop: false,
  });

  const previousY = useRef<number | null>(null);

  const sections: Record<string, { component: React.FC; className?: string }> = {
    home: { component: Welcome },
    about: {
      component: () => <About
        isActive={activeSection.section === "about"}
        isEnteringFromTop={activeSection.isEnteringFromTop} />,
      className: "gray-bg-1"
    },
    services: { component: Services },
    portfolio: { component: Portfolio, className: "gray-bg-1" },
    contactus: { component: ContactUs },
  };

  return (
    <>
      <Sidebar activeLink={activeSection.section} />
      <main className="wrapper">
        {Object.keys(sections).map((section, index) => {
          const { component: SectionComponent, className } = sections[section];
          return (
            <InView
              key={index}
              as="section"
              id={section}
              data-scroll-index={index + 1}
              className={`section ${section}-section ${className || ""}`}
              threshold={0.5}
              onChange={(inView, entry) => {
                const currentY = entry.boundingClientRect.top;

                if (inView) {
                  setActiveSection({
                    section,
                    isEnteringFromTop: previousY.current !== null && currentY > previousY.current,
                  });
                }

                previousY.current = currentY;
              }}
            >
              <SectionComponent />
            </InView>
          );
        })}
      </main >
    </>
  )
}

export default PageWrapper