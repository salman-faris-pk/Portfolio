"use client"
import { projectData } from "@/lib/datas";
import SectionHeading from "./section-heading";
import Project from "./project-card";
import { useSectionInView } from "@/lib/useInView";
import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import useEmblaCarousel from 'embla-carousel-react';


export default function Projects() {
    const { ref } = useSectionInView("#projects", 0.1);
    const [openProjectIndex, setOpenProjectIndex] = useState<number | null>(null);
    const [loadedImages, setLoadedImages] = useState<boolean[]>([]);
    const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });
    const [selectedIndex, setSelectedIndex] = useState(0);

    const openProject = openProjectIndex !== null ? projectData[openProjectIndex] : null;

    const scrollPrev = useCallback(() => {
        if (emblaApi) emblaApi.scrollPrev();
    }, [emblaApi]);

    const scrollNext = useCallback(() => {
        if (emblaApi) emblaApi.scrollNext();
    }, [emblaApi]);

    const onSelect = useCallback(() => {
        if (!emblaApi) return;
        setSelectedIndex(emblaApi.selectedScrollSnap());
    }, [emblaApi]);

    useEffect(() => {
        if (!emblaApi) return;
        onSelect();
        emblaApi.on('select', onSelect);
        return () => {
            emblaApi.off('select', onSelect);
        };
    }, [emblaApi, onSelect]);

    useEffect(() => {
        if (openProject) {
            setLoadedImages(Array(openProject.Allimg.length).fill(false));
            document.body.classList.add('no-scroll');
        } else {
            document.body.classList.remove('no-scroll');
        }

        return () => {
            document.body.classList.remove('no-scroll');
        };
    }, [openProject]);

    const handleImageLoad = (index: number) => {
        setLoadedImages(prev => {
            const newLoaded = [...prev];
            newLoaded[index] = true;
            return newLoaded;
        });
    };

    return (
        <section id="projects" className="scroll-mt-28 mb-28 relative" ref={ref}>
            <SectionHeading>
                My Projects
            </SectionHeading>

            <div>
                {projectData.map((project, index) => (
                    <Project 
                        {...project} 
                        key={index}
                        onOpen={() => setOpenProjectIndex(index)}
                    />
                ))}
            </div>

            {openProject && (
                <div className="fixed inset-0 flex items-center justify-center w-full h-full bg-black/90 dark:bg-black/80 z-50">
                    <div className="absolute top-24 w-full max-w-4xl px-4">
                        <div className="flex justify-center md:justify-between items-center mb-4">
                            <h3 className="hidden sm:block text-2xl font-semibold text-white">{openProject.title}</h3>
                            <div className="flex items-center space-x-4">
                                {openProject.Github && (
                                    <a 
                                        href={openProject.Github} 
                                        target="_blank" 
                                        rel="noopener noreferrer"
                                        className="px-4 py-2 bg-gray-800 text-white rounded-md hover:bg-gray-700 transition flex items-center"
                                    >
                                        <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                                            <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/>
                                        </svg>
                                        GitHub
                                    </a>
                                )}
                                {openProject.preview && (
                                    <a 
                                        href={openProject.preview} 
                                        target="_blank" 
                                        rel="noopener noreferrer"
                                        className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition flex items-center"
                                    >
                                        <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"/>
                                        </svg>
                                          Preview
                                    </a>
                                )}
                                <button
                                    className="p-2 bg-white/30 rounded-full hover:bg-white/50 cursor-pointer"
                                    onClick={() => setOpenProjectIndex(null)}
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                    </svg>
                                </button>
                            </div>
                        </div>
                        
                        <div className="relative w-full h-[60vh] rounded-2xl bg-gray-900/50">
                            <div className="embla overflow-hidden h-full" ref={emblaRef}>
                                <div className="embla__container flex h-full">
                                    {openProject.Allimg.map((image, index) => (
                                        <div className="embla__slide flex-[0_0_100%] min-w-0 relative" key={index}>
                                            <div className="relative w-full h-full">
                                                {!loadedImages[index] && (
                                                    <div className="absolute inset-0 flex items-center justify-center bg-gray-800/50 animate-pulse">
                                                        <div className="w-16 h-16 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
                                                    </div>
                                                )}
                                                <Image
                                                    src={image}
                                                    alt={`${openProject.title} screenshot ${index + 1}`}
                                                    quality={100}
                                                    fill
                                                    className="object-contain"
                                                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 60vw"
                                                    priority={index === 0}
                                                    onLoadingComplete={() => handleImageLoad(index)}
                                                />
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                            
                            <button 
                                className="embla__prev absolute left-4 top-1/2 -translate-y-1/2 z-10 p-2 bg-blue-700 rounded-full hover:bg-blue-600"
                                onClick={scrollPrev}
                            >
                                <svg className="w-4 h-4 md:w-6 md:h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                                </svg>
                            </button>
                            
                            <button 
                                className="embla__next absolute right-4 top-1/2 -translate-y-1/2 z-10 p-2 bg-blue-700 rounded-full hover:bg-blue-600"
                                onClick={scrollNext}
                            >
                                <svg className="w-4 h-4 md:w-6 md:h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                </svg>
                            </button>

                            <div className="flex justify-center -mt-32 md:mt-4">
                               <span className="text-white text-sm">
                                  {selectedIndex + 1} / {openProject.Allimg.length}
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </section>
    );
}