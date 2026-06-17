// components/Slider.jsx
import { useState, useEffect } from 'react';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import pic1 from '../assets/img/picone.jpg'
import pic2 from '../assets/img/pictwo.jpg'
import pic3 from '../assets/img/picthree.jpg'
import pic4 from '../assets/img/picfour.jpg'
import pic5 from '../assets/img/picfive.jpg'
const slides = [
    { id: 1, image: pic1 },
    { id: 2, image: pic2 },
    { id: 3, image:pic3 },
    { id: 4, image: pic4 },
    { id: 5, image:pic5}
  ];
const Slider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  console.log(currentSlide);
  console.log(slides);
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [slides.length]);


  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };


  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  // رفتن به اسلاید خاص با کلیک روی نقاط
  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  return (
    <div className="w-full max-w-5xl mx-auto p-4">
      <div className="relative overflow-hidden rounded-2xl shadow-xl bg-gray-900">
        {/* کانتینر اسلایدها */}
        <div
          className="flex transition-transform duration-700 ease-in-out"
          style={{
  transform: `translateX(-${currentSlide * 100}%)`, }} dir='ltr'>
          {slides.map((slide) => (
            <div
              key={slide.id}
              className="min-w-full h-80"
            >
              <img
                src={slide.image}
                alt={`اسلاید ${slide.id}`}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>

        {/* دکمه قبلی */}
        <button
          onClick={prevSlide}
          className="absolute top-1/2 right-4 -translate-y-1/2 
                   bg-black/50 hover:bg-wh text-[#00FF48] hover:text-black
                   p-2 rounded-full transition-all duration-300
                   border border-white/30 hover:border-black hover:bg-[#00FF48]
                   backdrop-blur-sm z-10"
          aria-label="اسلاید قبلی"
        >
          <FiChevronRight size={24} />
        </button>

        {/* دکمه بعدی */}
        <button
          onClick={nextSlide}
          className="absolute top-1/2 left-4 -translate-y-1/2 
                   bg-black/50 hover:text-black text-[#00FF48] hover:text-black
                   p-2 rounded-full transition-all duration-300
                   border border-white/30 hover:text-[#00FF48] hover:bg-[#00FF48]
                   backdrop-blur-sm z-10"
          aria-label="اسلاید بعدی"  
        >
          <FiChevronLeft size={24} />
        </button>

        {/* نقاط ناوبری */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-10">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`transition-all duration-300 rounded-full
                ${
                  currentSlide === index
                    ? 'bg-green-600 w-8 h-2.5'
                    : 'bg-white/50 hover:bg-white/80 w-2.5 h-2.5'
                }
              `}
              aria-label={`رفتن به اسلاید ${index + 1}`}
            />
          ))}
        </div>

        {/* شمارنده اسلاید */}
        <div className="absolute top-4 right-4 bg-black/50 backdrop-blur-sm text-white px-3 py-1 rounded-full text-sm z-10">
          {currentSlide + 1} / {slides.length}
        </div>
      </div>
    </div>
  );
};

export default Slider;