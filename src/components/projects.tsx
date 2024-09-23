"use client"
import { projectData } from "@/lib/datas";
import SectionHeading from "./section-heading";
import Project from "./project-card";
import { useSectionInView } from "@/lib/useInView";



export default function Projects(){
    
    const { ref }=useSectionInView("#projects", 0.1)

    return(
        <section id="projects" className="scroll-mt-28 mb-28 ">
            <SectionHeading>
                My Projects
            </SectionHeading>

            <div>
                {
                projectData.map((project, index)=> (
                    <Project {...project} key={index}/>
                ))
                }
            </div>
        </section>
    )
}