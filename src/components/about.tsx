"use client"
import React from 'react'
import SectionHeading from './section-heading'
import { useSectionInView } from '@/lib/useInView'
import { motion } from "framer-motion"
import { Fade } from 'react-awesome-reveal'

const About = () => {

const{ ref }=useSectionInView("#about")

  return (
    <motion.section id='about' ref={ref}
     className='max-w-[45rem] text-center mt-5 lg:mt-32 leading-8 mb-28 sm:mb-40 scroll-mt-28'
     initial={{opacity:0, y: 100}}
     animate={{opacity: 1,y : 0}}
     transition={{
         delay: 0.75
     }}
    >
        <div className='container mx-auto'>
            <Fade direction='up' delay={400} cascade damping={1e-1} triggerOnce={true}>
            <SectionHeading>
                About Me 
            </SectionHeading>
            </Fade>
        
            <div className='grid xl:grid-cols-2 lg:text-start'>
                <div className='flex-1'>
                    <div className='text-lg mt-10 xl:mt-3'>
                        <div className='flex  justify-start flex-col'>
                          <Fade direction='up' delay={400} cascade damping={1e-1} triggerOnce={true}>
                            <h3 className='font-bold mt-6 hidden md:block'>Bio</h3>
                           </Fade>
                          <Fade direction='up' delay={600} cascade damping={1e-1} triggerOnce={true}>
                            <p className='mt-0 md:mt-2 leading-relaxed text-sm text-gray-700 dark:text-white/70'>
                            I’m <span className='font-semibold'>Salmanul Faris PK</span>, a MERN stack developer from Calicut with a BCA degree (2023).
                             After graduating, I joined BridgeOn Solutions at KINFRA Tech Park, where I sharpened my skills
                              in full-stack development, specializing in React, Express.js,Nextjs,Ts, MongoDB, and Node.js.
                             </p>
                              
                           </Fade>
                          <Fade direction='up' delay={800} cascade damping={1e-1} triggerOnce={true}>
                             <h3 className='hidden md:block font-bold mt-6'>Strength</h3>
                           </Fade>
                          <Fade direction='up' delay={1000} cascade damping={1e-1} triggerOnce={true}>
                            <p  className='mt-2 leading-relaxed text-sm text-gray-700 dark:text-white/70'>
                             My strength lies in building dynamic, scalable web applications, especially using React and Next.js for front-end development and Express for robust server-side logic. Over time, I’ve developed a strong ability to create seamless, responsive user experiences and efficient back-end architectures. 
                             I’m always keen on learning and working with modern technologies to solve real-world problems.
                             </p>
                           </Fade>
                        </div>
                    </div>
                </div>

                {/**Right image section */}
                  <div>
                    <Fade direction='right' delay={600} cascade damping={1e-1} triggerOnce={true}>
                    <img
                      src="/abtnew.png"
                     alt='about-Me'
                     className='hidden lg:block rounded-3xl dark:rounded-full mt-16 object-cover ms-20 w-[220px] opacity-80 dark:opacity-85' 
                    />
                    </Fade>
                  </div>
            </div>
        </div>
    </motion.section>
  )
}

export default About