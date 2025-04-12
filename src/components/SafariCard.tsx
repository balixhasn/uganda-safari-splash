
import { Calendar, Clock, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';

interface SafariCardProps {
  id: string;
  title: string;
  description: string;
  image: string;
  duration: string;
  location: string;
  startingPrice: number;
}

const SafariCard = ({
  id,
  title,
  description,
  image,
  duration,
  location,
  startingPrice
}: SafariCardProps) => {
  return (
    <div className="safari-card group">
      <div className="relative overflow-hidden h-56">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute top-4 right-4 bg-safari text-white text-sm font-bold px-3 py-1 rounded">
          From ${startingPrice}
        </div>
      </div>
      <div className="p-6">
        <h3 className="font-serif text-xl font-semibold mb-2 text-gray-800">{title}</h3>
        <div className="flex flex-col gap-y-2 text-gray-600 text-sm mb-4">
          <div className="flex items-center">
            <MapPin size={16} className="mr-2 text-safari" />
            <span>{location}</span>
          </div>
          <div className="flex items-center">
            <Clock size={16} className="mr-2 text-safari" />
            <span>{duration}</span>
          </div>
        </div>
        <p className="text-gray-600 mb-4 line-clamp-2">{description}</p>
        <Link 
          to={`/safari/${id}`} 
          className="block text-center w-full py-3 bg-white border border-safari text-safari font-medium rounded transition-colors hover:bg-safari hover:text-white"
        >
          View Details
        </Link>
      </div>
    </div>
  );
};

export default SafariCard;
