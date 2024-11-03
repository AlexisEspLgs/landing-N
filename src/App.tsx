import { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import SobreMi from './components/SobreMi';
import Servicios from './components/Servicios';
import Resenas from './components/Resenas';
import InstagramGallery from './components/InstagramGallery';
import Blog from './components/Blog';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';
import { Routes, Route } from 'react-router-dom';
import { Sun, Moon } from 'lucide-react';

function App() {
  const [darkMode, setDarkMode] = useState<boolean>(false);

  useEffect(() => {
    const savedMode = localStorage.getItem('dark-mode') === 'true';
    setDarkMode(savedMode);
  }, []);

  useEffect(() => {
    localStorage.setItem('dark-mode', darkMode.toString());
    document.documentElement.classList.toggle('dark', darkMode);
  }, [darkMode]);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const yOffset = -80; // Ajuste para el header fijo
      const y = element.getBoundingClientRect().top + window.scrollY + yOffset; // Usar scrollY
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <div className={`min-h-screen flex flex-col ${darkMode ? 'bg-gray-900 text-white' : 'bg-white text-black'}`}>
      <Header darkMode={darkMode} setDarkMode={setDarkMode} />
      <main className="flex-grow">
        <Hero darkMode={darkMode} scrollToSection={scrollToSection} />
        <section id="sobre-mi"><SobreMi darkMode={darkMode} scrollToSection={scrollToSection} /></section>
        <section id="servicios"><Servicios darkMode={darkMode} /></section>
        <section id="resenas"><Resenas darkMode={darkMode} /></section>
        <InstagramGallery darkMode={darkMode} />
        
        {/* Rutas del blog */}
        <Routes>
          <Route path="/" element={<Blog darkMode={darkMode} />} />
          <Route path="/blog" element={<Blog darkMode={darkMode} />} />
        </Routes>

        <section id="contacto"><ContactForm darkMode={darkMode} /></section>
      </main>
      <Footer darkMode={darkMode} scrollToSection={scrollToSection} />
      <button 
        onClick={() => setDarkMode(!darkMode)} 
        className="fixed bottom-4 right-4 p-2 bg-blue-500 text-white rounded-full flex items-center justify-center transition duration-300 ease-in-out transform hover:scale-105"
      >
        {darkMode ? <Moon className="h-6 w-6" /> : <Sun className="h-6 w-6" />}
      </button>
    </div>
  );
}

export default App;
