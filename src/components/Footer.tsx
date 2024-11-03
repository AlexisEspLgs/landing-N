import { Link } from 'react-router-dom';
import { FacebookIcon, InstagramIcon, TwitterIcon } from 'lucide-react';

interface FooterProps {
  readonly darkMode: boolean; // Propiedad marcada como readonly
  readonly scrollToSection: (sectionId: string) => void; // Añadir esta línea
}

export default function Footer({ darkMode, scrollToSection }: FooterProps) {
  return (
    <footer className={`bg-gradient-to-b ${darkMode ? 'from-gray-800 to-gray-900 text-white' : 'from-pink-100 to-pink-200'}`}>
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold tracking-wider uppercase font-serif">Contacto</h3>
            <ul className="mt-4 space-y-4">
              <li>
                <p className="text-base">Teléfono: --</p>
              </li>
              <li>
                <p className="text-base">Email: js.riveracid@gmail.com</p>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold tracking-wider uppercase font-serif">Enlaces rápidos</h3>
            <ul className="mt-4 space-y-4">
              {['Inicio', 'sobre-mi', 'Servicios', 'Blog', 'Contacto'].map((item) => (
                <li key={item}>
                  <button
                    onClick={() => scrollToSection(item.toLowerCase().replace(' ', '-'))}
                    className="text-base hover:text-pink-600 transition duration-300 ease-in-out"
                  >
                    {item}
                  </button>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold tracking-wider uppercase font-serif">Sígueme en redes sociales</h3>
            <div className="mt-4 flex space-x-6">
              {[  
                { name: 'Facebook', icon: FacebookIcon, href: 'https://www.facebook.com' },
                { name: 'Instagram', icon: InstagramIcon, href: 'https://www.instagram.com/unnienutri_salud/' },
                { name: 'Twitter', icon: TwitterIcon, href: 'https://www.x.com' },
              ].map((item) => (
                <a 
                  key={item.name}
                  href={item.href} 
                  className="hover:text-pink-600 transition duration-300 ease-in-out"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="sr-only">{item.name}</span>
                  <item.icon className="h-6 w-6" aria-hidden="true" />
                </a>
              ))}
            </div>
          </div>
        </div>
        <div className="mt-8 border-t border-gray-200 pt-8">
          <p className="text-base text-center">
            &copy; {new Date().getFullYear()} NutriJeane. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
