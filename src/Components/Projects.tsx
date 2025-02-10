import Image from 'next/image';
import React from 'react';
import { motion } from 'framer-motion';
import type { StaticImageData } from 'next/image';

// Import your project images
import Project1 from '/project1.png';
import Project2 from '/project2.png';
import Project3 from '/project3.png';
import Project4 from '/project4.png';

type Props = {};

interface Project {
    title: string;
    description: string;
    image: StaticImageData;
    technologies: string[];
    link: string;
}

function Projects({}: Props) {
    const projects: Project[] = [
        {
            title: "Netflix Clone",
            description: "Netflix Project that has a Log In and Log Out Authentication with Google. It has a beautiful Home Screen with all the movies looking just like Netflix. I built Netflix Clone, Using React JS, Firebase, With Movie Database API.",
            image: Project1,
            technologies: ["React.js", "Firebase", "Database API"],
            link: 'https://netflix-project-jg7sgm6b9-mahmoud-seyams-projects.vercel.app/'
        },
        {
            title: "Amazon Clone",
            description: "Amazon Clone Website With add product to cart with payment gateway and used local storge for store cart items",
            image: Project2,
            technologies: ["Next JS", "Redux Toolkit", "Stripe"],
            link: 'https://e-commerce-platform-bgbqg4yjc-mahmoud-seyams-projects.vercel.app/'
        },
        {
            title: "TO DO LIST",
            description: "To do list project with add tasks , delete tasks, and edit tasks. It also has a filter to filter tasks by status.",
            image: Project3,
            technologies: ["React JS", "CSS"],
            link: 'https://to-do-list-mauve-two-25.vercel.app/'
        },
        {
            title: "X-O Game",
            description: "I built a simple Tic Tac Toe game using Next,Tailwind CSS, and JavaScript.",
            image: Project4,
            technologies: ["Next JS", "Tailwind CSS"],
            link: 'https://x-o-game-chi.vercel.app/'
        }
    ]; 

    return (
        <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1.5 }} 
            className='relative flex overflow-hidden flex-col text-left md:flex-row max-w-full justify-evenly mx-auto items-center z-0 mt-4'
        >
            <h3 className='absolute top-20 uppercase tracking-[20px] text-gray-500 text-2xl'>
                Projects
            </h3>

            <div className='relative w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-50 mt-8 scrollbar-track-gray-400/20 scrollbar-thumb-[#eb5e28]/80 scrollbar-thin'>
                {projects.map((project, i) => (
                    <div 
                        key={`project-${i}`}
                        className='w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center p-20 md:p-44 min-h-screen'
                    >
                        <motion.div
                            initial={{ y: -300, opacity: 0 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ 
                                duration: 0.8,
                                ease: "easeOut"
                            }}
                            viewport={{ once: true, margin: "-20% 0px" }}
                            className="relative w-full max-w-[600px] h-[300px] cursor-pointer"
                            onClick={() => window.open(project.link, "_blank")}
                        >
                            <div className="relative w-full h-full">
                                <Image 
                                    src={project.image} 
                                    alt={project.title}
                                    fill
                                    className='rounded-lg object-cover'
                                    placeholder='blur'
                                />
                                <div className="absolute inset-0 bg-black/0 hover:bg-black/30 transition-all duration-300 flex items-center justify-center">
                                    <p className="text-center text-white opacity-0 hover:opacity-100 transition-opacity">
                                        View Project →
                                    </p>
                                </div>
                            </div>
                        </motion.div>
                        
                        <div className='space-y-10 px-0 md:px-10 max-w-3xl'>
                            <h4 className='text-4xl font-semibold text-center'>
                                <span className='underline decoration-[#dc2f02]/50'>
                                    Project {i + 1} of {projects.length}:
                                </span>{" "}
                                {project.title}
                            </h4>

                            <p className='text-lg text-center max-w-[600px]'>
                                {project.description}
                            </p>

                            <div className='flex flex-wrap gap-2 justify-center'>
                                {project.technologies.map((tech: string, index: number) => (
                                    <span 
                                        key={`tech-${index}`}
                                        className='px-3 py-1 bg-gray-200 rounded-full text-sm dark:bg-gray-800'
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            <div className='w-full absolute top-[30%] bg-[#eb5e28]/30 left-0 h-[450px] -skew-y-12 z-0' />
        </motion.div>
    )
}

export default Projects;