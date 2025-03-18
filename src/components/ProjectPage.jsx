import { useParams, Link } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';

const projectDetails = {
  bastion: {
    title: 'Сайт клуба БЖЖ Bastion',
    description: 'Современный сайт для клуба бразильского джиу-джитсу с расписанием, тренерами, онлайн-записью и новостями. Разработан с упором на адаптивность и удобство.',
    image: '/my-portfolio/images/bastion.jpg',
  },
  woodshop: {
    title: 'Интернет-магазин изделий из дерева',
    description: 'Каталог уникальных изделий ручной работы, корзина, оформление заказов и контактная форма. Стильный дизайн и удобная навигация.',
    image: '/my-portfolio/images/woodshop.jpg',
  },
  warehouse: {
    title: 'Веб-приложение для склада',
    description: 'Учёт товаров, клиентов, поступлений и продаж. Поддержка аналитики и визуализации данных в виде таблиц и диаграмм.',
    image: '/my-portfolio/images/warehouse.jpg',
  },
  sneakershop: {
    title: 'Интернет-магазин реплик кроссовок из Китая',
    description: 'Магазин с каталогом популярных моделей, фильтрацией по брендам, корзиной и оплатой. Минималистичный дизайн.',
    image: '/my-portfolio/images/sneakershop.jpg',
  }
};

function ProjectPage() {
  const { id } = useParams();
  const project = projectDetails[id];

  if (!project) {
    return (
      <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-800 dark:text-white p-4">
        <Header />
        <div className="pt-20 text-center">
          <h1 className="text-2xl font-bold">Проект не найден</h1>
          <Link to="/" className="text-blue-600 hover:underline">← Вернуться на главную</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-800 dark:text-white">
      <Header />
      <main className="pt-20 p-4 max-w-5xl mx-auto">
        <h1 className="text-3xl font-bold mb-4">{project.title}</h1>
        <img src={project.image} alt={project.title} className="w-full max-h-[400px] object-cover rounded-lg shadow mb-6" />
        <p className="text-lg mb-6">{project.description}</p>
        <Link to="/" className="text-blue-600 hover:underline">← Назад на главную</Link>
      </main>
      <Footer />
    </div>
  );
}

export default ProjectPage;
