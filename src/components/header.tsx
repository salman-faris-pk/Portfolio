"use client"
import NextLink from "next/link"
import clsx from "clsx"
import { Link } from "@/lib/types"
import { useActiveSectionContext } from "@/containers/active-section"
import { motion } from "framer-motion"



type headerProps={
    links:Link[]
}
export default function Header({links}:headerProps){

    const{activeSection,setActiveSection,setTimeOfLastClick}=useActiveSectionContext();
    
    return(
        <header className="hidden md:flex justify-center items-center fixed z-40 w-full mt-4">
            <motion.div className="flex p-1 rounded-none border border-white border-opacity-40 bg-white bg-opacity-80
                shadow-lg shadow-black/[0.3] backdrop-blur-[0.5rem] sm:rounded-full dark:bg-gray-950 dark:border-black/40 dark:bg-opacity-75"
                initial={{y: -100,opacity:0}}
                animate={{y: 0, opacity: 1}}
                transition={{
                    type:"tween",
                     ease: "easeInOut",
                     duration: 0.5
                }}
                >
              <ul className="flex flex-wrap items-center justify-center gap-y-1 text-[0.9rem] font-medium text-gray-500">
                {links.map((link)=>(
                  <motion.li key={link.hash}
                  className="flex items-center justify-center relative"
                  initial={{y: -100,opacity:0}}
                  animate={{y:0, opacity:1}}
                  transition={{
                    type:"tween",
                     ease: "circOut",
                     duration: 0.7
                }}
                  >
                  <NextLink href={link.hash}
                   className={clsx(
                    "flex w-full items-center justify-center px-3 py-3 hover:text-gray-950 transition dark:text-gray-600 dark:hover:text-gray-300",
                     {
                        "text-gray-950 dark:text-gray-200 ":
                        activeSection === link.hash,
                     }
                   )}
                   onClick={()=>{
                     setActiveSection(link.hash)
                     setTimeOfLastClick(Date.now())
                   }}
                  >
                      {link.nameEng}
                      {link.hash === activeSection && (
                        <motion.span
                        transition={{
                            type:"spring",
                            stiffness: 300,
                            damping:30
                        }}
                        layoutId="activeSection"
                        className="bg-gray-100 rounded-full absolute inset-0 -z-10 dark:bg-gray-800"
                        >
                        </motion.span>
                      )}
                  </NextLink>
              </motion.li>
                ))}
              </ul>
            </motion.div>
        </header>
       
    )
}