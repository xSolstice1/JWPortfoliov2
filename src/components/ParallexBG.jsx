import { motion, useScroll, useTransform, useSpring } from "motion/react";

const ParallexBG = () => {
  const { scrollYProgress } = useScroll();
  const x = useSpring(scrollYProgress, { damping: 50 });
  const stars3Y = useTransform(x, [0, 0.5], ["0%", "70%"]);
  const starsX = useTransform(x, [0, 0.5], ["0%", "-20%"]);
  const stars2Y = useTransform(x, [0, 0.5], ["0%", "30%"]);
  const mountain1Y = useTransform(x, [0, 0.5], ["0%", "0%"]);

  return (
    <section className="absolute inset-0 bg-black/40">
      <div className="relative h-screen overflow-y-hidden">
        {/* Sky */}
        <motion.div
          className="aboslute inset-0 w-full h-screen -z 50"
          style={{
            backgroundImage: "url(./assets/nebulaskypink.png)",
            backgroundPosition: "bottom",
            backgroundSize: "cover",
          }}
        />
        {/* Stars3 */}
        <motion.div
          className="absolute inset-0 -z 40"
          style={{
            backgroundImage: "url(./assets/stars3.png)",
            backgroundPosition: "bottom",
            backgroundSize: "cover",
            y: stars3Y,
          }}
        />
        {/* Stars1 */}
        <motion.div
          className="absolute inset-0 -z 30"
          style={{
            backgroundImage: "url(./assets/stars1.png)",
            backgroundPosition: "bottom",
            backgroundSize: "cover",
            x: starsX,
          }}
        />
        {/* Stars2 */}
        <motion.div
          className="absolute inset-0 -z 20"
          style={{
            backgroundImage: "url(./assets/stars2.png)",
            backgroundPosition: "bottom",
            backgroundSize: "cover",
            y: stars2Y,
          }}
        />
        {/* Mountain 1 */}
        <motion.div
          className="absolute inset-0 -z 10"
          style={{
            backgroundImage: "url(./assets/mountain-1.png)",
            backgroundPosition: "bottom",
            backgroundSize: "cover",
            y: mountain1Y,
          }}
        />
      </div>
    </section>
  );
};

export default ParallexBG;
