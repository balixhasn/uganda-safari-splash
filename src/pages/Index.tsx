
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, Binoculars, Camera, MapPin, Users, Shield, ThumbsUp } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import SafariCard from '@/components/SafariCard';
import TestimonialCard from '@/components/TestimonialCard';

// Safari packages data
const safariPackages = [
  {
    id: 'gorilla-trekking',
    title: 'Gorilla Trekking Safari',
    description: 'Trek through Bwindi Impenetrable Forest to encounter endangered mountain gorillas in their natural habitat.',
    image: 'https://images.unsplash.com/photo-1539063267507-89e63bd01c30?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
    duration: '4 Days / 3 Nights',
    location: 'Bwindi Impenetrable Forest',
    startingPrice: 1899
  },
  {
    id: 'queen-elizabeth',
    title: 'Queen Elizabeth Wildlife Safari',
    description: 'Explore the diverse wildlife of Queen Elizabeth National Park, including tree-climbing lions and over 600 bird species.',
    image: 'https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?ixlib=rb-4.0.3&auto=format&fit=crop&w=2071&q=80',
    duration: '5 Days / 4 Nights',
    location: 'Queen Elizabeth National Park',
    startingPrice: 1499
  },
  {
    id: 'murchison-falls',
    title: 'Murchison Falls Adventure',
    description: 'Witness the mighty Nile squeeze through a narrow gorge at Murchison Falls National Park.',
    image: 'https://images.unsplash.com/photo-1516426122078-c23e76319801?ixlib=rb-4.0.3&auto=format&fit=crop&w=2068&q=80',
    duration: '3 Days / 2 Nights',
    location: 'Murchison Falls National Park',
    startingPrice: 1299
  }
];

// Testimonials data
const testimonials = [
  {
    name: 'Sarah Johnson',
    location: 'United States',
    image: 'https://randomuser.me/api/portraits/women/65.jpg',
    quote: 'The gorilla trekking experience was absolutely life-changing. Our guide was so knowledgeable and made sure we had an unforgettable experience.',
    rating: 5
  },
  {
    name: 'David Chen',
    location: 'Australia',
    image: 'https://randomuser.me/api/portraits/men/32.jpg',
    quote: 'This was our third safari but by far the best. The diversity of wildlife in Uganda is incredible, and Tusangaire made the whole trip seamless.',
    rating: 5
  },
  {
    name: 'Emma Wilson',
    location: 'United Kingdom',
    image: 'https://randomuser.me/api/portraits/women/45.jpg',
    quote: 'From start to finish, our Uganda safari exceeded all expectations. The accommodations were wonderful and the guides were extremely professional.',
    rating: 4
  }
];

