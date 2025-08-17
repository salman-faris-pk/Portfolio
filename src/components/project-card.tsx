"use client";
import { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";

type ProjectProps = {
  title: string;
  description: string | null;
  tags: string[];
  Github?: string | null;
  preview?: string | undefined;
  imageUrl: string;
  onOpen: () => void;
};

export default function Project({ 
  title, 
  description, 
  tags, 
  imageUrl, 
  onOpen
}: ProjectProps) {
  const ref = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1.33 1"]
  });

  const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const opacityProgress = useTransform(scrollYProgress, [0, 1], [0.6, 1]);

  return (
    <motion.div 
      className="group mb-6 sm:mb-8 last:mb-0" 
      onClick={onOpen}
      ref={ref}
      style={{
        scale: scaleProgress,
        opacity: opacityProgress,
      }}
    >
      <section className="bg-slate-100 max-w-[42rem] border border-black/5 rounded-lg overflow-hidden relative
          sm:pr-8 sm:h-[20rem] hover:bg-gray-200 transition sm:group-even:pl-8 dark:text-white
          dark:bg-white/10 dark:hover:bg-white/20
          shadow-lg sm:shadow-sm mb-12 sm:mb-0">
        <div className="sm:hidden relative h-48 w-full">
          <Image
            src={imageUrl}
            alt="Project preview"
            fill
            quality={90}
            priority
            loading="eager"
            className="object-cover rounded-t-lg"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
        </div>

        <div className="pt-4 pb-7 px-4 sm:pl-10 sm:pr-2 sm:pt-10 sm:max-w-[50%] flex flex-col h-full
            sm:group-even:ml-[18rem]">
          <h3 className="text-2xl font-semibold">{title}</h3>
          <p className="mt-2 leading-relaxed text-gray-700 text-sm dark:text-white/70">
            {description}
          </p>
          <ul className="flex flex-wrap mt-4 gap-2 sm:mt-auto">
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
          quality={90}
          width={400}
          height={100}
          priority
          className="hidden sm:block absolute opacity-100 top-8 -right-40 rounded-t-lg shadow-2xl transition 
              group-hover:scale-[1.04] group-hover:-translate-x-3 group-hover:translate-y-3 group-hover:-rotate-2 
              group-even:group-hover:translate-x-3 group-even:group-hover:translate-y-3 group-even:group-hover:rotate-2
              group-even:right-[initial] group-even:-left-40"
        />
      </section>
    </motion.div>
  );
}



