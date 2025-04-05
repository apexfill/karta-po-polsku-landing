
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-white py-4 sticky top-0 z-50 shadow-sm">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <a href="#" className="text-blue-900 font-bold text-xl flex items-center">
            <span className="text-blue-500 mr-1">K</span>Karta Pobytu
          </a>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8">
          <a href="#benefits" className="text-gray-700 hover:text-blue-700 font-medium">
            Переваги
          </a>
          <a href="#process" className="text-gray-700 hover:text-blue-700 font-medium">
            Процес
          </a>
          <a href="#testimonials" className="text-gray-700 hover:text-blue-700 font-medium">
            Відгуки
          </a>
          <a href="#faq" className="text-gray-700 hover:text-blue-700 font-medium">
            Питання
          </a>
        </div>

        <Button className="hidden md:flex bg-blue-600 hover:bg-blue-700">
          Консультація
        </Button>

        {/* Mobile menu button */}
        <button
          onClick={toggleMenu}
          className="md:hidden text-gray-700 hover:text-blue-700"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white py-4 px-4 shadow-md absolute w-full">
          <div className="flex flex-col space-y-4">
            <a 
              href="#benefits" 
              className="text-gray-700 hover:text-blue-700 font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              Переваги
            </a>
            <a 
              href="#process" 
              className="text-gray-700 hover:text-blue-700 font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              Процес
            </a>
            <a 
              href="#testimonials" 
              className="text-gray-700 hover:text-blue-700 font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              Відгуки
            </a>
            <a 
              href="#faq" 
              className="text-gray-700 hover:text-blue-700 font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              Питання
            </a>
            <Button 
              className="bg-blue-600 hover:bg-blue-700 w-full"
              onClick={() => setIsMenuOpen(false)}
            >
              Консультація
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
}
