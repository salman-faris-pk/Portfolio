"use client";

import Image from 'next/image'
import Link from 'next/link'
import {BsLinkedin} from "react-icons/bs"
import {FaGithubSquare} from "react-icons/fa"
import {Mail} from "lucide-react"
import {motion} from "framer-motion"
import {Fade} from "react-awesome-reveal"
import { useSectionInView } from '@/lib/useInView';
import { useState } from 'react';




const Intro = () => {

  const { ref: homeRef } = useSectionInView("#home", 0.5);

  const [isHovered, setIsHovered] = useState(false);
   
  return (
    <section className='mb-28 max-w-[75rem] text-center sm:mb-0'
     ref={homeRef}
     id="home"
    >
        <div className='flex items-center justify-center'>
            <div className='relative'>
                <motion.div
                 initial={{opacity: 0, scale: 0}}
                 animate={{ opacity: 1, scale: 1}}
                 transition={{
                   type:"spring",
                   stiffness: 125,
                   damping: 10,
                   duration: 0.2
                 }}
                >
                    <Image
                 
                    src='/jak.png'
                     alt='profile-img'
                     width="300"
                     height="200"
                     quality={100}
                     priority={true}
                     className='rounded-full shadow-xl object-cover'
                    />
                </motion.div>
                <motion.span className='hidden xl:block text-6xl absolute bottom-8 right-12'
                  initial={{opacity: 0, scale: 0}}
                  animate={{ opacity: 1, scale: 1}}
                  transition={{
                    type:"spring",
                    stiffness: 125,
                    damping: 10,
                    duration: 0.2
                  }}
                >
                      👋
                    </motion.span>  
            </div>
        </div>

        <Fade direction='up' delay={400} cascade damping={1e-1} triggerOnce={true}>
        <h1 className='mb-10 mt-4 px-4 text-2xl sm:text-4xl'>
          <span className='font-medium !leading-[1.5]'>Salmanul Faris pk</span>{" "}
          <p className='text-[14px]'>Expert in MERN stack development, delivering full-stack web solutions with seamless integration and optimized performance.</p>
        </h1>
        </Fade>
     
        <motion.div className='flex sm:flex-row items-center justify-center gap-4 px-4 text-lg font-medium'
         initial={{ opacity:0, y:100}}
          animate={{ opacity:1, y: 0}}
          transition={{
            delay:0.1,

          }}
        >
    

          <div className="relative">
          <Link href="#contact" className='group bg-gray-900 text-white px-7 py-3 flex items-center gap-2 rounded-full 
            outline-none focus:scale-110 hover:scale-110 hover:bg-gray-950 dark:bg-white/10 active:scale-105 transition'
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            Connect <Mail color={`#9ca3af`} />
          </Link>

          
          {isHovered && (
            <div className='absolute left-0 bottom-full mb-2 px-2 py-1 text-xs  bg-gray-900 dark:bg-white/10 text-white rounded-md'>
              salmanulfarispk2001@gmail.com
            </div>
          )}
        </div>
          <a className='bg-gray-900 p-4 text-white flex items-center gap-2  rounded-full focus:scale-[1.15] hover:scale-[1.15] active:scale-105 
             transition cursor-pointer border-black dark:bg-white/10 dark:text-white/60'
             href='https://linkedin.com/in/salmanul-faris-pk-719b35295'
             target='_blank'
             >
            <BsLinkedin />
          </a>

          <a className='bg-gray-900 p-4 text-white flex items-center gap-2 text-[1.35rem] rounded-full focus:scale-[1.15] hover:scale-[1.15] active:scale-105 
             transition cursor-pointer border-black dark:bg-white/10 dark:text-white/60'
             href='https://github.com/salman-faris-pk'
             target='_blank'
             >
            <FaGithubSquare />
          </a>
        </motion.div>
    </section>

  )
}

export default Intro