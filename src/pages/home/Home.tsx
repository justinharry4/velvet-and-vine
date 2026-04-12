import NavBar from "@/components/layout/NavBar";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import Gallery from "./components/Gallery";

const Home = () => {
  return (
    <div className="relative flex flex-col">
      <NavBar />
      <Hero />
      <About />
      <Services />
      <Gallery />
    </div>
  );
};

export default Home;
