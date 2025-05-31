import { FlipWords } from "./FlipWords";

const HeroText = () => {
  return (
    <div className="z-10 mt-20 text-center md:mt-40 md:text-left rounded-3xl bg-clip-text">
      {/* Desktop View */}
      <div className="flex-col hidden md:flex c-space">
        <h1 className="text-4xl font-medium">Hello, I'm Jinwei</h1>
        <div className="flex flex-col items-start">
          <p className="text-5xl font-medium text-neutral-300">
            A Data Engineer / Aspiring Software Engineer <br /> Dedicated to Crafting
          </p>
          <div>
            <FlipWords
              words={["Secure", "Optimized", "Modern"]}
              className="font-black text-white text-8xl"
            />
          </div>
          <p className="text-4xl font-medium text-neutral-300">
            Data-Driven Solutions
          </p>
        </div>
      </div>
      {/* Mobile View */}
      <div></div>
    </div>
  );
};

export default HeroText;
