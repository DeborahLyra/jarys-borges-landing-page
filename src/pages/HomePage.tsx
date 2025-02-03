import { AboutMe } from "../components/aboutMe/AboutMe";
import { Banner } from "../components/Banner/Banner";
import { Contact } from "../components/contact/Contact";
import { Footer } from "../components/footer/Footer";
import { Navbar } from "../components/Navbar/Navbar";
import { Surgeries } from "../components/surgeries/Surgeries";


export function HomePage() {
  return (
    <div className="h-screen">
      <Navbar />
      <Banner />
      <AboutMe />
      <Surgeries/>
      <Contact />
      <Footer/>
    </div>
  )
}
