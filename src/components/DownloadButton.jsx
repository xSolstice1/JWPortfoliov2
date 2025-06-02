import { motion } from "motion/react";

const DownloadButton = () => {
  return (
    <motion.a
      href="./documents/resume.pdf"
      download="Jinwei_Resume.pdf"
      whileHover={{ y: -5 }}
      whileTap={{ scale: 1.1 }}
      className="relative px-1 py-4 text-sm text-center rounded-full font-extralight bg-black shadow-lg outline-sky-200 outline-2 w-[12rem] cursor-pointer inline-flex items-center justify-center overflow-hidden hover:bg-gray-900 transition"
    >
      Download Resume
    </motion.a>
  );
};

export default DownloadButton;