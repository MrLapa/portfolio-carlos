const services = [
  {
    icon: "bi bi-code-slash",
    title: "Front-End Development",
    description: "Modern, responsive, and maintainable interfaces built with React, TypeScript, and Next.js. I craft smooth user experiences using component-based architecture and best practices.",
  },
  {
    icon: "bi bi-gear",
    title: "Performance Optimization & SEO",
    description: "Optimizing web apps for speed, SEO, and mobile responsiveness using Next.js features like image optimization, dynamic routing, and server-side rendering (SSR).",
  },
  {
    icon: "bi bi-bug",
    title: "Testing & Quality Assurance",
    description: "Robust testing strategies with Jest, React Testing Library, Vitest, and Cypress. I help ensure your UI works as expected across browsers and devices.",
  },
  {
    icon: "bi bi-layers",
    title: "Component Architecture",
    description: "Development of scalable and reusable UI libraries using Storybook and Material UI. Promoting design consistency and faster development cycles.",
  },
  {
    icon: "bi bi-diagram-3",
    title: "API Integration",
    description: "Efficient data fetching and state management using TanStack Query (React Query), Apollo Client, and integration with GraphQL and REST APIs.",
  },
  {
    icon: "bi bi-people-fill",
    title: "Agile Development & Collaboration",
    description: "Experience working in agile teams with strong communication, rapid iteration, and focus on delivering high-quality features on time.",
  }
]

const Services = () => {
  return (
    <div className="container">
      <div className="section-heading">
        <h3>
          <span>MY SERVICES</span>
        </h3>
      </div>
      <div className="row gy-4">
        {services.map((service, index) => (
          <div key={`service-${index}`} className="col-sm-6 col-lg-4 d-flex">
            <div className="feature-box-01">
              <div className="icon"><i className={`bi ${service.icon}`} /></div>
              <div className="feature-content">
                <h5>{service.title}</h5>
                <p>{service.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Services
