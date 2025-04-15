'use client'

import useIsMobile from "@/src/hooks/useIsMobile";
import { useState } from "react";
import { Link } from "react-scroll";

const menuItems = [
  { id: "home", href: "#home", iconClass: "bi-house-door", text: "Home" },
  { id: "about", href: "#about", iconClass: "bi-person", text: "About" },
  { id: "services", href: "#services", iconClass: "bi-briefcase", text: "Services" },
  { id: "portfolio", href: "#portfolio", iconClass: "bi-columns", text: "Portfolio" },
  { id: "contactus", href: "#contactus", iconClass: "bi-telephone", text: "Contact" },
];

const Sidebar = () => {
  const [openMenu, setOpenMenu] = useState(false)
  const [activeLink, setActiveLink] = useState("home")
  const isMobile = useIsMobile();

  return (
    <>
      <header className="main-header d-lg-none">
        <div className="container">
          <div className="ms-auto">
            <button
              className="toggler-menu"
              onClick={() => setOpenMenu(!openMenu)}
            >
              <span />
            </button>
          </div>
        </div>
      </header>
      <div className={`header-left-fixed one-page-nav ${openMenu ? "menu-open" : ""}`}>
        <ul className="main-menu">
          {menuItems.map((item, index) => (
            <li key={`item-${index}`} className={activeLink === item.id ? "active" : ""}>
              <Link
                spy
                to={item.id}
                onSetActive={() => setActiveLink(item.id)}
                offset={isMobile ? -48 : 0}
              >
                <span className="m-icon">
                  <i className={item.iconClass} />
                </span>
                <span className="m-text">{item.text}</span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </>
  )
}

export default Sidebar