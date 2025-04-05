
import { Facebook, Instagram, Linkedin, Mail, MapPin, Phone } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white pt-12 pb-6">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Karta Pobytu</h3>
            <p className="text-gray-300 mb-4">
              Професійна допомога в оформленні документів для легального перебування та роботи в Польщі.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-white">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-white">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-white">
                <Linkedin size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Послуги</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-300 hover:text-white">Карта тимчасового побуту</a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white">Дозвіл на роботу</a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white">Запрошення для іноземців</a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white">Консультації з міграційних питань</a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white">Допомога з документами</a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Інформація</h3>
            <ul className="space-y-2">
              <li>
                <a href="#process" className="text-gray-300 hover:text-white">Про процес</a>
              </li>
              <li>
                <a href="#faq" className="text-gray-300 hover:text-white">Часті запитання</a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white">Блог</a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white">Про компанію</a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white">Політика конфіденційності</a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Контакти</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin size={20} className="mr-2 mt-1 flex-shrink-0" />
                <span className="text-gray-300">вул. Маршалковська 45, Варшава, 00-123, Польща</span>
              </li>
              <li className="flex items-center">
                <Phone size={20} className="mr-2 flex-shrink-0" />
                <a href="tel:+48123456789" className="text-gray-300 hover:text-white">+48 123 456 789</a>
              </li>
              <li className="flex items-center">
                <Mail size={20} className="mr-2 flex-shrink-0" />
                <a href="mailto:info@kartapobytu.pl" className="text-gray-300 hover:text-white">info@kartapobytu.pl</a>
              </li>
            </ul>
          </div>
        </div>
        
        <hr className="border-gray-700 my-6" />
        
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm mb-2 md:mb-0">
            © 2025 Karta Pobytu. Усі права захищені.
          </p>
          <div className="flex space-x-4">
            <a href="#" className="text-gray-400 hover:text-white text-sm">Умови використання</a>
            <a href="#" className="text-gray-400 hover:text-white text-sm">Політика конфіденційності</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
