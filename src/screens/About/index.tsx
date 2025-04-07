const skills = [
  { name: "HTML5", value: 92 },
  { name: "WordPress", value: 75 },
  { name: "Magento", value: 86 },
  { name: "UI/UX", value: 88 },
]

const About = ({ isActive, isEnteringFromTop }: {
  isActive: boolean,
  isEnteringFromTop: boolean
}) => {
  return (
    <div className="container">
      <div className="about-me">
        <div className="row align-items-start">
          <div className="col-lg-5 pb-4 pb-lg-0">
            <div className="title-01">
              <span>About Me</span>
            </div>
            <div className="about-me-text pb-5">
              <h3>My Name Is Tapsi d{"'"}Souza</h3>
              <h5><span>I Am Available</span> For UI UX Design Projects</h5>
              <p>Born in 2000, AB type living in USA. We provide on-screen design for websites and apps, as well as front-end implementation. We will continue to pursue a wide range of expressions and better code by pursuing our “likes”.</p>
              <div className="row pt-2">
                <div className="col-auto">
                  <div className="a-count">
                    <span className="count">5k</span>
                    <div className="a-count-text">Projects <br />Completed.</div>
                  </div>
                </div>
                <div className="col-auto">
                  <div className="a-count">
                    <span className="count">3k</span>
                    <div className="a-count-text">Satisfied <br />Clients.</div>
                  </div>
                </div>
              </div>
            </div>
            <hr />
            <div className="title-01 mt-5">
              <span>Experience</span>
            </div>
            <div className="resume-box">
              <ul>
                <li>
                  <div className="icon">
                    <i className="fas fa-briefcase" />
                  </div>
                  <span className="time">2019 - Present</span>
                  <h5>Art Director - Facebook Inc</h5>
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                </li>
                <li>
                  <div className="icon">
                    <i className="fas fa-briefcase" />
                  </div>
                  <span className="time">2019 - Present</span>
                  <h5>Art Director - Facebook Inc</h5>
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                </li>
                <li>
                  <div className="icon">
                    <i className="fas fa-briefcase" />
                  </div>
                  <span className="time">2019 - Present</span>
                  <h5>Art Director - Facebook Inc</h5>
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-7 sticky-lg-top ps-xl-5">
            <div className="row align-items-start">
              <div className="col-md-7 py-4">
                {/* <div className="about-me-img">
                  <Image src="assets/img/about-banner.jpg" alt="title" className="img-fluid" />
                </div> */}
              </div>
              <div className="col-md-5 py-4">
                <div className="about-content">
                  <ul>
                    <li>
                      <div className="a-icon">
                        <i className="fab fa-skype" />
                      </div>
                      <div className="a-text">
                        <a className="text-reset stretched-link" href="#">Skype me</a>
                      </div>
                    </li>
                    <li>
                      <div className="a-icon">
                        <i className="fa fa-envelope" />
                      </div>
                      <div className="a-text">
                        <a className="text-reset stretched-link" href="#">Mail Me</a>
                      </div>
                    </li>
                    <li>
                      <div className="a-icon">
                        <i className="fab fa-whatsapp" />
                      </div>
                      <div className="a-text">
                        <a className="text-reset stretched-link" href="#">WhatsApp Me</a>
                      </div>
                    </li>
                    <li>
                      <div className="a-icon">
                        <i className="fa fa-map" />
                      </div>
                      <div className="a-text">
                        <a className="text-reset stretched-link" href="#">Meet Me</a>
                      </div>
                    </li>
                    <li>
                      <div className="a-icon">
                        <i className="fa-solid fa-file-pdf" />
                      </div>
                      <div className="a-text">
                        <a className="text-reset stretched-link" href="#">Resume</a>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-12 py-4">
                <div className="title-01">
                  <span>Skills</span>
                </div>
                <div className="skills d-flex flex-column">
                  {skills.map((skill, index) => (
                    <div key={index} className="skill-lt">
                      <h6 className="dark-color">{skill.name}</h6>
                      <div className={`skill-bar ${isActive && isEnteringFromTop ? "open" : ""}`}>
                        <div className="skill-bar-in" style={{ width: `${skill.value}%` }}>
                          <span>{skill.value}%</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
