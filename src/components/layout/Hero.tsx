import { useState, useEffect, useCallback } from 'react';
import { slides } from './SlideData';

const Hero = () => {
  // State to track current slide index
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  // Define slide change functions with useCallback
  const goToNextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  }, []);

  // Auto-advance slideshow
  useEffect(() => {
    let interval: ReturnType<typeof setInterval>;

    if (isAutoPlaying) {
      interval = setInterval(goToNextSlide, 5000);
    }

    return () => {
      if (interval) clearInterval(interval);
    };
  }, [isAutoPlaying, goToNextSlide]);

  // Pause autoplay when user interacts with controls
  const pauseAutoPlay = useCallback(() => {
    setIsAutoPlaying(false);
    // Resume after 10 seconds of inactivity
    const timer = setTimeout(() => setIsAutoPlaying(true), 10000);
    return () => clearTimeout(timer);
  }, []);

  // Handle manual navigation
  const goToSlide = useCallback((index: number) => {
    pauseAutoPlay();
    setCurrentSlide(index);
  }, [pauseAutoPlay]);

  const nextSlide = useCallback(() => {
    pauseAutoPlay();
    goToNextSlide();
  }, [pauseAutoPlay, goToNextSlide]);

  const prevSlide = useCallback(() => {
    pauseAutoPlay();
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  }, [pauseAutoPlay]);

  return (
    <div className="relative w-full bg-black overflow-hidden">
      {/* Slideshow container */}
      <div className="w-full h-[600px] relative overflow-hidden">
        {/* Slides */}
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-all duration-1000 ease-in-out ${
              index === currentSlide ? 'opacity-100 z-10 scale-100' : 'opacity-0 z-0 scale-105'
            }`}
          >
            <img
              src={slide.image}
              alt={slide.alt}
              className="w-full h-full object-cover"
            />

            {/* Slide title overlay */}
            {slide.title && index === currentSlide && (
              <div className="absolute top-4 right-4 bg-black/70 text-white px-4 py-2 rounded z-20 opacity-0 animate-fadeIn">
                <span className="font-bold">{slide.title}</span>
              </div>
            )}
          </div>
        ))}

        {/* Hero content overlay */}
        <div className="absolute inset-0 z-20 bg-gradient-to-r from-black via-black/70 to-transparent flex items-center">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-lg">
              <h1 className="text-4xl font-bold text-white mb-4">PC Game Pass</h1>
              <p className="text-lg text-white mb-8">Play hundreds of high-quality PC games for one low monthly price.</p>

              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="#"
                  className="bg-xbox-green hover:bg-opacity-90 text-white font-bold py-2 px-6 uppercase tracking-wide inline-flex items-center justify-center transition-all duration-300"
                >
                  Join Now
                  <svg
                    className="w-4 h-4 ml-1"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M9 6L15 12L9 18"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </a>

                <a
                  href="#"
                  className="border border-white hover:bg-white hover:bg-opacity-10 text-white font-bold py-2 px-6 uppercase tracking-wide inline-flex items-center justify-center transition-all duration-300"
                >
                  Learn More
                  <svg
                    className="w-4 h-4 ml-1"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M9 6L15 12L9 18"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </a>
              </div>

              {/* Social Media */}
              <div className="mt-8">
                <p className="text-white mb-2">Follow PC Game Pass</p>
                <div className="flex gap-4">
                  <a href="https://www.facebook.com/RLagarto10" className="text-white hover:text-xbox-green transition-colors duration-300">
                    <svg
                      className="w-6 h-6"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                        fillRule="evenodd"
                        clipRule="evenodd"
                      />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Navigation arrows */}
        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 z-30 bg-black/50 text-white p-2 rounded-full hover:bg-black/70 hover:scale-110 transition-all duration-300"
          aria-label="Previous slide"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 z-30 bg-black/50 text-white p-2 rounded-full hover:bg-black/70 hover:scale-110 transition-all duration-300"
          aria-label="Next slide"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
          </svg>
        </button>

        {/* Slide indicators */}
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 z-30 flex space-x-3">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                currentSlide === index ? 'bg-white scale-110 w-6' : 'bg-white/40 hover:bg-white/60'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Hero;
