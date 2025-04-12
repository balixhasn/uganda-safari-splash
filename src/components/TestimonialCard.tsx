
import { Star } from "lucide-react";

interface TestimonialCardProps {
  name: string;
  location: string;
  image: string;
  quote: string;
  rating: number;
}

const TestimonialCard = ({
  name,
  location,
  image,
  quote,
  rating,
}: TestimonialCardProps) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-lg">
      <div className="flex items-center mb-4">
        <img 
          src={image} 
          alt={name} 
          className="w-14 h-14 rounded-full object-cover mr-4"
        />
        <div>
          <h4 className="font-serif font-semibold text-gray-800">{name}</h4>
          <p className="text-gray-500 text-sm">{location}</p>
        </div>
      </div>
      <div className="flex mb-4">
        {[...Array(5)].map((_, index) => (
          <Star
            key={index}
            size={18}
            className={`${
              index < rating ? "text-yellow-500 fill-yellow-500" : "text-gray-300"
            }`}
          />
        ))}
      </div>
      <div className="quote-mark">
        <p className="text-gray-600 italic">{quote}</p>
      </div>
    </div>
  );
};

export default TestimonialCard;
