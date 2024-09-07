import { useEffect } from "react";
import HeroSection from "./components/HeroSection";
import { useGlobalContext } from "./context";
import Banner from "./Banner";
import CardGrid from "./CardGrid";
import Cards from "./Cards";



const Home = () => {
  const { updateHomePage } = useGlobalContext();

  useEffect(() => updateHomePage(), []);

  return (
    <div >
      <HeroSection />
       <Banner/>
       <Cards />
      <CardGrid />
    </div>
  );
};

export default Home;
