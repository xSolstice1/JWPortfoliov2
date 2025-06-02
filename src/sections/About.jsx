import { useRef } from "react";
import Card from "../components/Card";
import { Globe } from "../components/Globe";
import EmailButton from "../components/EmailButton";
import { Frameworks } from "../components/Frameworks";

const About = () => {
  const grid2Container = useRef();
  return (
    <section id="about" className="c-space section-spacing scroll-mt-16">
      <h2 className="text-heading">About Me</h2>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-6 md:auto-rows-[18rem] mt-12">
        {/* Grid 1 */}
        <div className="flex items-end grid-default-color grid-1">
          <img
            src="assets/coding-pov.png"
            className="absolute scale-[1.75] -right-[5rem] -top-[1rem] md:scale-[3] md:left-50 md:inset-y-10 lg:scale-[2.5]"
          />
          <div className="z-10">
            <p className="headtext">Hi, I'm Jinwei</p>
            <p className="subtext">
              I've been working as a Data Engineer for slightly over a year
              right now, I mainly work with SQL in Snowflake and Tableau for
              data visualization.
            </p>
          </div>
          <div className="absolute inset-x-0 pointer-events-none -bottom-4 h-1/2 sm:h-1/3 bg-gradient-to-t from-indigo" />
        </div>
        {/* Grid 2 */}
        <div className="grid-default-color grid-2">
          <div
            ref={grid2Container}
            className="flex items-center justify-center w-full h-full"
          >
            <p className="flex items-end text-5xl text-gray-500">
              Click n' Drag!
            </p>
            <Card
              style={{
                rotate: "75deg",
                top: "30%",
                left: "20%",
                width: "6rem",
                height: "6rem",
                objectFit: "contain",
              }}
              image="./assets/logos/sql.png"
              containerRef={grid2Container}
            />
            <Card
              style={{
                rotate: "-30deg",
                top: "60%",
                left: "45%",
                width: "6rem",
                height: "6rem",
                objectFit: "contain",
              }}
              image="./assets/logos/snowflake.png"
              containerRef={grid2Container}
            />
            <Card
              style={{
                rotate: "30deg",
                bottom: "30%",
                left: "70%",
                width: "6rem",
                height: "6rem",
                objectFit: "contain",
              }}
              image="./assets/logos/react.svg"
              containerRef={grid2Container}
            />
            <Card
              style={{
                rotate: "-20deg",
                top: "70%",
                left: "20%",
                width: "6rem",
                height: "6rem",
                objectFit: "contain",
              }}
              image="./assets/logos/visualstudiocode.svg"
              containerRef={grid2Container}
            />
            <Card
              style={{
                rotate: "30deg",
                top: "70%",
                left: "70%",
                width: "6rem",
                height: "6rem",
                objectFit: "contain",
              }}
              image="./assets/logos/javascript.svg"
              containerRef={grid2Container}
            />
            <Card
              style={{
                rotate: "30deg",
                top: "70%",
                left: "70%",
                width: "6rem",
                height: "6rem",
                objectFit: "contain",
              }}
              image="./assets/logos/python.png"
              containerRef={grid2Container}
            />
          </div>
        </div>
        {/* Grid 3 */}
        <div className="grid-black-color grid-3">
          <div className="z-10 w-[50%]">
            <p className="headtext">Location</p>
            <p>
              I'm based in Singapore, open to Software Engineering
              opportunities!
            </p>
          </div>
          <figure className="absolute left-[30%] top-[10%]">
            <Globe />
          </figure>
        </div>
        {/* Grid 4 */}
        <div className="grid-special-color grid-4">
          <div className="flex flex-col items-center justify-center gap-4 size-full">
            <p className="text-center headtext">Contact</p>
            <EmailButton />
          </div>
        </div>
        {/* Grid 5 */}
        <div className="grid-default-color grid-5">
          <div className="z-10 w-[50%]">
            <p className="headtext">Tech Stack</p>
            <p className="subtext">
              These are the technologies I have experience working with. I'm
              committed to continuously expanding my expertise and staying up to
              date with the latest tools in the industry!
            </p>
          </div>
          <div className="absolute inset-y-0 md:inset-y-9 w-full h-full start-[50%] md:scale-125">
            <Frameworks />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
