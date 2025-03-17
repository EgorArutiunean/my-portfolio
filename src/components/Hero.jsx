function Hero() {
    return (
      <section id="home" className="min-h-screen flex flex-col justify-center items-center text-center bg-gray-100 p-4">
        <h1 className="text-4xl md:text-6xl font-bold text-gray-800 mb-4">
          Привет, я Egor!
        </h1>
        <p className="text-lg md:text-2xl text-gray-600 max-w-xl">
          Я начинающий Frontend-разработчик, создаю сайты с помощью React и Tailwind CSS.
        </p>
        <a href="#projects" className="mt-6 inline-block bg-blue-600 text-white px-6 py-3 rounded hover:bg-blue-700 transition">
          Мои проекты
        </a>
      </section>
    );
  }
  
  export default Hero;
  