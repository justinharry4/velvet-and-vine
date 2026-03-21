import NavBar from "@/components/layout/NavBar";
import Hero from "./components/Hero";
import About from "./components/About";

const Home = () => {
  return (
    <div className="relative flex flex-col gap-26">
      <NavBar />
      <Hero />
      <About />
    </div>
  );
};

export default Home;
