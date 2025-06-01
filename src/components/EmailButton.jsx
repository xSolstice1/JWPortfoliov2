import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";

const EmailButton = () => {
  const [copied, setCopied] = useState(false);
  const email = "xsolsticegfx@gmail.com";

  const copyToClipboard = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);

    setTimeout(() => {
      setCopied(false);
    }, 2000);
  };
  return (
    <motion.button
      onClick={copyToClipboard}
      whileHover={{ y: -5 }}
      whileTap={{ scale: 1.1 }}
      className="relative px-1 py-4 text-sm text-center rounded-full font-extralight bg-black shadow-lg outline-sky-200 outline-2 w-[12rem] cursor-pointer overflow-hidden"
    >
      <AnimatePresence mode="wait">
        {copied ? (
          <motion.p
            className="flex items-center justify-center gap-2 text-white"
            key="copied"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.1, ease: "easeInOut" }}
          >
            <img src="assets/copy-done.svg" className="w-5" alt="Copied Icon" />
            Copied to clipboard!
          </motion.p>
        ) : (
          <motion.p
            className="flex items-center justify-center gap-2 text-white"
            key="copy"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.1 }}
          >
            <img src="assets/copy.svg" className="w-5" alt="Copy Icon" />
            Email
          </motion.p>
        )}
      </AnimatePresence>
    </motion.button>
  );
};

export default EmailButton;
