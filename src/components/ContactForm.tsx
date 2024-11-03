import { useState } from 'react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import axios from 'axios';

interface ContactFormProps {
  darkMode: boolean; // Prop para el modo oscuro
}

export default function ContactForm({ darkMode }: Readonly<ContactFormProps>) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitMessage('');
    try {
      await axios.post('http://localhost:5000/api/contact', formData);
      setFormData({ name: '', email: '', message: '' });
      setSubmitMessage('¡Mensaje enviado con éxito!');
    } catch (error) {
      console.error('Error al enviar el formulario:', error);
      setSubmitMessage('Hubo un error al enviar el mensaje. Por favor, inténtalo de nuevo.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contacto" className={`py-16 ${darkMode ? 'bg-gray-800 text-white' : 'bg-gradient-to-b from-pink-50 to-white text-black'}`}>
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold sm:text-4xl font-serif">Contacto</h2>
          <p className="mt-4 text-xl">
            ¿Listo para comenzar tu viaje hacia una vida más saludable? Contáctame hoy y demos el primer paso juntos.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium">Nombre</label>
            <Input
              type="text"
              name="name"
              id="name"
              value={formData.name}
              onChange={handleChange}
              required
              className={`mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-pink-500 focus:ring-pink-500 ${darkMode ? 'bg-gray-700 text-white' : ''}`}
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium">Email</label>
            <Input
              type="email"
              name="email"
              id="email"
              value={formData.email}
              onChange={handleChange}
              required
              className={`mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-pink-500 focus:ring-pink-500 ${darkMode ? 'bg-gray-700 text-white' : ''}`}
            />
          </div>
          <div>
            <label htmlFor="message" className="block text-sm font-medium">Mensaje</label>
            <Textarea
              name="message"
              id="message"
              rows={4}
              value={formData.message}
              onChange={handleChange}
              required
              className={`mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-pink-500 focus:ring-pink-500 ${darkMode ? 'bg-gray-700 text-white' : ''}`}
            />
          </div>
          <div>
            <Button 
              type="submit" 
              className="w-full bg-pink-600 hover:bg-pink-700 text-white font-bold py-2 px-4 rounded-md transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105"
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Enviando...' : 'Enviar mensaje'}
            </Button>
          </div>
        </form>
        {submitMessage && (
          <p className={`mt-4 text-center ${submitMessage.includes('éxito') ? 'text-green-600' : 'text-red-600'}`}>
            {submitMessage}
          </p>
        )}
      </div>
    </section>
  );
}
