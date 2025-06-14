"use client";
import { useState, useRef,useEffect } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/swiper-bundle.css';

type ProjectProps = {
  title: string;
  description:  string | null;
  tags: string[];
  Github?: string | null;
  preview?: string | undefined;
  imageUrl: string;
  Allimg: string[];
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
};

export default function Project({ 
  title, 
  description, 
  tags, 
  Github, 
  preview, 
  imageUrl, 
  Allimg, 
  isOpen, 
  onOpen, 
  onClose 
}: ProjectProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [loadedImages, setLoadedImages] = useState<boolean[]>(Array(Allimg.length).fill(false));
  const [activeIndex, setActiveIndex] = useState(0);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1.33 1"]
  });

  const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const opacityProgress = useTransform(scrollYProgress, [0, 1], [0.6, 1]);
  
  useEffect(() => {
    if (isOpen) {
      document.body.classList.add('no-scroll');
      setLoadedImages(Array(Allimg.length).fill(false));
    } else {
      document.body.classList.remove('no-scroll');
    }

    return () => {
      document.body.classList.remove('no-scroll');
    };
  }, [isOpen, Allimg.length]);

  const handleImageLoad = (index: number) => {
    setLoadedImages(prev => {
      const newLoaded = [...prev];
      newLoaded[index] = true;
      return newLoaded;
    });
  };

  const handleSlideChange = (swiper: any) => {
    setActiveIndex(swiper.realIndex);
  };

  return (
    <motion.div 
      className="group mb-3 sm:mb-8 last:mb-0" 
      onClick={onOpen}
      ref={ref}
      style={{
        scale: scaleProgress,
        opacity: opacityProgress,
      }}
    >
      <section className="bg-slate-100 sm:bg-white shadow-xl sm:shadow-sm max-w-[42rem] border border-black/5 rounded-lg overflow-hidden
          sm:pr-8 relative sm:h-[20rem] hover:bg-gray-200 transition sm:group-even:pl-8 dark:text-white
           dark:bg-white/10 dark:hover:bg-white/20">
        <div className="pt-4 pb-7 sm:pl-10 sm:pr-2 sm:pt-10 sm:max-w-[50%] flex flex-col h-full
              sm:group-even:ml-[18rem]">
          <h3 className="text-2xl px-2 md:px-0 font-semibold">{title}</h3>
          <p className="mt-2 leading-relaxed text-black text-sm dark:text-white/70 px-2 md:px-0">{description}</p>
          <ul className="flex flex-wrap mt-4 gap-2 sm:mt-auto px-2 md:px-0">
            {tags.map((tag, index) => (
              <li 
                key={index} 
                className="bg-black/[0.7] px-3 py-1 text-[0.7rem] uppercase tracking-wider text-white
                  rounded-full dark:text-white/70"
              >
                {tag}
              </li>
            ))}
          </ul>
        </div>

        <Image
          src={imageUrl}
          alt="Project preview"
          quality={100}
          width={400}
          height={100}
          className="absolute opacity-20 sm:opacity-100 top-8 -right-40 rounded-t-lg shadow-2xl transition group-hover:scale-[1.04]
               group-hover:-translate-x-3 group-hover:translate-y-3 group-hover:-rotate-2 
               group-even:group-hover:translate-x-3 group-even:group-hover:translate-y-3 group-even:group-hover:rotate-2
                group-even:right-[initial] group-even:-left-40"
        />

        {isOpen && (
          <div className="fixed inset-0 flex items-center justify-center w-full h-full bg-black/90 dark:bg-black/80 z-50">
            <div className="absolute top-24 w-full max-w-4xl px-4">
              <div className="flex justify-between items-center mb-4">
                <h3 className="hidden sm:block text-2xl font-semibold text-white">{title}</h3>
                <div className="flex items-center space-x-4">
                  {Github && (
                    <a 
                      href={Github} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="px-4 py-2 bg-gray-800 text-white rounded-md hover:bg-gray-700 transition flex items-center"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                        <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/>
                      </svg>
                      GitHub
                    </a>
                  )}
                  {preview && (
                    <a 
                      href={preview} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition flex items-center"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"/>
                      </svg>
                      Live Preview
                    </a>
                  )}
                  <button
                    className="p-2 bg-white/30 rounded-full hover:bg-white/50 cursor-pointer"
                    onClick={(e) => {
                      e.stopPropagation();
                      onClose();
                    }}
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>
              </div>
              
              {/* Swiper Container */}
              <div className="relative w-full h-[60vh] rounded-2xl bg-gray-900/50" onClick={(e) => e.stopPropagation()}>
                <Swiper
                  modules={[Navigation]}
                  slidesPerView={1}
                  spaceBetween={20}
                  pagination={{ clickable: true }}
                  navigation
                  loop={true}
                  className="h-full w-full"
                  onSlideChangeTransitionStart={() => {
                    setLoadedImages(prev => {
                      const newLoaded = [...prev];
                      newLoaded[activeIndex] = false;
                      return newLoaded;
                    });
                  }}
                  onSlideChange={handleSlideChange}
                >
                  {Allimg.map((image, index) => (
                    <SwiperSlide key={index} className="flex items-center justify-center">
                      <div className="relative w-full h-full">
                        {!loadedImages[index] && (
                          <div className="absolute inset-0 flex items-center justify-center bg-gray-800/50 animate-pulse">
                            <div className="w-16 h-16 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
                          </div>
                        )}
                        <Image
                          src={image}
                          alt={`${title} screenshot ${index + 1}`}
                          quality={100}
                          fill
                          className="object-contain"
                          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 60vw"
                          priority={index === 0}
                          onLoadingComplete={() => handleImageLoad(index)}
                        />
                      </div>
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>
            </div>
          </div>
        )}
      </section>
    </motion.div>
  );
}
