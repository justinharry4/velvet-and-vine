import NavBar from "@/components/shared/NavBar";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import Gallery from "./components/Gallery";
import Trust from "./components/Trust";

const Home = () => {
  return (
    <div className="relative flex flex-col">
      <NavBar />
      <Hero />
      <About />
      <Services />
      <Gallery />
      <Trust />
    </div>
  );
};

export default Home;
