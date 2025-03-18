import { motion } from 'framer-motion';
import { FaReact, FaJsSquare } from 'react-icons/fa';
import { SiExpress, SiMongodb } from 'react-icons/si';

function Hero() {
  return (
    <section id="home" className="min-h-screen flex flex-col justify-center items-center text-center bg-gray-100 dark:bg-gray-900 p-4 transition-colors duration-500">
      <motion.h1
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-4xl md:text-6xl font-bold text-gray-800 dark:text-white mb-4"
      >
        Привет! Я Егор 👋
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 1 }}
        className="text-lg md:text-2xl text-gray-600 dark:text-gray-300 max-w-2xl mb-6"
      >
        Frontend и Full-Stack разработчик. Создаю современные веб-приложения с акцентом на функциональность, удобство и стиль.
      </motion.p>

      {/* Иконки технологий */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="flex space-x-4 mb-6 text-3xl text-gray-700 dark:text-gray-200"
      >
        <FaJsSquare title="JavaScript" className="hover:text-yellow-500 transition" />
        <FaReact title="React" className="hover:text-cyan-500 transition" />
        <SiExpress title="Express.js" className="hover:text-gray-500 transition" />
        <SiMongodb title="MongoDB" className="hover:text-green-500 transition" />
      </motion.div>

      {/* Кнопки */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="flex space-x-4"
      >
        <a
          href="#projects"
          className="bg-blue-600 text-white px-6 py-3 rounded hover:bg-blue-700 transition"
        >
          Мои проекты
        </a>
        <a
          href="/my-portfolio/resume.pdf"
          download
          className="border border-blue-600 text-blue-600 dark:text-blue-400 px-6 py-3 rounded hover:bg-blue-600 hover:text-white transition"
        >
          Скачать резюме
        </a>
      </motion.div>
    </section>
  );
}

export default Hero;
