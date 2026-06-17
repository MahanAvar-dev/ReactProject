import { useState } from 'react';
import Mainall from '../layout/Mainall';
import HeroSection from '../components/home/HeroSection';
import AboutSection from '../components/home/Aboutsec';
import ContactSection from '../components/home/Contactsec';
import CoursesPreview from '../components/home/Coursepreview';
import Slider from '../components/home/Slider';
import SimpleParallax from '../components/home/Parallex';

const HomePage = () => {
  const [courses] = useState([
    { id: 1, title: 'React پیشرفته', price: 750000, level: 'پیشرفته', instructor: 'مهندس احمدی', image: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg' },
    { id: 2, title: 'Next.js کامل', price: 850000, level: 'متوسط', instructor: 'مهندس کریمی', image: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg' },
    { id: 3, title: 'Tailwind CSS', price: 450000, level: 'مقدماتی', instructor: 'مهندس رضایی', image: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg' },
    { id: 4, title: 'JavaScript پیشرفته', price: 550000, level: 'پیشرفته', instructor: 'مهندس محمدی', image: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg' }
  ]);

  const [cartItems, setCartItems] = useState(() => {
    try {
      const item = window.localStorage.getItem('cart');
      return item ? JSON.parse(item) : [];
    } catch (error) {
      return [];
    }
  });

  const saveToLocalStorage = (items) => {
    try {
      window.localStorage.setItem('cart', JSON.stringify(items));
    } catch (error) {
      console.log(error);
    }
  };

  const addToCart = (course) => {
    setCartItems(prev => {
      const existing = prev.find(item => item.id === course.id);
      let newItems;
      if (existing) {
        newItems = prev.map(item => item.id === course.id ? { ...item, quantity: item.quantity + 1 } : item);
      } else {
        newItems = [...prev, { ...course, quantity: 1 }];
      }
      saveToLocalStorage(newItems);
      return newItems;
    });
  };

  return (
    <Mainall>
      <HeroSection />
      <div className="flex-1 w-full hidden lg:block">
            <Slider />
            </div>
      <AboutSection />
      <CoursesPreview courses={courses} onAddToCart={addToCart} />
      <SimpleParallax />
      <ContactSection />
    </Mainall>
  );
};

export default HomePage;