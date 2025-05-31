import HeroText from "../components/HeroText";
import ParallexBG from "../components/ParallexBG";

const Hero = () => {
  return (
    <section className="flex items-start justify-center md:items-start md:justify-start min-h-screen overflow-hidden c-space">
      <HeroText />
      <ParallexBG />
    </section>
  );
};

export default Hero;
