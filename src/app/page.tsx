import { About } from "../screens/About"
import ContactUs from "../screens/ContactUs"
import Portfolio from "../screens/Portfolio"
import Services from "../screens/Services"
import Welcome from "../screens/Welcome"

export default function Home() {
  return (
    <main className="wrapper">
      <Welcome />
      <section id="about" data-scroll-index={1} className="section about-section gray-bg-1">
        <About />
      </section>
      <section id="services" data-scroll-index={2} className="section services-section">
        <Services />
      </section>
      <section id="portfolio" data-scroll-index={3} className="section portfolio-section gray-bg-1">
        <Portfolio />
      </section>
      <section id="contactus" data-scroll-index={4} className="section contactus-section gray-bg-1">
        <ContactUs />
      </section>
    </main >
  );
}
