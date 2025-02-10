import { motion } from "framer-motion";
import Link from "next/link";
import { useEffect, useState } from "react";
import { SocialIcon } from "react-social-icons";

const Header = () => {
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true);
    }, []);

    return (
        <header className="sticky top-0 p-5 flex items-start justify-between max-w-7xl mx-auto z-20 xl:items-center">
            {/* Left Social Icons */}
            <motion.div
                initial={{ 
                    x: -500,
                    opacity: isMounted ? 0 : 1,
                    scale: isMounted ? 0.5 : 1
                }}
                animate={{
                    x: 0,
                    opacity: 1,
                    scale: 1
                }}
                transition={{ duration: 1.5 }}
                className="flex flex-row items-center space-x-4"
            >
                <SocialIcon 
                    url="https://www.linkedin.com/in/mahmoud-seyam-shopify-developer/"
                    fgColor="currentColor"
                    bgColor="transparent"
                    className="text-gray-400 hover:text-[#eb5e28] transition-colors duration-300"
                />
                <SocialIcon 
                    url="https://github.com/MahmoudSeyam1"
                    fgColor="currentColor"
                    bgColor="transparent"
                    className="text-gray-400 hover:text-[#eb5e28] transition-colors duration-300"
                />
            </motion.div>

            {/* Right Contact Link */}
            <motion.div
                initial={{
                    y: -300,
                    opacity: isMounted ? 0 : 1
                }}
                animate={{
                    y: 0,
                    opacity: 1
                }}
                transition={{ duration: 1.5 }}
                className="flex flex-row items-center text-gray-300 cursor-pointer"
            >
                <Link href="#contact" legacyBehavior>
                    <a className="flex items-center space-x-2 group">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={1.5}
                            stroke="currentColor"
                            className="w-6 h-6 text-[#eb5e28] group-hover:text-[#dc2f02] transition-colors duration-300"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                            />
                        </svg>
                        <span className="hidden md:inline-flex text-sm uppercase font-semibold group-hover:text-[#dc2f02] transition-colors duration-300">
                            Get In Touch
                        </span>
                    </a>
                </Link>
            </motion.div>
        </header>
    );
};

export default Header;