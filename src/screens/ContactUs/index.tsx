const ContactUs = () => {
  return (
    <div className="container">
      <div className="row gy-5">
        <div className="col-lg-5 d-flex">
          <div className="d-flex flex-column w-100">
            <div className="contact-info">
              <h3>Let’s Discuss Your Project</h3>
              <ul>
                <li>
                  <div className="icon">
                    <i className="bi-chat-left-dots-fill" />
                  </div>
                  <div className="text">
                    <label>Chat to us</label>
                    <p>
                      Our friendly team is there to help.{" "}
                      <span>
                        <a
                          className="text-reset"
                          href="mailto:info@domainname.com"
                        >
                          info@domainname.com
                        </a>
                      </span>
                    </p>
                  </div>
                </li>
                <li>
                  <div className="icon">
                    <i className="bi-compass" />
                  </div>
                  <div className="text">
                    <label>Visit us</label>
                    <p>
                      {" "}
                      Come say hello at our office HQ.{" "}
                      <span>
                        Warnwe Park Streetperrine, <br /> FL 33157 New York
                        City
                      </span>
                    </p>
                  </div>
                </li>
                <li>
                  <div className="icon">
                    <i className="bi-phone" />
                  </div>
                  <div className="text">
                    <label>Call us</label>
                    <p>
                      Mon-Fri from 8am to 5pm. <span>+01 (555) 000-0000</span>
                    </p>
                  </div>
                </li>
              </ul>
              <div className="google-map mt-5">
                <div className="ratio ratio-21x9">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3151.840107317064!2d144.955925!3d-37.817214!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xb6899234e561db11!2sEnvato!5e0!3m2!1sen!2sin!4v1520156366883"
                    allowFullScreen
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-7 ps-xl-5">
          {/* <ContactForm /> */}
        </div>
      </div>
    </div>
  )
}

export default ContactUs
