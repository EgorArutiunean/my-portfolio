import { useState } from 'react';

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-md fixed top-0 left-0 w-full z-10">
      <div className="max-w-7xl mx-auto flex justify-between items-center p-4">
        {/* Логотип */}
        <div className="text-2xl font-bold text-blue-600">
          MyPortfolio
        </div>

        {/* Меню для больших экранов */}
        <nav className="hidden md:flex space-x-6">
          <a href="#home" className="text-gray-700 hover:text-blue-600">Главная</a>
          <a href="#about" className="text-gray-700 hover:text-blue-600">Обо мне</a>
          <a href="#projects" className="text-gray-700 hover:text-blue-600">Проекты</a>
          <a href="#contact" className="text-gray-700 hover:text-blue-600">Контакты</a>
        </nav>

        {/* Бургер-меню для телефона */}
        <div className="md:hidden">
          <button onClick={() => setMenuOpen(!menuOpen)} className="text-gray-700 focus:outline-none">
            {/* Иконка бургер */}
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                d={menuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
            </svg>
          </button>
        </div>
      </div>

      {/* Выпадающее меню на телефоне */}
      {menuOpen && (
        <div className="md:hidden bg-white shadow-md p-4 space-y-2">
          <a href="#home" className="block text-gray-700 hover:text-blue-600">Главная</a>
          <a href="#about" className="block text-gray-700 hover:text-blue-600">Обо мне</a>
          <a href="#projects" className="block text-gray-700 hover:text-blue-600">Проекты</a>
          <a href="#contact" className="block text-gray-700 hover:text-blue-600">Контакты</a>
        </div>
      )}
    </header>
  );
}

export default Header;
