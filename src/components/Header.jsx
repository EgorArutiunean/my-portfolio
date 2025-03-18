import { useState, useEffect } from 'react';
import { FaSun, FaMoon } from 'react-icons/fa'; // Иконки солнца и луны

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  // Включаем/выключаем класс dark на <html>
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  return (
    <header className="bg-white dark:bg-gray-900 shadow-md fixed top-0 left-0 w-full z-10 transition-colors duration-300">
      <div className="max-w-7xl mx-auto flex justify-between items-center p-4">
        {/* Логотип */}
        <div className="text-2xl font-bold text-blue-600 dark:text-white">
          MyPortfolio
        </div>

        {/* Меню для больших экранов */}
        <nav className="hidden md:flex space-x-6 items-center">
          <a href="#home" className="text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400">Главная</a>
          <a href="#about" className="text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400">Обо мне</a>
          <a href="#projects" className="text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400">Проекты</a>
          <a href="#contact" className="text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400">Контакты</a>

          {/* Переключатель темы 🌞/🌙 */}
          <div
            onClick={() => setDarkMode(!darkMode)}
            className={`ml-4 w-14 h-8 flex items-center px-1 rounded-full cursor-pointer transition-colors duration-300 ${
              darkMode ? 'bg-blue-600' : 'bg-gray-300'
            }`}
          >
            <div
              className={`w-6 h-6 rounded-full bg-white shadow-md transform transition-transform duration-300 ${
                darkMode ? 'translate-x-6' : 'translate-x-0'
              } flex items-center justify-center text-yellow-500`}
            >
              {darkMode ? <FaMoon size={12} /> : <FaSun size={12} />}
            </div>
          </div>
        </nav>

        {/* Бургер-меню для телефона */}
        <div className="md:hidden flex items-center space-x-2">
          {/* Переключатель темы (мобильный) */}
          <div
            onClick={() => setDarkMode(!darkMode)}
            className={`w-12 h-7 flex items-center px-1 rounded-full cursor-pointer transition-colors duration-300 ${
              darkMode ? 'bg-blue-600' : 'bg-gray-300'
            }`}
          >
            <div
              className={`w-5 h-5 rounded-full bg-white shadow-md transform transition-transform duration-300 ${
                darkMode ? 'translate-x-5' : 'translate-x-0'
              } flex items-center justify-center text-yellow-500`}
            >
              {darkMode ? <FaMoon size={10} /> : <FaSun size={10} />}
            </div>
          </div>

          {/* Кнопка меню */}
          <button onClick={() => setMenuOpen(!menuOpen)} className="text-gray-700 dark:text-white focus:outline-none">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                d={menuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
            </svg>
          </button>
        </div>
      </div>

      {/* Выпадающее меню на телефоне */}
      {menuOpen && (
        <div className="md:hidden bg-white dark:bg-gray-900 shadow-md p-4 space-y-2">
          <a href="#home" className="block text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400">Главная</a>
          <a href="#about" className="block text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400">Обо мне</a>
          <a href="#projects" className="block text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400">Проекты</a>
          <a href="#contact" className="block text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400">Контакты</a>
        </div>
      )}
    </header>
  );
}

export default Header;
