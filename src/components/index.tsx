import React from 'react'

const Sidebar = () => {
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
          <li className="active">
            <a data-scroll-nav={0} href="#home">
              <span className="m-icon">
                <i className="bi-house-door" />
              </span>
              <span className="m-text">Home</span>
            </a>
          </li>
          <li>
            <a data-scroll-nav={1} href="#about">
              <span className="m-icon">
                <i className="bi-person" />
              </span>
              <span className="m-text">About</span>
            </a>
          </li>
          <li>
            <a data-scroll-nav={2} href="#services">
              <span className="m-icon">
                <i className="bi-briefcase" />
              </span>
              <span className="m-text">Services</span>
            </a>
          </li>
          <li>
            <a data-scroll-nav={3} href="#portfolio">
              <span className="m-icon">
                <i className="bi-columns" />
              </span>
              <span className="m-text">Portfolio</span>
            </a>
          </li>
          <li>
            <a data-scroll-nav={4} href="#contactus">
              <span className="m-icon">
                <i className="bi-telephone" />
              </span>
              <span className="m-text">Contact</span>
            </a>
          </li>
        </ul>
      </div>
    </>
  )
}

export default Sidebar