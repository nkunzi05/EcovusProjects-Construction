import Nav from "./components/Nav";
import Hero from "./components/Hero";
import Statement from "./components/Statement";
import Services from "./components/Services";
import Flagship from "./components/Flagship";
import Projects from "./components/Projects";
import Story from "./components/Story";
import Process from "./components/Process";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  return (
    <>
      <a
        href="#services"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[70] focus:bg-navy focus:px-4 focus:py-2 focus:text-white"
      >
        Skip to content
      </a>
      <Nav />
      <main>
        <Hero />
        <Services />
        <Statement />
        <Projects />
        <Flagship />
        <Story />
        <Process />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
