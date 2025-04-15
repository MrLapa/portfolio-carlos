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

const experiences = [
  {
    company: "Wizeline SAS",
    position: "Software Engineer",
    startDate: "2023",
    endDate: "Present",
    description: "Building performant UIs with MUI and Next.js. Writing unit tests with Jest and React Testing Library. Using TanStack Query and GraphQL for efficient data handling.",
    location: "Colombia"
  },
  {
    company: "Miami Yachting",
    position: "Frontend Developer",
    startDate: "2024",
    endDate: "2025",
    description: "Developing a yacht marketplace with Gatsby, Axios, and Styled Components. Implemented dynamic filters, responsive UI, and fast-loading pages for a seamless search experience.",
    location: "Miami, FL"
  },
  {
    company: "BoatyardX SAS",
    position: "Frontend Developer",
    startDate: "2021",
    endDate: "2022",
    description: "Building responsive financial apps with Next.js and TypeScript. Created reusable components with Storybook and integrated GraphQL APIs. Ensured quality with Jest and Cypress tests.",
    location: "Colombia"
  },
  {
    company: "Falabella",
    position: "Software Developer",
    startDate: "2019",
    endDate: "2020",
    description: "Developing ASP.NET MVC and React apps. Built Web APIs and handled Oracle DBs for enterprise-grade solutions.",
    location: "Colombia"
  }
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
            </div>
            <hr />
            <div className="title-01 mt-5">
              <span>Experience</span>
            </div>
            <div className="resume-box">
              <ul>
                {experiences.map((experience, index) => (
                  <li key={`experience-${index}`}>
                    <div className="icon">
                      <i className="bi bi-briefcase-fill" />
                    </div>
                    <span className="time">{experience.startDate} - {experience.endDate}</span>
                    <h5>{experience.position} – {experience.company} ({experience.location})</h5>
                    <p>{experience.description}</p>
                  </li>))}
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
