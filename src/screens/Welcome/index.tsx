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
                    <Image src="/assets/img/home-banner.jpg" alt="home banner" width={100} height={100} />
                  </div>
                </div>
                <div className="home-intro d-flex align-items-center flex-column">
                  <h1>Carlos Garcia</h1>
                  <h2>Software Engineer</h2>
                  <ul className="nav social-link">
                    <li>
                      <a href="#"><i className="fab fa-twitter" /></a>
                    </li>
                    <li>
                      <a href="#"><i className="fab fa-instagram" /></a>
                    </li>
                    <li>
                      <a href="#"><i className="fab fa-facebook" /></a>
                    </li>
                    <li>
                      <a href="#"><i className="fab fa-pinterest" /></a>
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
