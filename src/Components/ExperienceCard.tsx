import Image from 'next/image';
import React from 'react';
import photo from "../Img/profile img.jpg";
import shopify from "../Img/shopify.png";
import stripe from "../Img/stripe.png";
import paypal from "../Img/paypal.png";
import {motion} from 'framer-motion';

type Props = {}

function ExperienceCard({}: Props) {
    return (
        <article className='flex flex-row rounded-lg items-center space-y-7 flex-shrink-0 w-[500px] md:w-[600px] xl:w-[900px] snap-center bg-[#292929] p-10 hover:opacity-100 opacity-40 cursor-pointer transition-opacity duration-200 overflow-hidden'>
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
                <h4 className='text-4xl font-light '>Shopify Developer</h4>
                <p className='font-bold text-2xl mt-1'>Freelancer</p>
                <div className='flex space-x-2 my-2'>
                    <Image className='h-10 w-10 rounded-full' src={shopify} alt='shopify img' />
                    <Image className='h-10 w-10 rounded-full' src={stripe} alt='stripe img' />
                    <Image className='h-10 w-10 rounded-full' src={paypal} alt='paypal img' />
                </div>
                <p className='uppercase py-5 text-gray-300'>Started work: <strong>2/2024</strong></p>
                <p className='uppercase py-5 text-gray-300'>Ended: <strong>Present</strong></p>

                <ul className='list-disc space-y-4 ml-5 text-lg max-w-[400px]'>
                    <li>Developed and customized Shopify themes for 10+ clients, improving user engagement by 25% and
                    reducing bounce rates by 15%</li>
                    <li>Integrated third-party apps like Klaviyo and Yotpo, resulting in a 30% increase in email sign-ups and customer reviews</li>
                    <li>Optimized store performance, achieving a 40% reduction in load times</li>
                </ul>
            </div>

        </article>
    )
}

export default ExperienceCard