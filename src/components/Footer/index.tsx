import Image from "next/image"
import React from "react"

const Footer = () => {
  return (
    <div className="footer">
      <div className="container">
        <div className="footer-info">
          <div className="footer-avatar">
            <Image
              src="/assets/img/welcome-avatar.jpg"
              alt="welcome image"
              width={500}
              height={500}
              style={{
                width: "100%",
                height: "auto",
              }}
            />
          </div>
          <h6>Carlos Garcia</h6>
        </div>
        <ul className="nav social-link">
          <li>
            <a
              href="https://www.linkedin.com/in/carlos-ali-garcia/"
              target="_blank"
            >
              <i className="bi bi-linkedin" />
            </a>
          </li>
          <li>
            <a href="https://github.com/MrLapa" target="_blank">
              <i className="bi bi-github" />
            </a>
          </li>
        </ul>
        <p className="copyright">©2025 copyright all right reserved</p>
      </div>
    </div>
  )
}

export default Footer
