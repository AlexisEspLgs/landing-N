import { Heart, MessageCircle, Share2 } from 'lucide-react';

const instagramPosts = [
  { id: 1, imageUrl: '/jeane_portada.jpg', link: 'https://www.instagram.com/unnienutri_salud/' },
  { id: 2, imageUrl: '/jeane_portada.jpg', link: 'https://www.instagram.com/unnienutri_salud/' },
  { id: 3, imageUrl: '/jeane_portada.jpg', link: 'https://www.instagram.com/unnienutri_salud/' },
];

interface InstagramGalleryProps {
  readonly darkMode: boolean; // Marca como solo lectura
}

export default function InstagramGallery({ darkMode }: InstagramGalleryProps) {
  return (
    <section className={`py-14 ${darkMode ? 'bg-gray-800' : 'bg-white'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center mb-8">
          <h2 className={`text-base text-pink-600 font-semibold tracking-wide uppercase ${darkMode ? 'text-gray-300' : ''}`}>
            Instagram
          </h2>
          <p className={`mt-2 text-3xl leading-8 font-extrabold tracking-tight ${darkMode ? 'text-white' : 'text-gray-900'} sm:text-4xl`}>
            Sígueme en Instagram
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4">
          {instagramPosts.map((post) => (
            <div key={post.id} className={`border border-gray-200 rounded-lg overflow-hidden shadow-md ${darkMode ? 'bg-gray-700' : 'bg-white'}`}>
              <div className="p-4 flex items-center">
                <div className="h-8 w-8 rounded-full bg-gray-200 flex-shrink-0"></div>
                <div className="ml-3">
                  <p className={`text-sm font-semibold ${darkMode ? 'text-gray-300' : 'text-gray-800'}`}>unnienutri_salud</p>
                </div>
              </div>
              <div className="relative overflow-hidden" style={{ height: '320px' }}>
                <img
                  src={post.imageUrl}
                  alt={`Instagram post ${post.id}`}
                  className="absolute w-full h-full object-cover transition-transform duration-300 ease-in-out transform hover:scale-110"
                />
              </div>
              <div className={`p-4 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                <div className="flex space-x-4">
                  <button className="hover:text-red-500 transition-colors duration-200">
                    <Heart className="h-6 w-6" />
                  </button>
                  <button className="hover:text-blue-500 transition-colors duration-200">
                    <MessageCircle className="h-6 w-6" />
                  </button>
                  <button className="hover:text-green-500 transition-colors duration-200">
                    <Share2 className="h-6 w-6" />
                  </button>
                </div>
                <p className={`mt-2 text-sm ${darkMode ? 'text-gray-400' : ''}`}>
                  <span className="font-semibold">unnienutri_salud</span> ¡Descubre más sobre nutrición y bienestar en mi perfil!
                </p>
                <a
                  href={post.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`mt-2 inline-block text-pink-600 hover:text-pink-700 transition-colors duration-200 ${darkMode ? 'text-gray-300 hover:text-gray-400' : ''}`}
                >
                  Ver en Instagram
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
