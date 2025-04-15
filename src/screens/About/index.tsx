import Image from "next/image"
import { InView } from "react-intersection-observer"

const skills = [
  { name: "React", value: 100 },
  { name: "TypeScript", value: 90 },
  { name: "Next.js", value: 90 },
  { name: "TanStack Query", value: 80 },
  { name: "Apollo Client (GraphQL)", value: 80 },
  { name: "Material UI", value: 90 },
  { name: "Tailwind CSS", value: 90 },
  { name: "Unit tests (Jest, React Testing Library)", value: 90 },
  { name: "Version Control (Git, GitHub)", value: 90 },
]

const About = () => {
  return (
    <div className="container">
      <div className="about-me">
        <div className="row align-items-start">
          <div className="col-lg-5 pb-4 pb-lg-0">
            <div className="title-01">
              <span>About Me</span>
            </div>
            <div className="about-me-text pb-5">
              <p>I&apos;m a Software Engineer with 8 years of experience building high-quality web applications, specializing in React, TypeScript, and front-end technologies. I thrive in agile teams, strive to write clean, maintainable code, and focus on creating smooth, user-friendly experiences.
                Driven by curiosity and a strong commitment to best practices, I bring a proactive approach to problem-solving and continuous improvement.</p>
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
                  <span className="time">2023 - Present</span>
                  <h5>Software Engineer – Wizeline SAS (Colombia)</h5>
                  <p>Building performant UIs with MUI and Next.js. Writing unit tests with Jest and React Testing Library. Using TanStack Query and GraphQL for efficient data handling.</p>
                </li>
                <li>
                  <div className="icon">
                    <i className="fas fa-briefcase" />
                  </div>
                  <span className="time">2024 - 2025</span>
                  <h5>Frontend Developer – Miami Yachting (Freelance)</h5>
                  <p>
                    Developed a yacht marketplace with Gatsby, Axios, and Styled Components. Implemented dynamic filters, responsive UI, and fast-loading pages for a seamless search experience.
                  </p>
                </li>
                <li>
                  <div className="icon">
                    <i className="fas fa-briefcase" />
                  </div>
                  <span className="time">2021 - 2022</span>
                  <h5>Frontend Developer – BoatyardX SAS (Colombia)</h5>
                  <p>Building responsive financial apps with Next.js and TypeScript. Created reusable components with Storybook and integrated GraphQL APIs. Ensured quality with Jest and Cypress tests.</p>
                </li>
                <li>
                  <div className="icon">
                    <i className="fas fa-briefcase" />
                  </div>
                  <span className="time">2019 - 2020</span>
                  <h5>Software Developer – Falabella (Colombia)</h5>
                  <p>Developing ASP.NET MVC and React apps. Built Web APIs and handled Oracle DBs for enterprise-grade solutions.</p>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-7 sticky-lg-top ps-xl-5">
            <div className="row align-items-start">
              <div className="col-md-7 py-4">
                <div className="about-me-img">
                  <Image src="/assets/img/welcome-avatar.jpg" alt="title" className="img-fluid" width="400" height="400" />
                </div>
              </div>
              <div className="col-md-5 py-4">
                <div className="about-content">
                  <ul>
                    <li>
                      <div className="a-icon">
                        <i className="bi bi-envelope-at-fill" />
                      </div>
                      <div className="a-text">
                        <a
                          className="text-reset stretched-link"
                          href="mailto:your-email@example.com?subject=Hello&body=I would like to get in touch with you.">
                          Mail Me
                        </a>
                      </div>
                    </li>
                    <li>
                      <div className="a-icon">
                        <i className="bi bi-file-earmark-person-fill" />
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
                <InView triggerOnce>
                  {({ inView, ref }) => (
                    <div className="skills d-flex flex-column" ref={ref}>
                      {skills.map((skill, index) => (
                        <div key={`skill-${index}`} className="skill-lt">
                          <h6 className="dark-color">{skill.name}</h6>
                          <div className={`skill-bar ${inView ? 'open' : ''}`}>
                            <div className="skill-bar-in" style={{ width: `${skill.value}%` }}>
                              <span>{skill.value}%</span>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </InView>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
