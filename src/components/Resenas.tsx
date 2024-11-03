import { Star } from 'lucide-react';

const resenas = [
  {
    id: 1,
    content: 'cambió mi vida. Su enfoque personalizado y su apoyo constante me ayudaron a alcanzar mis objetivos de salud.',
    author: 'María G.',
    rating: 5,
  },
  {
    id: 2,
    content: 'Excelente profesional. Sus planes son fáciles de seguir y realmente efectivos. Altamente recomendada.',
    author: 'Carlos R.',
    rating: 5,
  },
  {
    id: 3,
    content: 'Gracias a su asesoramiento, logré mejorar mi rendimiento deportivo y mi alimentación en general.',
    author: 'Laura S.',
    rating: 4,
  },
];

interface ResenasProps {
  readonly darkMode: boolean; // Marca como solo lectura
}

export default function Resenas({ darkMode }: ResenasProps) {
  return (
    <section id="resenas" className={`py-12 ${darkMode ? 'bg-gray-800' : 'bg-pink-50'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className={`text-base text-pink-600 font-semibold tracking-wide uppercase ${darkMode ? 'text-gray-300' : ''}`}>
            Reseñas
          </h2>
          <p className={`mt-2 text-3xl leading-8 font-extrabold tracking-tight ${darkMode ? 'text-white' : 'text-gray-900'} sm:text-4xl`}>
            Lo que dicen mis clientes
          </p>
        </div>

        <div className="mt-10">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {resenas.map((resena) => (
              <div key={resena.id} className={`overflow-hidden shadow rounded-lg ${darkMode ? 'bg-gray-700' : 'bg-white'}`}>
                <div className={`px-4 py-5 sm:p-6 ${darkMode ? 'text-gray-300' : ''}`}>
                  <div className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`h-5 w-5 ${i < resena.rating ? 'text-yellow-400' : 'text-gray-300'}`}
                        fill="currentColor"
                      />
                    ))}
                  </div>
                  <p className={`mt-3 text-base ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>{resena.content}</p>
                  <p className={`mt-4 text-sm font-medium ${darkMode ? 'text-gray-200' : 'text-gray-900'}`}>{resena.author}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
