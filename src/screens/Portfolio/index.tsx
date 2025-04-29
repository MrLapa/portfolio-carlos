"use client"

import { useState } from "react"
import Modal from "react-modal"
import { Project } from "./types"
import Image from "next/image"
import { Swiper, SwiperSlide } from "swiper/react"
import { Navigation } from "swiper/modules"

import "swiper/css"
import "swiper/css/navigation"
import "swiper/css/pagination"
import { useTranslation } from "react-i18next"
import { projectsGallery } from "./data"

const Portfolio = () => {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [projectKey, setProjectKey] = useState<string | null>(null)
  const { t } = useTranslation()

  function toggleModalOne(key?: string) {
    setIsModalOpen(!isModalOpen)

    if (key) {
      setProjectKey(key)
    }
  }

  return (
    <div className="container">
      <div className="section-heading">
        <h3>
          <span>{t("portfolio.title")}</span>
        </h3>
      </div>
      <div className="lightbox-gallery">
        <div className="row g-3 g-lg-4 portfolio-content">
          {Object.entries(t("portfolio.items", { returnObjects: true })).map(
            ([key, project]: [string, Project]) => (
              <div className="col-sm-6 col-lg-4 grid-item" key={key}>
                <div className="portfolio-box">
                  <div className="portfolio-text">
                    <h6>{project.title}</h6>
                    <p>{project.subTitle}</p>
                  </div>
                  <div className="portfolio-img">
                    <div style={{ maxHeight: "318px", overflow: "hidden" }}>
                      <Image
                        src={projectsGallery[key].thumbnail}
                        alt="welcome image"
                        width={500}
                        height={500}
                        style={{
                          width: "100%",
                          height: "auto",
                        }}
                      />
                    </div>
                    <a
                      onClick={() => toggleModalOne(key)}
                      className="px_modal portfolio-modal-link"
                      href="#project_1"
                    >
                      <i className="bi bi-zoom-in" />
                    </a>
                  </div>
                </div>
              </div>
            ),
          )}
        </div>
        {projectKey && (
          <Modal
            isOpen={isModalOpen}
            onRequestClose={() => toggleModalOne()}
            ariaHideApp={false}
          >
            <div id="full_description" className="px-modal">
              <div className="single-project-box">
                <div className="row align-items-start">
                  <button
                    onClick={() => toggleModalOne()}
                    title="Close (Esc)"
                    type="button"
                    className="mfp-close"
                  >
                    ×
                  </button>
                  <div className="col-lg-7">
                    <div className="row g-2">
                      <Swiper
                        spaceBetween={10}
                        slidesPerView={1}
                        modules={[Navigation]}
                        navigation
                      >
                        {projectsGallery[projectKey].galleryImages.map(
                          (image, index) => (
                            <SwiperSlide key={index}>
                              <Image
                                src={image}
                                alt="welcome image"
                                width={1000}
                                height={1000}
                                style={{
                                  width: "100%",
                                  height: "auto",
                                }}
                              />
                            </SwiperSlide>
                          ),
                        )}
                      </Swiper>
                    </div>
                  </div>
                  <div className="col-lg-5 pt-4 pt-lg-0">
                    <h4>{t(`portfolio.items.${projectKey}.title`)}</h4>
                    <p className="mb-3">
                      {t(`portfolio.items.${projectKey}.desc`)}
                    </p>
                    <div className="about-content">
                      <ul>
                        <li className="d-flex flex-wrap">
                          <span className="col-12 col-xxl-3">
                            {t("portfolio.modal.type")}
                          </span>
                          <span className="col-12 col-xxl-9">
                            {t(`portfolio.items.${projectKey}.type`)}
                          </span>
                        </li>
                        <li className="d-flex flex-wrap align-items-start">
                          <span className="col-12 col-xxl-3">
                            {t("portfolio.modal.stack")}
                          </span>
                          <span className="col-12 col-xxl-9">
                            {t(`portfolio.items.${projectKey}.stack`)}
                          </span>
                        </li>
                        <li className="d-flex flex-wrap">
                          <span className="col-12 col-xxl-3">
                            {t("portfolio.modal.country")}
                          </span>
                          <span className="col-12 col-xxl-9">
                            {t(`portfolio.items.${projectKey}.country`)}
                          </span>
                        </li>
                        <li className="d-flex flex-wrap">
                          <span className="col-12 col-xxl-3">
                            {t("portfolio.modal.liveURL")}
                          </span>
                          <span className="col-12 col-xxl-9">
                            <a
                              href={t(`portfolio.items.${projectKey}.liveURL`)}
                              target="_blank"
                            >
                              {t(`portfolio.items.${projectKey}.liveURL`)}
                            </a>
                          </span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Modal>
        )}
      </div>
    </div>
  )
}

export default Portfolio
