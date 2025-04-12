
import { Instagram, Facebook, Twitter, Mail, Phone, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="space-y-4">
            <Link to="/" className="inline-block">
              <img 
                src="/lovable-uploads/bd37e64d-7593-46e1-b9ab-f6526f3a93fd.png" 
                alt="Tusangaire Safaris" 
                className="h-20"
              />
            </Link>
            <p className="text-gray-400 mt-4">
              Experience the wilderness of Uganda with our premium safari tours. We offer unforgettable experiences in the heart of East Africa.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-white hover:text-safari-light transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-white hover:text-safari-light transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-white hover:text-safari-light transition-colors">
                <Twitter size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-gray-400 hover:text-white transition-colors">Home</Link></li>
              <li><Link to="/safaris" className="text-gray-400 hover:text-white transition-colors">Our Safaris</Link></li>
              <li><Link to="/destinations" className="text-gray-400 hover:text-white transition-colors">Destinations</Link></li>
              <li><Link to="/about" className="text-gray-400 hover:text-white transition-colors">About Us</Link></li>
              <li><Link to="/faq" className="text-gray-400 hover:text-white transition-colors">FAQ</Link></li>
              <li><Link to="/contact" className="text-gray-400 hover:text-white transition-colors">Contact Us</Link></li>
            </ul>
          </div>

          {/* Top Destinations */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Top Destinations</h3>
            <ul className="space-y-2">
              <li><Link to="/destinations/queen-elizabeth" className="text-gray-400 hover:text-white transition-colors">Queen Elizabeth National Park</Link></li>
              <li><Link to="/destinations/bwindi" className="text-gray-400 hover:text-white transition-colors">Bwindi Impenetrable Forest</Link></li>
              <li><Link to="/destinations/murchison-falls" className="text-gray-400 hover:text-white transition-colors">Murchison Falls</Link></li>
              <li><Link to="/destinations/kidepo" className="text-gray-400 hover:text-white transition-colors">Kidepo Valley</Link></li>
              <li><Link to="/destinations/kibale" className="text-gray-400 hover:text-white transition-colors">Kibale Forest</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin size={20} className="mr-2 mt-1 text-safari" />
                <span className="text-gray-400">Kampala Road, Kampala, Uganda</span>
              </li>
              <li className="flex items-center">
                <Phone size={20} className="mr-2 text-safari" />
                <span className="text-gray-400">+256 700 123456</span>
              </li>
              <li className="flex items-center">
                <Mail size={20} className="mr-2 text-safari" />
                <span className="text-gray-400">info@tusangaire-safaris.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-500">
          <p>&copy; {new Date().getFullYear()} Tusangaire Safaris. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
