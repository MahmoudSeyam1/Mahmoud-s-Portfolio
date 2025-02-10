import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import photo from '../Img/profile.png';

type Props = {}

function About({}: Props) {
    return (
        <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1.5 }}
            className='flex flex-col relative h-screen text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center'
        >
            <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl'>
                About
            </h3>
            
            <motion.div
                initial={{ x: -200, opacity: 0 }}
                transition={{ duration: 1.2 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: true }}
            >
                <Image 
                    src={photo} 
                    alt='profile photo' 
                    className='mb-20 mt-40 md:mb-0 flex-shrink-0 w-56 h-56 rounded-full object-cover md:rounded-lg md:w-64 md:h-95 xl:w-[500px] xl:h-[500px]'
                />
            </motion.div>

            <div className='space-y-10 px-0 md:px-10 mt-40'>
                <h4 className='text-4xl font-semibold text-gray-300'>
                    Here is a <span className='underline decoration-[#dc2f02]/50'>little</span>{" "} 
                    about me.
                </h4>
                
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 1.2 }}
                    className='space-y-4 text-lg max-w-[500px] text-gray-400'
                >
                    <p className='font-semibold text-[#eb5e28]'>
                        Mahmoud Seyam: "Where Code Meets Conversion"
                    </p>

                    <p>
                        Think of me as your digital Swiss Army knife—part Shopify wizard, 
                        part front-end maestro.
                    </p>

                    <p>
                        I specialize in building online stores that aren’t just pretty faces 
                        but <span className='font-bold text-[#dc2f02]'>"profit machines"</span>.
                    </p>

                    <div className='space-y-2'>
                        <p>We’re talking:</p>
                        <div className='space-y-2 pl-4'>
                            <div className='flex items-center gap-2'>
                                <span>⚡️</span>
                                <span>Pages that load faster than a caffeine rush</span>
                            </div>
                            <div className='flex items-center gap-2'>
                                <span>🛒</span>
                                <span>Checkouts smoother than a jazz solo</span>
                            </div>
                            <div className='flex items-center gap-2'>
                                <span>📈</span>
                                <span>Designs that don’t just attract eyes—they open wallets</span>
                            </div>
                        </div>
                    </div>

                    <p>
                        Let’s turn your <span className='italic'>"meh"</span> site into 
                        a <span className='italic'>"holy-wow"</span> revenue rocket.
                    </p>

                    <p className='font-semibold mt-4'>
                        First round of creative brainstorming is on me.
                    </p>
                </motion.div>
            </div>
        </motion.div>
    )
}

export default About;