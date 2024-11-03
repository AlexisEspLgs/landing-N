interface SobreMiProps {
  readonly darkMode: boolean; // Marca como solo lectura
  readonly scrollToSection: (sectionId: string) => void; // Añade esta propiedad
}

export default function SobreMi({ darkMode, scrollToSection }: SobreMiProps) {
  return (
    <section id="sobre-mi" className={`py-16 ${darkMode ? 'bg-gray-800' : 'bg-gradient-to-b from-pink-50 to-white'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className={`text-4xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'} mb-2 font-serif`}>
            Sobre Mí
          </h2>
          <p className={`text-xl ${darkMode ? 'text-gray-400' : 'text-gray-600'} font-serif`}>
            Descubre mi pasión por la nutrición
          </p>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <div className="relative w-full h-96 md:h-[500px]">
              <img
                src="/jeane.webp"
                alt="Jeannette Rivera Cid - Nutricionista"
                className="w-full h-full object-cover rounded-lg shadow-xl transition-transform duration-300 hover:scale-105"
              />
            </div>
          </div>
          <div className="md:w-1/2 md:pl-12">
            <h3 className={`text-3xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'} mb-4 font-serif`}>
              Jeannette Rivera Cid
            </h3>
            <p className={`text-lg ${darkMode ? 'text-gray-300' : 'text-gray-700'} mb-6`}>
              Licenciada en Nutrición por la Universidad Católica de Temuco, y certificada en Nutrición Oncológica y Cosmetología.
            </p>
            <ul className="space-y-4">
              {[
                "Especialista en trastornos alimentarios",
                "Experta en nutrición deportiva",
                "Experta en nutrición Oncológica",
                "Experta en Manejo de Enfermedades Crónicas No Transmisibles"
              ].map((item) => (
                <li key={item} className="flex items-center">
                  <svg className={`h-6 w-6 ${darkMode ? 'text-pink-400' : 'text-pink-500'} mr-2`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className={`${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>{item}</span>
                </li>
              ))}
            </ul>
            <div className="mt-8">
              <button onClick={() => scrollToSection('contacto')}>
                <span className={`inline-block bg-pink-600 text-white font-bold py-3 px-6 rounded-full hover:bg-pink-700 transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105 ${darkMode ? 'bg-pink-700 hover:bg-pink-800' : ''}`}>
                  Agenda una consulta
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
