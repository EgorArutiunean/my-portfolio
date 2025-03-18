import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const projects = [
  {
    id: "bastion",
    title: 'Сайт клуба БЖЖ Bastion',
    description: 'Современный сайт для клуба бразильского джиу-джитсу с расписанием, тренерами, онлайн-записью и новостями. Разработан с упором на адаптивность и удобство.',
    image: '/my-portfolio/images/bastion.jpg',
  },
  {
    id: "woodshop",
    title: 'Интернет-магазин изделий из дерева',
    description: 'Каталог уникальных изделий ручной работы, корзина, оформление заказов и контактная форма. Стильный дизайн и удобная навигация.',
    image: '/my-portfolio/images/woodshop.jpg',
  },
  {
    id: "warehouse",
    title: 'Веб-приложение для склада',
    description: 'Учёт товаров, клиентов, поступлений и продаж. Поддержка аналитики и визуализации данных в виде таблиц и диаграмм.',
    image: '/my-portfolio/images/warehouse.jpg',
  },
  {
    id: "sneakershop",
    title: 'Интернет-магазин реплик кроссовок из Китая',
    description: 'Магазин с каталогом популярных моделей, фильтрацией по брендам, корзиной и оплатой. Минималистичный дизайн.',
    image: '/my-portfolio/images/sneakershop.jpg',
  }
];

function Projects() {
  return (
    <section id="projects" className="bg-white dark:bg-gray-900 py-16 px-4 transition-colors duration-500">
      <motion.h2
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="text-3xl font-bold text-center text-gray-800 dark:text-white mb-10"
      >
        Мои проекты
      </motion.h2>

      <div className="max-w-6xl mx-auto grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            viewport={{ once: true }}
            className="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg shadow hover:shadow-lg transition"
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-40 object-cover rounded mb-4"
            />
            <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">
              {project.title}
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              {project.description}
            </p>
            <Link to={`/project/${project.id}`} className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition">
              Подробнее
            </Link>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
