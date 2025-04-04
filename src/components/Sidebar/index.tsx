const menuItems = [
  { id: "home", href: "#home", iconClass: "bi-house-door", text: "Home" },
  { id: "about", href: "#about", iconClass: "bi-person", text: "About" },
  { id: "services", href: "#services", iconClass: "bi-briefcase", text: "Services" },
  { id: "portfolio", href: "#portfolio", iconClass: "bi-columns", text: "Portfolio" },
  { id: "contactus", href: "#contactus", iconClass: "bi-telephone", text: "Contact" },
];

const Sidebar = ({ activeLink = "home" }: { activeLink: string }) => {
  return (
    <>
      <header className="main-header d-lg-none">
        <div className="container">
          <div className="ms-auto">
            <button
              className="toggler-menu"
            // onClick={() => setOpenMenu(!openMenu)}
            >
              <span />
            </button>
          </div>
        </div>
      </header>
      <div className={`header-left-fixed one-page-nav ${"menu-open"}`}>
        <ul className="main-menu">
          {menuItems.map((item, index) => (
            <li key={index} className={activeLink === item.id ? "active" : ""}>
              <a data-scroll-nav={index} href={item.href}>
                <span className="m-icon">
                  <i className={item.iconClass} />
                </span>
                <span className="m-text">{item.text}</span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </>
  )
}

export default Sidebar