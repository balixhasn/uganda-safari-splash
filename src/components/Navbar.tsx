
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'}`}>
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center">
            <img 
              src="/lovable-uploads/bd37e64d-7593-46e1-b9ab-f6526f3a93fd.png" 
              alt="Tusangaire Safaris" 
              className="h-16 md:h-20"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className={`font-medium hover:text-safari ${isScrolled ? 'text-gray-800' : 'text-white'}`}>Home</Link>
            <Link to="/safaris" className={`font-medium hover:text-safari ${isScrolled ? 'text-gray-800' : 'text-white'}`}>Safaris</Link>
            <Link to="/destinations" className={`font-medium hover:text-safari ${isScrolled ? 'text-gray-800' : 'text-white'}`}>Destinations</Link>
            <Link to="/about" className={`font-medium hover:text-safari ${isScrolled ? 'text-gray-800' : 'text-white'}`}>About Us</Link>
            <Link to="/contact" className={`font-medium hover:text-safari ${isScrolled ? 'text-gray-800' : 'text-white'}`}>Contact</Link>
            <Link to="/book" className="btn-safari">Book Now</Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={`${isScrolled ? 'text-gray-800' : 'text-white'} focus:outline-none`}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-white mt-4 py-4 px-4 rounded-lg shadow-lg">
            <div className="flex flex-col space-y-4">
              <Link to="/" className="font-medium text-gray-800 hover:text-safari">Home</Link>
              <Link to="/safaris" className="font-medium text-gray-800 hover:text-safari">Safaris</Link>
              <Link to="/destinations" className="font-medium text-gray-800 hover:text-safari">Destinations</Link>
              <Link to="/about" className="font-medium text-gray-800 hover:text-safari">About Us</Link>
              <Link to="/contact" className="font-medium text-gray-800 hover:text-safari">Contact</Link>
              <Link to="/book" className="btn-safari w-full text-center">Book Now</Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
