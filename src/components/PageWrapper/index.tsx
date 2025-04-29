"use client"

import About from "@/src/screens/About"
import Sidebar from "../Sidebar"
import Services from "@/src/screens/Services"
import Portfolio from "@/src/screens/Portfolio"
import ContactUs from "@/src/screens/ContactUs"
import Welcome from "@/src/screens/Welcome"
import Footer from "../Footer"
import { Element } from "react-scroll"
import { useState } from "react"
import I18nextProvider from "@/src/providers/I18nextProvider"

type Sections = {
  [key: string]: {
    component: React.FC
    className?: string
  }
}

const PageWrapper = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const sections: Sections = {
    home: { component: Welcome },
    about: {
      component: About,
      className: "gray-bg-1",
    },
    services: { component: Services },
    portfolio: { component: Portfolio, className: "gray-bg-1" },
    contactus: { component: ContactUs },
  }

  return (
    <I18nextProvider>
      <Sidebar isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
      <main className="wrapper" onClick={() => setIsMenuOpen(false)}>
        {Object.keys(sections).map((section, index) => {
          const { component: SectionComponent, className } = sections[section]

          return (
            <Element
              key={`section-${index}`}
              name={section}
              className={`section ${section}-section ${className || ""}`}
            >
              <SectionComponent />
            </Element>
          )
        })}
      </main>
      <Footer />
    </I18nextProvider>
  )
}

export default PageWrapper
