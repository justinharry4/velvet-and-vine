import NavBar from "@/components/shared/NavBar";
import Footer from "@/components/shared/Footer";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import Gallery from "./components/Gallery";
import Trust from "./components/Trust";
import ProcessSteps from "./components/ProcessSteps";
import FinalCTA from "./components/FinalCTA";

const Home = () => {
  return (
    <div className="relative flex flex-col">
      <NavBar />
      <Hero />
      <About />
      <Services />
      <Gallery />
      <Trust />
      <ProcessSteps />
      <FinalCTA />
      <Footer />
    </div>
  );
};

export default Home;
