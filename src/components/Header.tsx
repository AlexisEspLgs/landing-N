import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

interface HeaderProps {
  readonly darkMode: boolean;  // Marca como solo lectura
  readonly setDarkMode?: (mode: boolean) => void; // Opcional si no se usa
}

export default function Header({ darkMode, setDarkMode }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToSection = (sectionId: string) => {
    setIsMenuOpen(false);
    const element = document.getElementById(sectionId);
    if (element) {
      const yOffset = -80; // Ajuste para el header fijo
      const y = element.getBoundingClientRect().top + window.scrollY + yOffset; // Cambiado a window.scrollY
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  // Extraer clases para mejorar la legibilidad
  const headerClasses = `fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? (darkMode ? 'bg-gray-800 text-white' : 'bg-white text-gray-900 shadow-md') : 'bg-transparent'}`;
  const buttonClasses = `text-base font-medium ${isScrolled ? (darkMode ? 'text-gray-300 hover:text-pink-500' : 'text-gray-500 hover:text-pink-600') : 'text-white hover:text-pink-200'} transition-colors duration-300 ease-in-out px-3 py-2 rounded-full hover:bg-pink-100 hover:bg-opacity-50`;

  return (
    <header className={headerClasses}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4 md:justify-start md:space-x-10">
          <div className="flex justify-start lg:w-0 lg:flex-1">
            <Link to="/" className="flex items-center">
              <span className="sr-only">NutriJeane</span>
              <span className={`text-2xl font-bold font-serif ${isScrolled ? (darkMode ? 'text-white' : 'text-pink-600') : 'text-white'}`}>NutriJeane</span>
            </Link>
          </div>
          <div className="-mr-2 -my-2 md:hidden">
            <button
              type="button"
              className={`bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-pink-500 ${isScrolled ? (darkMode ? 'bg-gray-800 text-white' : '') : 'bg-opacity-50'}`}
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <span className="sr-only">{isMenuOpen ? 'Cerrar menú' : 'Abrir menú'}</span>
              {isMenuOpen ? <X className="h-6 w-6" aria-hidden="true" /> : <Menu className="h-6 w-6" aria-hidden="true" />}
            </button>
          </div>
          <nav className="hidden md:flex space-x-10">
            {['sobre-mi', 'servicios', 'resenas', 'blog', 'contacto'].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item)}
                className={buttonClasses}
              >
                {item.charAt(0).toUpperCase() + item.slice(1)}
              </button>
            ))}
          </nav>
        </div>
      </div>

      {isMenuOpen && (
        <div className="absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden">
          <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white divide-y-2 divide-gray-50">
            <div className="pt-5 pb-6 px-5">
              <div className="flex items-center justify-between">
                <div>
                  <span className="text-2xl font-bold text-pink-600 font-serif">NutriJeane</span>
                </div>
                <div className="-mr-2">
                  <button
                    type="button"
                    className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-pink-500"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <span className="sr-only">Cerrar menú</span>
                    <X className="h-6 w-6" aria-hidden="true" />
                  </button>
                </div>
              </div>
              <div className="mt-6">
                <nav className="grid gap-y-8">
                  {['sobre-mi', 'servicios', 'resenas', 'blog', 'contacto'].map((item) => (
                    <button
                      key={item}
                      onClick={() => scrollToSection(item)}
                      className={`text-base font-medium ${darkMode ? 'text-gray-600' : 'text-gray-900'} hover:text-pink-600 transition-colors duration-300 ease-in-out`}
                    >
                      {item.charAt(0).toUpperCase() + item.slice(1)}
                    </button>
                  ))}
                </nav>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
