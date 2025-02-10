import React from 'react';
import { Cursor, useTypewriter } from 'react-simple-typewriter';
import BackgroundCircles from './BackgroundCircles';
import Image from 'next/image';
import Img from '../Img/profile img.jpg';
import Link from 'next/link';

type Props = {}

export default function Hero({}: Props) {
    const [text, count] = useTypewriter({
        words: ["Shopify <Developer />", "Front End <Developer />"],
        loop: true,
        delaySpeed: 2000,
    });
    return (
        <div className='h-screen flex flex-col space-y-4 items-center justify-center text-center overflow-hidden'>
            <BackgroundCircles />
            <Image src={Img} alt={"Profile img"} width={200} height={200} className='rounded-full relative z-50' />
            <div className='z-20'>
            <h1 className='tracking-[15px] pb-2 text-gray-500 text-lg'>Mahmoud Seyam</h1>
            <h1 className='text-5xl lg:text-6xl font-semibold px-10'>I'm a<span className='text-[#eb5e28] mr-3'> {text}</span>
                <Cursor cursorColor='#dc2f02' />
            </h1>
            
                <div className='pt-5 cursor-pointer mt-8'>

                    <Link href={"#about"}>
                    <button className='heroButton'>About</button>
                    </Link>

                    <Link href={"#experience"}>
                    <button className='heroButton'>Experience</button>
                    </Link>

                    <Link href={"#skills"}>
                    <button className='heroButton'>Skills</button>
                    </Link>

                    <Link href={"#projects"}>
                    <button className='heroButton'>Projects</button>
                    </Link>

                </div>
            </div>
        </div>
    )
}