"use client"

import SectionHeading from './section-heading'
import { SkillsDatas } from '@/lib/datas'
import { useSectionInView } from '@/lib/useInView'
import { motion } from "framer-motion"




 const fadeInVariants ={
    initial: {
        opacity: 0,
        y: 100 ,
    },
    animate: ( index: number)=> ({
        opacity: 1,
        y: 0,
        transition:{
            delay: 0.05 * index,
        }
    })
 }

const Skills = () => {

  const { ref }=useSectionInView("#skills")

  return (
   <section id='skills'
   ref={ref}
    className='mb-28 max-w-[53rem] scroll-t-28 text-center sm:mb-40'
   >
       <SectionHeading>
             {"My Skills"}
       </SectionHeading>

       <ul className='flex flex-wrap justify-center gap-2 text-lg text-gray-800'>
          {
            SkillsDatas.map((skill, index)=> (
                <motion.li key={index}
                variants={fadeInVariants}
                initial="initial"
                whileInView="animate"
                viewport={{
                    once: true,
                }}
                custom={index}
                className='bg-white border-black rounded-xl px-5 py-3 dark:bg-white/10 dark:text-white/80'
                >
                   {skill}
                </motion.li>
            ))
          }
       </ul>
   </section>
  )
}

export default Skills