import { AboutMe } from "../components/aboutMe/AboutMe";
import { Banner } from "../components/Banner/Banner";
import { Contact } from "../components/contact/Contact";
import { Footer } from "../components/footer/Footer";
import { Navbar } from "../components/Navbar/Navbar";
import { Surgeries } from "../components/surgeries/Surgeries";
import { WhatsappLogo } from "phosphor-react";


export function HomePage() {
  return (
    <div className="h-screen">
      <Navbar />
      <Banner />
      <AboutMe />
      <Surgeries />
      <Contact />
      <Footer />
      <a
        className="fixed bottom-8 right-8 flex items-center justify-center bg-brightGreen text-white hover:bg-lightGreen rounded-full shadow-lg p-4 transition-all duration-300 transform hover:scale-110 hover:shadow-xl"
        aria-label="Contato via WhatsApp"
        href="https://api.whatsapp.com/send?phone=5581993169020&text=Ol%C3%A1,%20gostaria%20de%20agendar%20uma%20consulta%20com%20Dr.%20Járys%20Borges%20"
        target="_blank"
      >
        <WhatsappLogo size={32} />
      </a>
    </div>
  )
}
