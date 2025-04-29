import Image from "next/image"
import { useTranslation } from "react-i18next"
import { InView } from "react-intersection-observer"

type Experience = {
  startDate: string
  endDate: string
  position: string
  company: string
  location: string
  description: string
}

const skills = [
  { name: "React", value: 100, icon: "/assets/img/stack-icons/react.svg" },
  { name: "TypeScript", value: 90, icon: "/assets/img/stack-icons/ts.svg" },
  { name: "Next.js", value: 90, icon: "/assets/img/stack-icons/nextjs.svg" },
  {
    name: "TanStack Query",
    value: 80,
    icon: "/assets/img/stack-icons/tanstack.png",
  },
  {
    name: "Apollo Client (GraphQL)",
    value: 80,
    icon: "/assets/img/stack-icons/graphql.svg",
  },
  { name: "Material UI", value: 90, icon: "/assets/img/stack-icons/mui.svg" },
  {
    name: "Tailwind CSS",
    value: 90,
    icon: "/assets/img/stack-icons/tailwindcss.svg",
  },
  {
    name: "Jest, React Testing Library",
    value: 90,
    icon: "/assets/img/stack-icons/jest.png",
  },
  {
    name: "Version Control (Git, GitHub)",
    value: 90,
    icon: "/assets/img/stack-icons/github.svg",
  },
  {
    name: "AI Tools (Copilot, Chat GPT)",
    value: 90,
    icon: "/assets/img/stack-icons/copilot.png",
  },
]

const About = () => {
  const { t } = useTranslation<string>()
  const experiences = t("about.experiences", {
    returnObjects: true,
  }) as Experience[]

  return (
    <div className="container">
      <div className="about-me">
        <div className="row align-items-start">
          <div className="col-lg-5 pb-4 pb-lg-0">
            <div className="title-01">
              <span>{t("about.title")}</span>
            </div>
            <div className="about-me-text pb-5">
              <p>{t("about.background")}</p>
            </div>
            <hr />
            <div className="title-01 mt-5">
              <span>{t("about.experience")}</span>
            </div>
            <div className="resume-box">
              <ul>
                {experiences.map((experience, index) => (
                  <li key={`experience-${index}`}>
                    <div className="icon">
                      <i className="bi bi-briefcase-fill" />
                    </div>
                    <span className="time">
                      {t(`about.experiences.${index}.startDate`)} -{" "}
                      {t(`about.experiences.${index}.endDate`)}
                    </span>
                    <h5>
                      {t(`about.experiences.${index}.position`)} –{" "}
                      {t(`about.experiences.${index}.company`)} (
                      {t(`about.experiences.${index}.location`)})
                    </h5>
                    <p>{t(`about.experiences.${index}.description`)}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="col-lg-7 sticky-lg-top ps-xl-5">
            <div className="row align-items-start">
              <div className="col-md-7 py-4">
                <div className="about-me-img">
                  <Image
                    src="/assets/img/welcome-avatar.jpg"
                    alt="title"
                    className="img-fluid"
                    width="400"
                    height="400"
                  />
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
                          href="mailto:your-email@example.com?subject=Hello&body=I would like to get in touch with you."
                        >
                          {t("about.mail")}
                        </a>
                      </div>
                    </li>
                    <li>
                      <div className="a-icon">
                        <i className="bi bi-file-earmark-person-fill" />
                      </div>
                      <div className="a-text">
                        <a
                          className="text-reset stretched-link"
                          href="/docs/carlos-garcia-frontend-resume-2025.pdf"
                          target="_blank"
                        >
                          {t("about.resume")}
                        </a>
                      </div>
                    </li>
                    <li>
                      <div className="a-icon">
                        <i className="bi bi-github" />
                      </div>
                      <div className="a-text">
                        <a
                          className="text-reset stretched-link"
                          href="https://github.com/MrLapa"
                          target="_blank"
                        >
                          {t("about.github")}
                        </a>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-12 py-4">
                <div className="title-01">
                  <span>{t("about.skills")}</span>
                </div>
                <InView triggerOnce>
                  {({ inView, ref }) => (
                    <div className="skills d-flex flex-column" ref={ref}>
                      {skills.map((skill, index) => (
                        <div
                          key={`skill-${index}`}
                          className="d-flex flex-column skill-lt gap-2"
                        >
                          <div className="d-flex align-items-center gap-2">
                            <h6 className="dark-color mb-0">{skill.name}</h6>
                            {skill.icon && (
                              <Image
                                src={skill.icon}
                                alt={skill.name}
                                width={20}
                                height={20}
                              />
                            )}
                          </div>
                          <div className={`skill-bar ${inView ? "open" : ""}`}>
                            <div
                              className="skill-bar-in"
                              style={{ width: `${skill.value}%` }}
                            >
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
