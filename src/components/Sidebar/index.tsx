"use client"

import useIsMobile from "@/src/hooks/useIsMobile"
import { useState } from "react"
import { Link } from "react-scroll"
import LanguageToggle from "../LanguageToggle"
import { useTranslation } from "react-i18next"

type SidebarProps = {
  isMenuOpen: boolean
  setIsMenuOpen: (isOpen: boolean) => void
}

const Sidebar = ({ isMenuOpen, setIsMenuOpen }: SidebarProps) => {
  const [activeLink, setActiveLink] = useState("home")
  const isMobile = useIsMobile()

  const { t } = useTranslation()

  const menuItems = [
    {
      id: "home",
      href: "#home",
      iconClass: "bi-house-door",
      text: t("welcome.title"),
    },
    {
      id: "about",
      href: "#about",
      iconClass: "bi-person",
      text: t("about.title"),
    },
    {
      id: "services",
      href: "#services",
      iconClass: "bi-briefcase",
      text: t("services.title"),
    },
    {
      id: "portfolio",
      href: "#portfolio",
      iconClass: "bi-columns",
      text: t("portfolio.title"),
    },
    {
      id: "contactus",
      href: "#contactus",
      iconClass: "bi-telephone",
      text: t("contact.title"),
    },
  ]

  return (
    <>
      <header className="main-header d-flex d-lg-none position-fixed top-0 start-0 end-0 z-3 border-bottom p-2 bg-body-tertiary">
        <div className="d-lg-none">
          <LanguageToggle />
        </div>
        <div className="ms-auto">
          <button
            className="toggler-menu"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <span />
          </button>
        </div>
      </header>
      <div
        className={`header-left-fixed one-page-nav justify-content-lg-between pb-5 ${isMenuOpen ? "menu-open" : ""}`}
      >
        <div className="d-flex d-lg-none justify-content-center">
          <button
            className="btn btn-link text-white fs-4 p-0"
            onClick={() => setIsMenuOpen(false)}
            aria-label="Close menu"
          >
            <i className="bi bi-x" />
          </button>
        </div>
        <ul className="main-menu">
          {menuItems.map((item, index) => (
            <li
              key={`item-${index}`}
              className={activeLink === item.id ? "active" : ""}
            >
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
        <div className="d-none d-lg-block">
          <LanguageToggle />
        </div>
      </div>
    </>
  )
}

export default Sidebar
