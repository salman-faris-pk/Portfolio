"use client"
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import {useActiveSectionContext} from "../containers/active-section"
import type { SectionName } from "./types"
import { useRouter } from "next/navigation";


export function useSectionInView(sectionName:SectionName, threshold =0.75){

    const {ref,inView}=useInView({ threshold })

     const {setActiveSection,timeOfLastClick}=useActiveSectionContext();
      const router = useRouter();

     useEffect(()=>{
        if(inView && Date.now() - timeOfLastClick > 1000){
            setActiveSection(sectionName);
             router.replace(sectionName, { scroll: false });
        }
     },[inView,setActiveSection,timeOfLastClick,sectionName,router]);

     return {
        ref,
     };
}