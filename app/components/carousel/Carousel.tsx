"use client";

import { useState } from "react";

interface CarouselItem {
  id: string;
  title: string;
  description: string;
  image: string;
  link: string;
}

interface CarouselProps {
  items: CarouselItem[];
  title: string;
}

const Carousel = ({ items, title }: CarouselProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === items.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? items.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="w-full">
      <h2 className="mb-8 text-2xl font-bold">{title}</h2>
      <div className="relative overflow-hidden rounded-lg">
        <div 
          className="flex transition-transform duration-300 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {items.map((item) => (
            <div key={item.id} className="w-full flex-shrink-0">
              <div className="card-hover rounded-lg p-6">
                <div className="aspect-video w-full overflow-hidden rounded-lg mb-4">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="h-full w-full object-cover"
                  />
                </div>
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-foreground/60 mb-4">{item.description}</p>
                <a
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline"
                >
                  Read more
                </a>
              </div>
            </div>
          ))}
        </div>
        
        {/* Navigation Buttons */}
        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 -translate-y-1/2 rounded-full bg-background/80 p-2 text-primary hover:bg-background"
        >
          ←
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 -translate-y-1/2 rounded-full bg-background/80 p-2 text-primary hover:bg-background"
        >
          →
        </button>
      </div>
      
      {/* Dots Indicator */}
      <div className="mt-4 flex justify-center space-x-2">
        {items.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`h-2 w-2 rounded-full ${
              index === currentIndex ? "bg-primary" : "bg-foreground/30"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default Carousel; 