import { mySocials } from "../constants/constants";
const Footer = () => {
  return (
    <section className="flex flex-wrap items-center justify-between gap-5 pb-3 text-sm text-neutral-400 c-space">
      <div className="bg-gradient-to-r from-transparent via-neutral-700 to-transparent h-[1px] w-full" />
      <div className="flex gap-2">
        <p>
          Built with{" "}
          <span className="text-white transition-all duration-300 hover:text-blue-500 hover:scale-105 inline-block">
            React/Vite
          </span>{" "}
          and{" "}
          <span className="text-white transition-all duration-300 hover:text-blue-500 hover:scale-105 inline-block">
            TailwindCSS
          </span>
        </p>
      </div>
      <div className="flex gap-3">
        {mySocials.map((social, index) => (
          <a href={social.href} key={index} target="_blank">
            <img src={social.icon} className="w-5 h-5" alt={social.name} />
          </a>
        ))}
      </div>
      <p>© Ang Jin Wei. All rights reserved.</p>
    </section>
  );
};

export default Footer;