const Index = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative h-screen">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1565881606991-789a8dff9dbb?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80" 
            alt="African Safari" 
            className="w-full h-full object-cover animate-slow-zoom"
          />
          <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        </div>
        
        <div className="relative h-full flex flex-col items-center justify-center text-center text-white px-4">
          <h1 className="safari-heading mb-4 animate-fade-in">
            Experience the Wild Heart of Uganda
          </h1>
          <p className="text-lg md:text-xl max-w-2xl mx-auto mb-8 animate-fade-in" style={{ animationDelay: '0.2s' }}>
            Unforgettable safari adventures in the Pearl of Africa
          </p>
          <div className="flex flex-col sm:flex-row gap-4 animate-fade-in" style={{ animationDelay: '0.4s' }}>
            <Link to="/safaris" className="btn-safari">
              Explore Safaris
            </Link>
            <Link to="/contact" className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-white bg-transparent text-white hover:bg-white hover:text-gray-900 h-11 px-8 py-2">
              Contact Us
            </Link>
          </div>
        </div>

        <div className="absolute bottom-8 left-0 right-0 flex justify-center">
          <div 
            onClick={() => {
              const featuredSection = document.getElementById('featured-safaris');
              featuredSection?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="animate-bounce cursor-pointer bg-white bg-opacity-20 hover:bg-opacity-30 rounded-full p-2"
          >
            <ChevronRight size={24} className="text-white transform rotate-90" />
          </div>
        </div>
      </section>

      {/* Featured Safaris Section */}
      <section id="featured-safaris" className="safari-section bg-gray-50">
        <div className="safari-container">
          <div className="text-center mb-12">
            <h2 className="safari-subheading text-gray-800 mb-4">Featured Safari Experiences</h2>
            <div className="w-24 h-1 bg-safari mx-auto mb-6"></div>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Discover our most popular safari packages, carefully crafted to showcase the best of Uganda's wildlife and landscapes.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {safariPackages.map((safari) => (
              <SafariCard key={safari.id} {...safari} />
            ))}
          </div>

          <div className="text-center mt-12">
            <Link 
              to="/safaris" 
              className="inline-flex items-center font-medium text-safari hover:text-safari-dark"
            >
              View All Safari Packages
              <ChevronRight size={20} className="ml-1" />
            </Link>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="safari-section">
        <div className="safari-container grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <img 
              src="https://images.unsplash.com/photo-1652369614305-6a389e67c9ac?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80" 
              alt="About Tusangaire Safaris" 
              className="rounded-lg shadow-xl w-full h-auto"
            />
          </div>
          
          <div>
            <h2 className="safari-subheading text-gray-800 mb-6">Discover Uganda With Us</h2>
            <div className="w-20 h-1 bg-safari mb-6"></div>
            <p className="text-gray-600 mb-6">
              Tusangaire Safaris has been providing exceptional wildlife experiences in Uganda for over 15 years. Our expert guides and carefully crafted itineraries ensure that you'll experience the very best of what Uganda has to offer.
            </p>
            <p className="text-gray-600 mb-8">
              From the majestic mountain gorillas of Bwindi to the tree-climbing lions of Queen Elizabeth National Park, we'll take you on a journey through some of Africa's most spectacular landscapes and wildlife habitats.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="flex items-start">
                <div className="mr-4 p-2 bg-safari-light bg-opacity-20 rounded-full">
                  <Binoculars size={20} className="text-safari" />
                </div>
                <div>
                  <h3 className="font-serif font-semibold mb-2">Expert Guides</h3>
                  <p className="text-sm text-gray-600">Professional, knowledgeable local guides with years of experience</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="mr-4 p-2 bg-safari-light bg-opacity-20 rounded-full">
                  <Shield size={20} className="text-safari" />
                </div>
                <div>
                  <h3 className="font-serif font-semibold mb-2">Safe Travel</h3>
                  <p className="text-sm text-gray-600">Your safety is our priority with comprehensive travel insurance</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="mr-4 p-2 bg-safari-light bg-opacity-20 rounded-full">
                  <ThumbsUp size={20} className="text-safari" />
                </div>
                <div>
                  <h3 className="font-serif font-semibold mb-2">Quality Service</h3>
                  <p className="text-sm text-gray-600">Personalized service and attention to every detail</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="mr-4 p-2 bg-safari-light bg-opacity-20 rounded-full">
                  <Users size={20} className="text-safari" />
                </div>
                <div>
                  <h3 className="font-serif font-semibold mb-2">Small Groups</h3>
                  <p className="text-sm text-gray-600">Intimate group sizes for a more personal experience</p>
                </div>
              </div>
            </div>

            <div className="mt-8">
              <Link to="/about" className="btn-safari">
                Learn More About Us
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Destination Highlight */}
      <section className="relative py-24">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1516426122078-c23e76319801?ixlib=rb-4.0.3&auto=format&fit=crop&w=2068&q=80" 
            alt="Murchison Falls" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/70 to-transparent"></div>
        </div>
        
        <div className="relative safari-container">
          <div className="max-w-lg text-white">
            <h2 className="safari-subheading mb-6">Explore Uganda's Natural Wonders</h2>
            <div className="w-20 h-1 bg-white mb-6"></div>
            <p className="mb-8">
              Uganda offers an incredible diversity of landscapes and wildlife. From the source of the Nile to the peaks of the Rwenzori Mountains, there's so much to explore in the Pearl of Africa.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/destinations" className="btn-safari">
                View Destinations
              </Link>
              <Link to="/book" className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-white bg-transparent text-white hover:bg-white hover:text-gray-900 h-11 px-8 py-2">
                Book Now
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="safari-section bg-gray-50">
        <div className="safari-container">
          <div className="text-center mb-12">
            <h2 className="safari-subheading text-gray-800 mb-4">What Our Guests Say</h2>
            <div className="w-24 h-1 bg-safari mx-auto mb-6"></div>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Read what our satisfied customers have to say about their unforgettable experiences with Tusangaire Safaris.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard key={index} {...testimonial} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="safari-section bg-safari text-white">
        <div className="safari-container text-center">
          <h2 className="safari-subheading mb-6">Ready for an Unforgettable Adventure?</h2>
          <p className="max-w-2xl mx-auto mb-8">
            Book your safari today and experience the magic of Uganda's wildlife and landscapes. Our team is ready to help you plan the perfect adventure.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link to="/book" className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-white text-safari hover:bg-gray-100 h-11 px-8 py-2">
              Book Now
            </Link>
            <Link to="/contact" className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-white bg-transparent text-white hover:bg-white hover:text-safari h-11 px-8 py-2">
              Contact Us
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Index;
