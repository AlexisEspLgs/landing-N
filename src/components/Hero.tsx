import { Button } from './ui/button';

interface HeroProps {
  readonly darkMode: boolean; // Marca como solo lectura
  readonly scrollToSection: (sectionId: string) => void; // Añade esta propiedad
}

export default function Hero({ darkMode, scrollToSection }: HeroProps) {
  return (
    <div className={`relative ${darkMode ? 'bg-gray-900' : 'bg-gradient-to-r from-pink-50 to-purple-50'} overflow-hidden`}>
      <div className="max-w-7xl mx-auto">
        <div className="relative z-10 pb-8 sm:pb-16 md:pb-20 lg:pb-28 xl:pb-32 pt-20 md:pt-24 lg:pt-32 flex flex-col lg:flex-row">
          <div className="lg:w-1/2 lg:pr-8 flex flex-col justify-center">
            <div className={`sm:text-center lg:text-left ${darkMode ? 'text-white' : 'text-gray-900'}`}>
              <h1 className="text-4xl tracking-tight font-extrabold sm:text-5xl md:text-6xl font-serif">
                <span className="block xl:inline">Tu camino hacia una</span>{' '}
                <span className="block text-pink-600 xl:inline">vida más saludable</span>
              </h1>
              <p className={`mt-3 text-base sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0 ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                Descubre cómo una nutrición adecuada puede transformar tu vida. Te ayudo a alcanzar tus objetivos de salud con planes personalizados y apoyo constante.
              </p>
              <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                <div className="rounded-md shadow w-full sm:w-auto">
                  <button onClick={() => scrollToSection('contacto')}>
                    <Button className={`w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-full ${darkMode ? 'text-white bg-pink-600 hover:bg-pink-700' : 'text-white bg-pink-600 hover:bg-pink-700'} transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105`}>
                      Solicita una consulta
                    </Button>
                  </button>
                </div>
                <div className="mt-3 sm:mt-0 sm:ml-3 w-full sm:w-auto">
                  <button onClick={() => scrollToSection('sobre-mi')}>
                    <Button variant="outline" className={`w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-full ${darkMode ? 'text-pink-700 bg-pink-100 hover:bg-pink-200' : 'text-pink-700 bg-pink-100 hover:bg-pink-200'} transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105`}>
                      Conoce más
                    </Button>
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="lg:w-1/2 mt-10 lg:mt-0 flex justify-center">
            <img
              className={`h-48 w-full max-w-sm object-cover sm:h-60 md:h-72 lg:h-80 rounded-lg shadow-2xl transition-transform duration-300 hover:scale-105 ${darkMode ? 'filter brightness-90' : ''}`}
              src="/jeane_portada.jpg"
              alt="Nutricionista profesional"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
