import { FaGithub, FaTelegramPlane, FaLinkedin } from 'react-icons/fa';

function About() {
  return (
    <section id="about" className="bg-gray-100 dark:bg-gray-800 py-16 px-4 transition-colors duration-500">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-8">
        {/* Фото */}
        <div className="flex-shrink-0">
          <img
            src="/my-portfolio/Panda1.jpg"
            alt="Фото Егора"
            className="w-64 h-64 object-cover rounded-full shadow-lg"
          />
        </div>

        {/* Текст + Иконки + Кнопка */}
        <div className="text-center md:text-left">
          <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-4">Обо мне</h2>
          <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed max-w-xl mb-4">
            Привет! Я Егор, начинающий Frontend-разработчик. Создаю сайты на React и Tailwind CSS.
            Увлекаюсь разработкой, анимацией и всегда стремлюсь к росту. 
            Также тренирую и выступаю в клубе БЖЖ «Bastion».
          </p>

          {/* Иконки + Кнопка в строку */}
          <div className="flex flex-col md:flex-row items-center md:items-start space-y-4 md:space-y-0 md:space-x-6 mt-6">
            {/* Иконки соцсетей */}
            <div className="flex space-x-4">
              <a href="https://github.com/EgorArutiunean" target="_blank" rel="noopener noreferrer">
                <FaGithub className="w-6 h-6 text-gray-800 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition" />
              </a>
              <a href="https://t.me/Egorlovesbjj" target="_blank" rel="noopener noreferrer">
                <FaTelegramPlane className="w-6 h-6 text-gray-800 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition" />
              </a>
              <a href="https://linkedin.com/in/egor-aruriunean-ab6b07204" target="_blank" rel="noopener noreferrer">
                <FaLinkedin className="w-6 h-6 text-gray-800 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition" />
              </a>
            </div>

            {/* Кнопка скачать резюме */}
            <a
              href="/my-portfolio/resume.pdf"
              download
              className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition"
            >
              Скачать резюме
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
