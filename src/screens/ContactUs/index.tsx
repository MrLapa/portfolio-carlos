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
              </ul>
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
