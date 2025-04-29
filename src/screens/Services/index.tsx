import { useTranslation } from "react-i18next"

type Service = {
  key: string
  title: string
  description: string
}

const serviceIcons: Record<string, string> = {
  frontend: "bi bi-code-slash",
  performance: "bi bi-gear",
  testing: "bi bi-bug",
  components: "bi bi-layers",
  api: "bi bi-diagram-3",
  agile: "bi bi-people-fill",
}

const Services = () => {
  const { t } = useTranslation()

  return (
    <div className="container">
      <div className="section-heading">
        <h3>
          <span>{t("services.title")}</span>
        </h3>
      </div>
      <div className="row gy-4">
        {(t("services.items", { returnObjects: true }) as Service[]).map(
          (service: Service) => (
            <div key={service.key} className="col-sm-6 col-lg-4 d-flex">
              <div className="feature-box-01">
                <div className="icon">
                  <i className={serviceIcons[service.key]} />
                </div>
                <div className="feature-content">
                  <h5>{service.title}</h5>
                  <p>{service.description}</p>
                </div>
              </div>
            </div>
          ),
        )}
      </div>
    </div>
  )
}

export default Services
