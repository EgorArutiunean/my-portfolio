import { FaGithub, FaTelegramPlane, FaLinkedin } from 'react-icons/fa';

function Footer() {
  return (
    <footer className="bg-gray-100 dark:bg-gray-900 py-6 px-4 transition-colors duration-500">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
        {/* Текст © */}
        <p className="text-gray-700 dark:text-gray-300 text-center md:text-left">
          © {new Date().getFullYear()} Egor Arutiunean. Все права защищены.
        </p>

        {/* Иконки соцсетей */}
        <div className="flex space-x-4">
          <a href="https://github.com/EgorArutiunean" target="_blank" rel="noopener noreferrer">
            <FaGithub className="w-5 h-5 text-gray-800 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition" />
          </a>
          <a href="https://t.me/Egorlovesbjj" target="_blank" rel="noopener noreferrer">
            <FaTelegramPlane className="w-5 h-5 text-gray-800 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition" />
          </a>
          <a href="https://linkedin.com/in/egor-aruriunean-ab6b07204" target="_blank" rel="noopener noreferrer">
            <FaLinkedin className="w-5 h-5 text-gray-800 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition" />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
