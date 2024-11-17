import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const workItems = [
  {
    image: "https://unsplash.com/photos/LCjtoNRvKpE/download?force=true&w=1200",
    title: "Project One",
    description: "A brief description of Project One."
  },
  {
    image: "https://unsplash.com/photos/tIz0GhOxtJk/download?force=true&w=1200",
    title: "Project Two",
    description: "A brief description of Project Two."
  },
  {
    image: "https://unsplash.com/photos/KE1XWm2m3UE/download?force=true&w=1200",
    title: "Project Three",
    description: "A brief description of Project Three."
  },
  {
    image: "https://unsplash.com/photos/hS7qnqZxhKk/download?force=true&w=1200",
    title: "Project Four",
    description: "A brief description of Project Four."
  },
  {
    image: "https://unsplash.com/photos/E2Y-AmYImT8/download?force=true&w=1200",
    title: "Project Five",
    description: "A brief description of Project Five."
  }
];

function OurWork() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % workItems.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + workItems.length) % workItems.length);
  };

  // Mobile Carousel Component
  const MobileCarousel = () => (
    <div className="relative w-full">
      <div className="overflow-hidden rounded-lg">
        <div className="relative w-full h-96">
          <img
            src={workItems[currentSlide].image}
            alt={workItems[currentSlide].title}
            className="w-full h-full object-cover"
          />
          
          {/* Dark Overlay */}
          <div className="absolute inset-0 bg-black bg-opacity-50"></div>
          
          {/* Content */}
          <div className="absolute inset-0 flex flex-col items-center justify-center text-white p-4">
            <h3 className="text-xl font-bold mb-2">{workItems[currentSlide].title}</h3>
            <p className="text-sm text-center">{workItems[currentSlide].description}</p>
          </div>
        </div>
      </div>

      {/* Navigation Buttons */}
      <button 
        onClick={prevSlide}
        className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/80 p-2 rounded-full"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>
      <button 
        onClick={nextSlide}
        className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/80 p-2 rounded-full"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Dots Indicator */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
        {workItems.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-2 h-2 rounded-full ${
              currentSlide === index ? 'bg-white' : 'bg-white/50'
            }`}
          />
        ))}
      </div>
    </div>
  );

  // Desktop Layout Component
  const DesktopLayout = () => (
    <div className="flex gap-4 justify-center overflow-x-auto snap-x snap-mandatory">
      {workItems.map((item, index) => (
        <div
          key={index}
          className="relative w-40 h-96 duration-100 hover:w-80 bg-gray-200 rounded-lg snap-center transition-all ease-in-out overflow-hidden group border-2"
        >
          <img
            src={item.image}
            alt={item.title}
            className="w-full h-full object-cover transition-transform duration-300 group-hover:blur-sm"
          />
          
          <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-50 transition-opacity duration-300"></div>

          <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-white">
            <h3 className="font-bold text-lg mb-2">{item.title}</h3>
            <p className="text-sm">{item.description}</p>
          </div>
        </div>
      ))}
    </div>
  );

  return (
    <div className="py-20 px-5 text-center bg-gray-50">
      <h2 className="text-3xl md:text-4xl font-bold mb-10">Our Work</h2>
      
      {/* Show carousel on mobile, expanding cards on desktop */}
      <div className="md:hidden">
        <MobileCarousel />
      </div>
      <div className="hidden md:block">
        <DesktopLayout />
      </div>
    </div>
  );
}

export default OurWork;