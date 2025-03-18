import { useRef } from 'react';
import emailjs from 'emailjs-com';

function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      'service_p7x36ko',
      'template_jy8edkp',
      form.current,
      'cdLwiXk4tBEyOojoz'
    )
    .then(() => {
      alert('Сообщение отправлено!');
      form.current.reset();
    }, (error) => {
      alert('Ошибка при отправке. Попробуйте позже.');
      console.error(error);
    });
  };

  return (
    <section id="contact" className="bg-white dark:bg-gray-900 py-16 px-4 transition-colors duration-500">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-gray-800 dark:text-white mb-8">
          Связаться со мной
        </h2>

        <form ref={form} onSubmit={sendEmail} className="space-y-6">
          <input
            type="text"
            name="name"
            required
            placeholder="Ваше имя"
            className="w-full border border-gray-300 dark:border-gray-700 px-4 py-2 rounded bg-white dark:bg-gray-800 text-gray-800 dark:text-white"
          />
          <input
            type="email"
            name="email"
            required
            placeholder="Ваш email"
            className="w-full border border-gray-300 dark:border-gray-700 px-4 py-2 rounded bg-white dark:bg-gray-800 text-gray-800 dark:text-white"
          />
          <textarea
            name="message"
            required
            placeholder="Сообщение"
            className="w-full border border-gray-300 dark:border-gray-700 px-4 py-2 rounded bg-white dark:bg-gray-800 text-gray-800 dark:text-white"
          ></textarea>
          <button
            type="submit"
            className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition"
          >
            Отправить
          </button>
        </form>
      </div>
    </section>
  );
}

export default Contact;
