import { useRef } from 'react';
import emailjs from 'emailjs-com';

function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      'service_p7x36ko',     // <-- Замени на свой ID, например: 'service_abc123'
      'template_jy8edkp',    // <-- Замени на свой ID, например: 'template_xyz456'
      form.current,
      'cdLwiXk4tBEyOojoz'      // <-- Замени на свой ключ, например: 'pqrstu_789xyz'
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
    <section id="contact" className="bg-white py-16 px-4">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">Связаться со мной</h2>

        <form ref={form} onSubmit={sendEmail} className="space-y-6">
          <input
            type="text"
            name="name"                   // <-- добавили name
            required
            placeholder="Ваше имя"
            className="w-full border px-4 py-2 rounded"
          />
          <input
            type="email"
            name="email"                 // <-- добавили name
            required
            placeholder="Ваш email"
            className="w-full border px-4 py-2 rounded"
          />
          <textarea
            name="message"              // <-- добавили name
            required
            placeholder="Сообщение"
            className="w-full border px-4 py-2 rounded"
          ></textarea>
          <button type="submit" className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition">
            Отправить
          </button>
        </form>
      </div>
    </section>
  );
}

export default Contact;
