import { Utensils, Clipboard, Users, Heart } from 'lucide-react';

const servicios = [
  {
    name: 'Consultas Personalizadas',
    description: 'Evaluación nutricional completa y plan de alimentación adaptado a tus necesidades y objetivos.',
    icon: Clipboard,
  },
  {
    name: 'Planes de Alimentación Saludable',
    description: 'Diseño de planes de alimentación equilibrados y flexibles para diferentes objetivos de salud.',
    icon: Utensils,
  },
  {
    name: 'Asesoramiento Grupal',
    description: 'Sesiones grupales para aprender sobre nutrición y compartir experiencias con otras personas.',
    icon: Users,
  },
  {
    name: 'Seguimiento Continuo',
    description: 'Apoyo constante y ajustes en tu plan nutricional para asegurar tu éxito a largo plazo.',
    icon: Heart,
  },
];

interface ServiciosProps {
  readonly darkMode: boolean; // Marca como solo lectura
}

export default function Servicios({ darkMode }: ServiciosProps) {
  return (
    <section id="servicios" className={`py-16 ${darkMode ? 'bg-gray-800' : 'bg-gradient-to-b from-pink-50 to-white'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className={`text-base text-pink-600 font-semibold tracking-wide uppercase text-4xl font-serif ${darkMode ? 'text-gray-300' : ''}`}>
            Servicios
          </h2>
          <p className={`mt-2 text-3xl leading-8 font-extrabold tracking-tight ${darkMode ? 'text-white' : 'text-gray-900'} sm:text-4xl font-serif`}>
            Soluciones nutricionales a tu medida
          </p>
          <p className={`mt-4 max-w-2xl text-xl ${darkMode ? 'text-gray-400' : 'text-gray-500'} lg:mx-auto`}>
            Ofrezco una variedad de servicios diseñados para ayudarte a alcanzar tus objetivos de salud y bienestar.
          </p>
        </div>

        <div className="mt-16">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {servicios.map((servicio) => (
              <div key={servicio.name} className="pt-6">
                <div className={`flow-root rounded-lg px-6 pb-8 shadow-lg hover:shadow-xl transition-shadow duration-300 ${darkMode ? 'bg-gray-700' : 'bg-white'}`}>
                  <div className="-mt-6">
                    <div>
                      <span className={`inline-flex items-center justify-center p-3 bg-pink-500 rounded-md shadow-lg transform transition-transform duration-300 hover:scale-110`}>
                        <servicio.icon className="h-6 w-6 text-white" aria-hidden="true" />
                      </span>
                    </div>
                    <h3 className={`mt-8 text-lg font-medium ${darkMode ? 'text-gray-300' : 'text-gray-900'} tracking-tight font-serif`}>
                      {servicio.name}
                    </h3>
                    <p className={`mt-5 text-base ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                      {servicio.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
