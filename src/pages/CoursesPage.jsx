import { useState } from 'react';
import Mainall from '../layout/Mainall';
import CourseList from '../components/courses/CourseList';
import CartSidebar from '../components/cart/CartSidebar';

const CoursesPage = () => {
  const [courses] = useState([
    {
      id: 1,
      title: 'React پیشرفته',
      description: 'آموزش کامل React با Hooks، Context API، Redux Toolkit و Next.js',
      price: 750000,
      level: 'پیشرفته',
      type: 'frontend',
      duration: '۴۵ ساعت',
      students: 256,
      rating: 4.9,
      instructor: 'مهندس احمدی',
      image: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg',
      tags: ['React', 'Redux', 'Hooks'],
      whatYouLearn: ['React Hooks و Custom Hooks', 'Context API برای مدیریت state', 'Redux Toolkit', 'Routing با React Router', 'Next.js و SSR', 'بهینه‌سازی performance']
    },
    {
      id: 2,
      title: 'Next.js کامل',
      description: 'توسعه وب با Next.js، SSR، SSG، ISR و App Router جدید',
      price: 850000,
      level: 'متوسط',
      type: 'frontend',
      duration: '۳۸ ساعت',
      students: 178,
      rating: 4.8,
      instructor: 'مهندس کریمی',
      image: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg',
      tags: ['Next.js', 'SSR', 'App Router'],
      whatYouLearn: ['SSR و SSG', 'ISR (Incremental Static Regeneration)', 'App Router جدید', 'API Routes', 'Middleware', 'Deployment']
    },
    {
      id: 3,
      title: 'Tailwind CSS',
      description: 'طراحی حرفه‌ای وب با Tailwind CSS و ساخت کامپوننت‌های سفارشی',
      price: 450000,
      level: 'مقدماتی',
      type: 'frontend',
      duration: '۲۲ ساعت',
      students: 320,
      rating: 4.9,
      instructor: 'مهندس رضایی',
      image: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg',
      tags: ['Tailwind', 'CSS', 'Responsive'],
      whatYouLearn: ['مفاهیم پایه Tailwind', 'طراحی responsive', 'ساخت تم سفارشی', 'کامپوننت‌های reusable', 'بهینه‌سازی CSS']
    },
    {
      id: 4,
      title: 'JavaScript پیشرفته',
      description: 'مفاهیم پیشرفته جاوااسکریپت شامل Closure، Promise، Async/Await و OOP',
      price: 550000,
      level: 'پیشرفته',
      type: 'frontend',
      duration: '۵۰ ساعت',
      students: 234,
      rating: 4.7,
      instructor: 'مهندس محمدی',
      image: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg',
      tags: ['JavaScript', 'ES6+', 'OOP'],
      whatYouLearn: ['Closure و Scope', 'Promise و Async/Await', 'OOP در JavaScript', 'Design Patterns', 'Functional Programming', 'DOM manipulation']
    },
    {
      id: 5,
      title: 'Node.js و Express',
      description: 'ساخت RESTful API، احراز هویت، ارتباط با دیتابیس و Deployment',
      price: 650000,
      level: 'متوسط',
      type: 'backend',
      duration: '۴۲ ساعت',
      students: 187,
      rating: 4.6,
      instructor: 'مهندس علیزاده',
      image: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg',
      tags: ['Node.js', 'Express', 'MongoDB'],
      whatYouLearn: ['RESTful API', 'JWT احراز هویت', 'MongoDB و Mongoose', 'Validation و Error Handling', 'Testing با Jest', 'Deployment']
    },
    {
      id: 6,
      title: 'TypeScript',
      description: 'آموزش TypeScript از صفر تا صد با مفاهیم پیشرفته تایپ‌ها و Generics',
      price: 500000,
      level: 'متوسط',
      type: 'frontend',
      duration: '۲۸ ساعت',
      students: 210,
      rating: 4.8,
      instructor: 'مهندس حسینی',
      image: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg',
      tags: ['TypeScript', 'Type', 'Generic'],
      whatYouLearn: ['Types و Interfaces', 'Generics', 'Utility Types', 'Type Guards', 'Decorators', 'TypeScript با React']
    },
    {
      id: 7,
      title: 'Figma UI/UX',
      description: 'طراحی رابط کاربری و تجربه کاربری با Figma از مبتدی تا پیشرفته',
      price: 400000,
      level: 'مقدماتی',
      type: 'ui-ux',
      duration: '۲۰ ساعت',
      students: 345,
      rating: 4.9,
      instructor: 'مهندس نوروزی',
      image: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/figma/figma-original.svg',
      tags: ['Figma', 'UI', 'UX'],
      whatYouLearn: ['مفاهیم UI/UX', 'کار با Figma', 'طراحی Wireframe', 'Prototyping', 'Design System', 'User Research']
    },
    {
      id: 8,
      title: 'Django REST Framework',
      description: 'ساخت API قدرتمند با Django REST Framework و احراز هویت پیشرفته',
      price: 700000,
      level: 'پیشرفته',
      type: 'backend',
      duration: '۴۸ ساعت',
      students: 156,
      rating: 4.7,
      instructor: 'مهندس طاهری',
      image: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/django/django-plain.svg',
      tags: ['Django', 'DRF', 'Python'],
      whatYouLearn: ['Django REST Framework', 'Authentication & Permissions', 'Serializers', 'API Testing', 'Deployment', 'Advanced Queries']
    },
    {
      id: 9,
      title: 'UI/UX Design',
      description: 'طراحی تجربه کاربری و رابط کاربری با اصول علمی و پروژه‌های عملی',
      price: 480000,
      level: 'متوسط',
      type: 'ui-ux',
      duration: '۳۲ ساعت',
      students: 198,
      rating: 4.8,
      instructor: 'مهندس مرادی',
      image: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/figma/figma-original.svg',
      tags: ['UI', 'UX', 'Design'],
      whatYouLearn: ['User Research', 'Wireframing', 'Prototyping', 'User Testing', 'Design Systems', 'Portfolio Project']
    },
    {
      id: 10,
      title: 'GraphQL',
      description: 'آموزش GraphQL با Apollo Client و ساخت API مدرن',
      price: 600000,
      level: 'پیشرفته',
      type: 'backend',
      duration: '۳۵ ساعت',
      students: 134,
      rating: 4.5,
      instructor: 'مهندس رستمی',
      image: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/graphql/graphql-plain.svg',
      tags: ['GraphQL', 'Apollo', 'API'],
      whatYouLearn: ['GraphQL Schema', 'Resolvers', 'Apollo Client', 'Authentication', 'Subscriptions', 'Performance Optimization']
    }
  ]);

  const [cartItems, setCartItems] = useState(() => {
    try {
      const item = window.localStorage.getItem('cart');
      return item ? JSON.parse(item) : [];
    } catch (error) {
      return [];
    }
  });
  const [isCartOpen, setIsCartOpen] = useState(false);

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

  const removeFromCart = (id) => {
    setCartItems(prev => {
      const newItems = prev.filter(item => item.id !== id);
      saveToLocalStorage(newItems);
      return newItems;
    });
  };

  const updateQuantity = (id, change) => {
    setCartItems(prev => {
      const item = prev.find(item => item.id === id);
      if (!item) return prev;
      if (item.quantity + change <= 0) {
        const newItems = prev.filter(item => item.id !== id);
        saveToLocalStorage(newItems);
        return newItems;
      }
      const newItems = prev.map(item => item.id === id ? { ...item, quantity: item.quantity + change } : item);
      saveToLocalStorage(newItems);
      return newItems;
    });
  };

  const clearCart = () => {
    if (window.confirm('آیا از پاک کردن همه آیتم‌ها مطمئن هستید؟')) {
      setCartItems([]);
      saveToLocalStorage([]);
    }
  };

  return (
    <Mainall>
    {/* لیست دوره‌ها  */}
      <div className="container mx-auto px-4 py-8">
        <CourseList 
          courses={courses} 
          onAddToCart={addToCart} 
          cartItems={cartItems} 
          onCartOpen={() => setIsCartOpen(true)} 
        />
        <CartSidebar 
          isOpen={isCartOpen} 
          onClose={() => setIsCartOpen(false)} 
          cartItems={cartItems} 
          removeFromCart={removeFromCart} 
          updateQuantity={updateQuantity} 
          clearCart={clearCart} 
        />
      </div>
    </Mainall>
  );
};

export default CoursesPage;