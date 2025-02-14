
import Image from 'next/image';
import { motion } from 'framer-motion';

const Projects = () => {
  return (
    <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1.5 }}
            className='flex flex-col relative h-screen text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center overflow-y-scroll scrollbar-track-gray-400/20 scrollbar-thumb-[#eb5e28]/80 scrollbar-thin'
        >
             <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl'>
                Projects
            </h3>
            
    <motion.div
                initial={{ x: -200, opacity: 0 }}
                transition={{ duration: 1.2 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto absolute top-36 pb-5"
            >
        {/* Project 1 */}
        <div className="bg-gray-800 rounded-lg p-6 shadow-xl hover:shadow-2xl transition-shadow">
          <Image
            src="/project1.png"
            alt="Project 1"
            width={600}
            height={400}
            className="w-full h-48 object-cover rounded-t-lg"
          />
          <h3 className="text-2xl font-semibold mt-4 mb-2 text-blue-400">Netflix Clone</h3>
          <p className="text-gray-300 mb-4">
          Netflix Project that has a Log In and Log Out Authentication with Google. It has a beautiful Home Screen with all the movies looking just like Netflix. I built Netflix Clone, Using React JS, Firebase, With Movie Database API. technologies: ["React.js", "Firebase", "Database API"]
          </p>
          <div className="flex space-x-4">
            <a
              href="https://github.com/MahmoudSeyam1/netflix-project"
              className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors"
            >
              View Code
            </a>
            <a
              href="https://netflix-project-jg7sgm6b9-mahmoud-seyams-projects.vercel.app/"
              className="border-2 border-blue-600 text-blue-600 px-4 py-2 rounded-md hover:bg-blue-600 hover:text-white transition-colors"
            >
              Live Demo
            </a>
          </div>
        </div>

        {/* Project 2 */}
        <div className="bg-gray-800 rounded-lg p-6 shadow-xl hover:shadow-2xl transition-shadow">
          <Image
            src="/project2.png"
            alt="Project 2"
            width={600}
            height={400}
            className="w-full h-48 object-cover rounded-t-lg"
          />
          <h3 className="text-2xl font-semibold mt-4 mb-2 text-blue-400">Amazon Clone</h3>
          <p className="text-gray-300 mb-4">
          Amazon Clone Website With add product to cart with payment gateway and used local storge for store cart items, technologies: ["Next JS", "Redux Toolkit", "Stripe"]
          </p>
          <div className="flex space-x-4">
            <a
              href="https://github.com/MahmoudSeyam1/E-Commerce_Platform"
              className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors"
            >
              View Code
            </a>
            <a
              href="https://e-commerce-platform-bgbqg4yjc-mahmoud-seyams-projects.vercel.app/"
              className="border-2 border-blue-600 text-blue-600 px-4 py-2 rounded-md hover:bg-blue-600 hover:text-white transition-colors"
            >
              Live Demo
            </a>
          </div>
        </div>

        {/* Project 3 */}
        <div className="bg-gray-800 rounded-lg p-6 shadow-xl hover:shadow-2xl transition-shadow">
          <Image
            src="/project3.png"
            alt="Project 3"
            width={600}
            height={400}
            className="w-full h-48 object-cover rounded-t-lg"
          />
          <h3 className="text-2xl font-semibold mt-4 mb-2 text-blue-400">TO DO LIST</h3>
          <p className="text-gray-300 mb-4">
          To do list project with add tasks , delete tasks, and edit tasks. It also has a filter to filter tasks by status. technologies: ["React JS", "CSS"]
          </p>
          <div className="flex space-x-4">
            <a
              href="https://github.com/MahmoudSeyam1/to_do_list"
              className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors"
            >
              View Code
            </a>
            <a
              href="https://to-do-list-mauve-two-25.vercel.app/"
              className="border-2 border-blue-600 text-blue-600 px-4 py-2 rounded-md hover:bg-blue-600 hover:text-white transition-colors"
            >
              Live Demo
            </a>
          </div>
        </div>

        {/* Project 4 */}
        <div className="bg-gray-800 rounded-lg p-6 shadow-xl hover:shadow-2xl transition-shadow">
          <Image
            src="/project4.png"
            alt="Project 4"
            width={600}
            height={400}
            className="w-full h-48 object-cover rounded-t-lg"
          />
          <h3 className="text-2xl font-semibold mt-4 mb-2 text-blue-400">X-O Game</h3>
          <p className="text-gray-300 mb-4">
          I built a simple Tic Tac Toe game using Next,Tailwind CSS, and JavaScript
          </p>
          <div className="flex space-x-4">
            <a
              href="https://github.com/MahmoudSeyam1/x-o-game"
              className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors"
            >
              View Code
            </a>
            <a
              href="https://x-o-game-chi.vercel.app/"
              className="border-2 border-blue-600 text-blue-600 px-4 py-2 rounded-md hover:bg-blue-600 hover:text-white transition-colors"
            >
              Live Demo
            </a>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Projects;