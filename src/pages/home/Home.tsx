import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import Gallery from "./components/Gallery";
import Trust from "./components/Trust";
import ProcessSteps from "./components/ProcessSteps";
import FinalCTA from "./components/FinalCTA";
import BaseLayout from "@/components/layout/BaseLayout";

const Home = () => {
  return (
    <div className="relative flex flex-col">
      <BaseLayout>
        <Hero />
        <About />
        <Services />
        <Gallery />
        <Trust />
        <ProcessSteps />
        <FinalCTA />
      </BaseLayout>
    </div>
  );
};

export default Home;
