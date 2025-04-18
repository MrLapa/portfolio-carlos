'use client'

import React, { useState } from "react";
import Modal from "react-modal";
import { projects } from "./data";
import { Project } from "./types";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const Portfolio = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState<Project | null>(null);

  function toggleModalOne(value?: Project) {
    setIsModalOpen(!isModalOpen);

    if (value) {
      setModalContent(value);
    }
  }

  return (
    <div className="container">
      <div className="section-heading">
        <h3>
          <span>My Portfolio</span>
        </h3>
      </div>
      <div className="lightbox-gallery">
        <div className="row g-3 g-lg-4 portfolio-content">
          {projects.map((data, index) => (
            <div className="col-sm-6 col-lg-4 grid-item" key={index}>
              <div className="portfolio-box">
                <div className="portfolio-text">
                  <h6>{data.title}</h6>
                  <p>{data.subTitle}</p>
                </div>
                <div className="portfolio-img">
                  <div style={{ maxHeight: "318px", overflow: "hidden" }}>
                    <Image
                      src={data.thumbnail}
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
                    onClick={() => toggleModalOne(data)}
                    className="px_modal portfolio-modal-link"
                    href="#project_1"
                  >
                    <i className="bi bi-zoom-in" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
        {modalContent && (
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
                        {modalContent.galleryImages.map((image, index) => (
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
                        ))}
                      </Swiper>
                    </div>
                  </div>
                  <div className="col-lg-5 pt-4 pt-lg-0">
                    <h4>{modalContent.title}</h4>
                    <p className="mb-3">{modalContent.desc}</p>
                    <div className="about-content">
                      <ul>
                        <li className="d-flex flex-wrap">
                          <span className="col-12 col-xxl-3">Type:</span>
                          <span className="col-12 col-xxl-9">{modalContent.type}</span>
                        </li>
                        <li className="d-flex flex-wrap align-items-start">
                          <span className="col-12 col-xxl-3">Stack:</span>
                          <span className="col-12 col-xxl-9">{modalContent.languages}</span>
                        </li>
                        <li className="d-flex flex-wrap">
                          <span className="col-12 col-xxl-3">Country:</span>
                          <span className="col-12 col-xxl-9">{modalContent.country}</span>
                        </li>
                        <li className="d-flex flex-wrap">
                          <span className="col-12 col-xxl-3">Live URL:</span>
                          <span className="col-12 col-xxl-9">
                            <a href={modalContent.liveURL} target="_blank">{modalContent.liveURL}</a>
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
  );
}

export default Portfolio
