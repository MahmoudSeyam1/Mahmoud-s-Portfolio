import Image from 'next/image';
import React from 'react';
import photo from "../Img/profile img.jpg";
import js from "../Img/js.png";
import react from "../Img/react.png";
import typescript from "../Img/typescript.png";
import nextjs from "../Img/nextjs.jpeg";
import {motion} from 'framer-motion';

type Props = {}

function ExperienceCard2({}: Props) {
    return (
        <article className=' flex flex-row rounded-lg items-center space-y-7 flex-shrink-0  w-[500px] md:w-[600px] xl:w-[900px] snap-center bg-[#292929] p-10 hover:opacity-100 opacity-40 cursor-pointer transition-opacity duration-200 overflow-hidden'>
            <motion.div
            initial={{
                y: -100,
                opacity: 0
            }}
            transition={{
                duration: 1.2
            }}
            whileInView={{
                opacity: 1,
                y: 0
            }}
            viewport={{once: true}}
            >
            <Image src={photo} alt='profile' className='w-32 h-32 rounded-full  xl:w-[200px] xl:h-[200px] object-cover object-center'/>
            </motion.div>

            <div className='px-0 md:px-10 flex flex-col'>
                <h4 className='text-4xl font-light '>Front End Developer</h4>
                <p className='font-bold text-2xl mt-1'>Freelancer</p>
                <div className='flex space-x-2 my-2'>
                    <Image className='h-10 w-10 rounded-full' src={js} alt='js img' />
                    <Image className='h-10 w-10 rounded-full' src={react} alt='react img' />
                    <Image className='h-10 w-10 rounded-full' src={typescript} alt='typescript img' />
                    <Image className='h-10 w-10 rounded-full' src={nextjs} alt='nextjs img' />
                </div>
                <p className='uppercase py-5 text-gray-300'>Started work: <strong>2/2024</strong></p>
                <p className='uppercase py-5 text-gray-300'>Ended: <strong>Present</strong></p>

                <ul className='list-disc space-y-4 ml-5 text-lg max-w-[400px]'>
                    <li> Designed and deployed responsive, interactive web applications using React.js and Next.js,
                    focusing on seamless client-side performance</li>
                    <li>Collaborated with clients to gather requirements and deliver customized, visually engaging
                    solutions</li>
                    <li>Applied UI/UX principles to create intuitive designs that adapt across devices and screen sizes</li>
                    <li>Enhanced performance through optimized code, reducing load times and leveraging React's
                    rendering capabilities</li>
                </ul>
            </div>

        </article>
    )
}

export default ExperienceCard2