import NavBar from "@/components/layout/NavBar";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";

const Home = () => {
  return (
    <div className="relative flex flex-col">
      <NavBar />
      <Hero />
      <About />
      <Services />
    </div>
  );
};

export default Home;
