

import Image from "next/image"
import { projectInfo } from "@/lib/types"
import { motion, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"



type ProjectProps = projectInfo;

export default function Project({title,description,tags,imageUrl,link}:ProjectProps){

const ref=useRef<HTMLDivElement>(null)
const { scrollYProgress }=useScroll({
    target: ref,
    offset: ["0 1","1.33 1"]
});

const scaleProgress= useTransform(scrollYProgress, [0, 1], [0.8, 1]);
const opacityProgress= useTransform(scrollYProgress, [0, 1], [0.6, 1]);


    return(
      <motion.div className="group mb-3 sm:mb-8 last:mb-0"
       ref={ref}
       style={{
         scale: scaleProgress,
         opacity: opacityProgress,
       }}
      >
        <section className="bg-white max-w-[45rem] border border-black/5 rounded-lg overflow-hidden
          sm:pr-8 relative sm:h-[20rem] hover:bg-gray-200 transition sm:group-even:pl-8 dark:text-white
           dark:bg-white/10 dark:hover:bg-white/20">
            <div className="pt-4 pb-7  sm:pl-10 sm:pr-2 sm:pt-10 sm:max-w-[50%] flex flex-col h-full
              sm:group-even:ml-[18rem]">
                <h3 className="text-2xl px-2 md:px-0 font-semibold">{title}</h3>
                <p className="mt-2 leading-relaxed text-gray-700 dark:text-white/70 px-2 md:px-0">{description}</p>
                 <ul className="flex flex-wrap mt-4 gap-2 sm:mt-auto px-2 md:px-0">
                    {
                        tags.map((tag, index)=> (
                            <li className="bg-black/[0.7] px-3 py-1 text-[0.7rem] uppercase tracking-wider text-white
                               rounded-full dark:text-white/70">
                                {tag}
                            </li>
                        ))
                    }
                 </ul>
            </div>

             <Image
              src={imageUrl}
              alt="Project-images"
              quality={95}
              width={400}
              height={100}
              className="absolute hidden sm:block top-8 -right-40 rounded-t-lg shadow-2xl transition group-hover:scale-[1.04]
               group-hover:-translate-x-3 group-hover:translate-y-3 group-hover:-rotate-2 
               group-even:group-hover:translate-x-3 group-even:group-hover:translate-y-3 group-even:group-hover:rotate-2
                group-even:right-[initial] group-even:-left-40 "
             />
        </section>
      </motion.div>
    )
}