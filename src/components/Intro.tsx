"use client";

import Image from "next/image";
import { BsLinkedin } from "react-icons/bs";
import { FaGithubSquare } from "react-icons/fa";
import { ScrollText, Download, X } from "lucide-react";
import { motion } from "framer-motion";
import { Fade } from "react-awesome-reveal";
import { useSectionInView } from "@/lib/useInView";
import { useEffect, useState } from "react";

const Intro = () => {
  const [isResumeOpen, setIsResumeOpen] = useState(false);
  const { ref: homeRef } = useSectionInView("#home", 0.5);

  const handleDownload = () => {
    const fileUrl = "/salman-pk.pdf";
    const link = document.createElement("a");
    link.href = fileUrl;
    link.download = "Salmanul_Faris_Pk.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  useEffect(() => {
    if (isResumeOpen) {
      document.body.classList.add("no-scroll");
    } else {
      document.body.classList.remove("no-scroll");
    }

    return () => {
      document.body.classList.remove("no-scroll");
    };
  }, [isResumeOpen]);

  return (
    <section
      className="mb-28 max-w-[75rem] text-center sm:mb-0"
      ref={homeRef}
      id="home"
    >
      {isResumeOpen && (
        <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4">
          <div className="relative max-w-4xl w-full">
            <button
              onClick={() => setIsResumeOpen(false)}
              className="absolute -top-14 right-44 sm:top-2 sm:right-[450px] p-2 rounded-full bg-gray-700 sm:bg-gray-600 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors text-white z-50"
            >
              <X size={24} />
            </button>

            <motion.div
              className="bg-white dark:bg-gray-900 rounded-lg w-full max-h-[90vh] overflow-auto"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
            >
              <div className="p-6">
                <Image
                  src="/resumee.jpg"
                  alt="Salmanul Faris Resume"
                  width={800}
                  height={1000}
                  className="w-full h-auto"
                />

                <div className="mt-6 flex justify-center">
                  <button
                    onClick={handleDownload}
                    className="group bg-gray-900 text-white px-7 py-3 flex items-center gap-2 rounded-full 
              outline-none focus:scale-110 hover:scale-110 hover:bg-gray-950 dark:bg-white/10 active:scale-105 transition'"
                  >
                    <Download size={20} />
                    Download Resume
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      )}

      <div className="flex items-center justify-center">
        <div className="relative">
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: "spring",
              stiffness: 125,
              damping: 10,
              duration: 0.2,
            }}
          >
            <Image
              src="/pkk1.png"
              alt="profile-img"
              width="300"
              height="200"
              quality={100}
              priority={true}
              className="rounded-full shadow-xl object-cover"
            />
          </motion.div>
          <motion.span
            className="hidden xl:block text-6xl absolute bottom-8 right-12"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: "spring",
              stiffness: 125,
              damping: 10,
              duration: 0.2,
            }}
          >
            👋
          </motion.span>
        </div>
      </div>

      <Fade
        direction="up"
        delay={400}
        cascade
        damping={1e-1}
        triggerOnce={true}
      >
        <h1 className="mb-10 mt-4 px-4 text-2xl sm:text-4xl">
          <span className="font-medium !leading-[1.5]">Salmanul Faris pk</span>{" "}
          <p className="text-[14px]">
            Expert in MERN stack development, delivering full-stack web
            solutions with seamless integration and optimized performance.
          </p>
        </h1>
      </Fade>

      <motion.div
        className="flex sm:flex-row items-center justify-center gap-4 px-4 text-lg font-medium"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.1,
        }}
      >
        <div className="relative">
          <button
            onClick={() => setIsResumeOpen(true)}
            className="group bg-gray-900 text-white px-7 py-3 flex items-center gap-2 rounded-full 
            outline-none focus:scale-110 hover:scale-110 hover:bg-gray-950 dark:bg-white/10 active:scale-105 transition"
          >
            View Résumé
            <ScrollText color="#d1d5db" />
          </button>
        </div>

        <a
          className="bg-gray-900 p-4 text-white flex items-center gap-2  rounded-full focus:scale-[1.15] hover:scale-[1.15] active:scale-105 
           transition cursor-pointer border-black dark:bg-white/10 dark:text-white/60"
          href="https://linkedin.com/in/salmanul-faris-pk-719b35295"
          target="_blank"
        >
          <BsLinkedin />
        </a>

        <a
          className="bg-gray-900 p-4 text-white flex items-center gap-2 text-[1.35rem] rounded-full focus:scale-[1.15] hover:scale-[1.15] active:scale-105 
           transition cursor-pointer border-black dark:bg-white/10 dark:text-white/60"
          href="https://github.com/salman-faris-pk"
          target="_blank"
        >
          <FaGithubSquare />
        </a>
      </motion.div>
    </section>
  );
};

export default Intro;
