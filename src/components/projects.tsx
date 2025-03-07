"use client"
import { projectData } from "@/lib/datas";
import SectionHeading from "./section-heading";
import Project from "./project-card";
import { useSectionInView } from "@/lib/useInView";
import { useState } from "react";



export default function Projects(){
    
    const { ref }=useSectionInView("#projects", 0.1)
    const [openProjectIndex, setOpenProjectIndex] = useState<number | null>(null);

    return(
        <section id="projects" className="scroll-mt-28 mb-28 " ref={ref}>
            <SectionHeading>
                My Projects
            </SectionHeading>

            <div>
                {
                projectData.map((project, index)=> (
                    <Project {...project} key={index}
                    isOpen={openProjectIndex === index}
                     onOpen={() => setOpenProjectIndex(index)}
                      onClose={() => setOpenProjectIndex(null)}
                    />
                ))
                }
            </div>
        </section>
    )
}