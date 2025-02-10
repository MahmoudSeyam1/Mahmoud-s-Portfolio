import React from 'react';
import { motion } from 'framer-motion';
import { 
    SiHtml5, 
    SiCss3,
    SiJavascript,
    SiReact,
    SiShopify,
    SiTypescript,
    SiTailwindcss,
    SiNextdotjs,
    SiPaypal,
    SiBootstrap,
    SiStripe,
    SiRedux,
} from 'react-icons/si';

type Props = {
    directionLeft?: boolean;
};

const Skill = ({ directionLeft }: Props) => {
    const skills = [
        { icon: <SiHtml5 className="text-3xl xl:text-4xl" />, scale: '85%', color: '#E34F26' },
        { icon: <SiCss3 className="text-3xl xl:text-4xl" />, scale: '80%', color: '#1572B6' },
        { icon: <SiJavascript className="text-3xl xl:text-4xl" />, scale: '75%', color: '#F7DF1E' },
        { icon: <SiTypescript className="text-3xl xl:text-4xl" />, scale: '55%', color: '#3178C6' },
        { icon: <SiReact className="text-3xl xl:text-4xl" />, scale: '65%', color: '#61DAFB' },
        { icon: <SiStripe className="text-3xl xl:text-4xl" />, scale: '45%', color: '#7b2cbf' },
        { icon: <SiNextdotjs className="text-3xl xl:text-4xl" />, scale: '60%', color: '#000000' },
        { icon: <SiTailwindcss className="text-3xl xl:text-4xl" />, scale: '75%', color: '#06B6D4' },
        { icon: <SiRedux className="text-3xl xl:text-4xl" />, scale: '50%', color: '#59287a' },
        { icon: <SiPaypal className="text-3xl xl:text-4xl" />, scale: '	40%', color: '#1572B6' },
        { icon: <SiShopify className="text-3xl xl:text-4xl" />, scale: '60%', color: '#95BF47' },
        { icon: <SiBootstrap className="text-3xl xl:text-4xl" />, scale: '70%', color: '#d782d9' },
    ];

    return (
        <div className="min-h-screen flex items-center justify-center p-4">
        <motion.div 
            initial={{ x: directionLeft ? -200 : 200, opacity: 0 }}
            transition={{ duration: 1 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="w-full max-w-4xl"
        >
            <div className="grid grid-cols-4 gap-4 md:gap-6 lg:gap-8 place-items-center mt-44">
            {skills.map((skill, index) => (
                <div 
                key={index}
                className="relative group cursor-pointer w-20 h-20 md:w-24 md:h-24 lg:w-28 lg:h-28"
                >
                {/* Icon Container */}
                <div className={`absolute inset-0 rounded-full border-2 border-gray-400/50 flex items-center justify-center transition-all duration-300 filter group-hover:grayscale ease-in-out`}
                >
                    <div style={{ color: skill.color }}>
                    {skill.icon}
                    </div>
                </div>

              {/* Hover Overlay */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-80 transition duration-300 ease-in-out group-hover:bg-white rounded-full">
                    <p className="text-3xl font-bold text-black opacity-100">
                    {skill.scale}
                    </p>
                </div>
                </div>
            ))}
            </div>
        </motion.div>
        </div>
    );
};

export default Skill;