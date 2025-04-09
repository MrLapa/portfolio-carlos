import Image from 'next/image'

const Welcome = () => {
  return (
    <>
      <div>
        <div className="bg-effect-img" style={{ backgroundImage: 'url(assets/img/bg-effect-1.png)' }}>
          <div className="marquee">
            <h2>Carlos Garcia Carlos Garcia Carlos Garcia Carlos Garcia</h2>
          </div>
        </div>
        <section id="home" data-scroll-index={0} className="home-section-03">
          <div className="container position-relative">
            <div className="row align-items-center min-vh-100 justify-content-center">
              <div className="col-lg-6">
                <div className="home-image">
                  <div className="home-image-in">
                    <Image
                      src="/assets/img/welcome-avatar.jpg"
                      alt="welcome image"
                      width={500}
                      height={500}
                      style={{
                        width: "100%",
                        height: "auto",
                      }}
                    />
                  </div>
                </div>
                <div className="home-intro d-flex align-items-center flex-column">
                  <h1>Carlos Garcia</h1>
                  <h2>Software Engineer</h2>
                  <ul className="nav social-link">
                    <li>
                      <a href="https://www.linkedin.com/in/carlos-ali-garcia/" target='_blank'><i className="bi bi-linkedin" /></a>
                    </li>
                    <li>
                      <a href="https://github.com/MrLapa" target='_blank'><i className="bi bi-github" /></a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}

export default Welcome
