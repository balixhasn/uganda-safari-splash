
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <>
      <Navbar />
      <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
        <div className="text-center">
          <h1 className="text-9xl font-bold text-safari">404</h1>
          <p className="text-2xl font-serif text-gray-800 mb-8">Page Not Found</p>
          <p className="text-gray-600 max-w-md mx-auto mb-8">
            Sorry, we couldn't find the page you're looking for. Perhaps you'd like to return to our homepage?
          </p>
          <Link to="/" className="btn-safari">
            Return to Home
          </Link>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default NotFound;
