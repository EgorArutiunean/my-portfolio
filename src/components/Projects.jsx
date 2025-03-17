const projects = [
    {
      title: "Сайт клуба БЖЖ Bastion",
      description: "Современный сайт для клуба бразильского джиу-джитсу с расписанием, тренерами и онлайн-записью.",
    },
    {
      title: "Интернет-магазин изделий из дерева",
      description: "Магазин с каталогом уникальных изделий из дерева, корзиной и системой заказов.",
    },
    {
      title: "Веб-приложение для склада",
      description: "Система учёта товаров и клиентов для склада. Поддержка статистики и анализа.",
    },
    {
      title: "Интернет-магазин реплик кроссовок из Китая",
      description: "Магазин с каталогом популярных моделей из Китая, корзиной и системой заказов.",
    }
    // Можно добавить больше проектов!
  ];
  
  function Projects() {
    return (
      <section id="projects" className="bg-white py-16 px-4">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-10">Мои проекты</h2>
        <div className="max-w-6xl mx-auto grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <div key={index} className="bg-gray-100 p-6 rounded-lg shadow hover:shadow-lg transition">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">{project.title}</h3>
              <p className="text-gray-600 mb-4">{project.description}</p>
              <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition">
                Подробнее
              </button>
            </div>
          ))}
        </div>
      </section>
    );
  }
  
  export default Projects;
  