import { useState } from 'react';
import { Link } from 'react-router-dom';

interface BlogPostType {
  id: number;
  title: string;
  content: string;
  imageUrl: string;
  date: string;
}

const blogPosts: BlogPostType[] = [
  {
    id: 1,
    title: '5 Alimentos que Potencian tu Sistema Inmune',
    content: `<h2>5 Alimentos que Potencian tu Sistema Inmune</h2>
    <p>Para fortalecer tu sistema inmune, incluye estos alimentos en tu dieta:</p>
    <ol>
      <li><strong>Cítricos</strong>: Ricos en vitamina C, esenciales para la producción de glóbulos blancos.</li>
      <li><strong>Ajo</strong>: Potente antimicrobiano que mejora la actividad de las células inmunitarias.</li>
      <li><strong>Yogur</strong>: Fuente de probióticos que favorecen la salud intestinal.</li>
      <li><strong>Espinacas</strong>: Contienen antioxidantes y vitamina C, que apoyan la función inmunológica.</li>
      <li><strong>Frutos secos</strong>: Ricos en vitamina E, ayudan a regular el sistema inmune.</li>
    </ol>
    <p>Incorpora estos alimentos para mantener tus defensas fuertes.</p>`,
    imageUrl: '/alimentos.jpg',
    date: '2023-05-15',
  },
  {
    id: 2,
    title: 'La Importancia del Desayuno en tu Rutina Diaria',
    "content": "<h2>La Importancia del Desayuno</h2><p>El desayuno es <strong>crucial</strong> para comenzar el día con energía. Este primer alimento ayuda a mejorar la concentración y el rendimiento, proporcionando nutrientes esenciales después de un largo ayuno nocturno. Un desayuno equilibrado, que incluya proteínas, carbohidratos y grasas saludables, puede regular el apetito y contribuir a un mejor control del peso.</p>",
    imageUrl: '/desayuno.jpg',
    date: '2023-05-08',
  },
  {
    id: 3,
    title: 'Mitos y Verdades sobre las Dietas Detox',
    "content": "<h2>Mitos y Verdades sobre las Dietas Detox</h2><p>Las dietas detox son populares, pero muchas creencias son erróneas. Algunos mitos incluyen:</p><ol><li><strong>Desintoxicar el cuerpo</strong>: El cuerpo tiene su propio sistema de desintoxicación; no se necesita una dieta especial.</li><li><strong>Pérdida de peso rápida</strong>: La pérdida de peso inicial a menudo no es sostenible.</li><li><strong>Alimentos detox</strong>: No existen alimentos mágicos que eliminen toxinas.</li><li><strong>Beneficios instantáneos</strong>: La mejora de la salud requiere tiempo y un enfoque saludable.</li></ol></p>",
    imageUrl: '/detox.webp',
    date: '2023-05-01',
  },
];

interface BlogProps {
  readonly darkMode: boolean; // Propiedad como solo lectura
}

export default function Blog({ darkMode }: BlogProps) {
  const [selectedPost, setSelectedPost] = useState<BlogPostType | null>(null);

  const openPost = (post: BlogPostType) => {
    setSelectedPost(post);
  };

  const closePost = () => {
    setSelectedPost(null);
  };

  return (
    <section id="blog" className={`py-12 ${darkMode ? 'bg-gray-800' : 'bg-gray-50'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center mb-8">
          <h2 className={`text-base text-pink-600 font-semibold tracking-wide uppercase ${darkMode ? 'text-gray-300' : ''}`}>
            Blog
          </h2>
          <p className={`mt-2 text-3xl leading-8 font-extrabold tracking-tight ${darkMode ? 'text-white' : 'text-gray-900'} sm:text-4xl`}>
            Últimos Artículos
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {blogPosts.map((post) => (
            <div key={post.id} className={`overflow-hidden shadow rounded-lg ${darkMode ? 'bg-gray-700' : 'bg-white'}`}>
              <img
                src={post.imageUrl}
                alt={post.title}
                className="w-full h-48 object-cover"
              />
              <div className={`p-6 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                <p className="text-sm font-medium text-pink-600">
                  <time dateTime={post.date}>{new Date(post.date).toLocaleDateString()}</time>
                </p>
                <button onClick={() => openPost(post)} className="block mt-2">
                  <p className={`text-xl font-semibold ${darkMode ? 'text-gray-200' : 'text-gray-900'}`}>{post.title}</p>
                  {/* Renderizar contenido HTML en la vista de lista */}
                  <div className={`mt-3 text-base ${darkMode ? 'text-gray-400' : 'text-gray-500'}`} dangerouslySetInnerHTML={{ __html: post.content }} />
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 text-center">
          <Link
            to="/blog"
            className={`inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-pink-600 hover:bg-pink-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-pink-500 ${darkMode ? 'hover:bg-pink-500' : ''}`}
          >
            Ver más artículos
          </Link>
        </div>
      </div>

      {/* Modal para el post seleccionado */}
      {selectedPost && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div className={`rounded-lg p-4 max-w-md w-full ${darkMode ? 'bg-gray-800' : 'bg-white'}`}>
            <h1 className={`text-3xl font-bold ${darkMode ? 'text-gray-200' : 'text-gray-900'}`}>{selectedPost.title}</h1>
            <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
              <time dateTime={selectedPost.date}>{new Date(selectedPost.date).toLocaleDateString()}</time>
            </p>
            <img src={selectedPost.imageUrl} alt={selectedPost.title} className="w-full h-48 object-cover my-4" />
            {/* Renderizar contenido HTML en el modal */}
            <div className={`${darkMode ? 'text-gray-300' : 'text-gray-700'}`} dangerouslySetInnerHTML={{ __html: selectedPost.content }} />
            <button onClick={closePost} className="mt-4 px-4 py-2 bg-pink-600 text-white rounded">
              Cerrar
            </button>
          </div>
        </div>
      )}
    </section>
  );
}
