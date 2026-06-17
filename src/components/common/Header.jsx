import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FiShoppingCart, FiMenu, FiX, FiUser } from 'react-icons/fi';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [cartCount, setCartCount] = useState(0);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const location = useLocation();

  useEffect(() => {
    try {
      const cart = JSON.parse(localStorage.getItem('cart') || '[]');
      const count = cart.reduce((sum, item) => sum + item.quantity, 0);
      setCartCount(count);
    } catch (error) {
      setCartCount(0);
    }

    // بررسی وضعیت لاگین
    const user = localStorage.getItem('user');
    setIsLoggedIn(!!user);
  }, [location]);

  const handleScroll = (e, sectionId) => {
    e.preventDefault();
    if (location.pathname === '/') {
      const section = document.getElementById(sectionId);
      if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      window.location.href = `/#${sectionId}`;
    }
  };

  const isActive = (path) => {
    if (path === '/') return location.pathname === '/';
    return location.pathname === path;
  };

  const handleLogout = () => {
    localStorage.removeItem('user');
    setIsLoggedIn(false);
    window.location.href = '/';
  };

  return (
    <>
      <header className="bg-[#0f111d] sticky top-0 z-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 md:h-20">
            
            {/* لوگو */}
            <Link to="/" className="flex items-center space-x-2 space-x-reverse group">
              <div className="text-2xl md:text-3xl font-extrabold text-white group-hover:text-[#00FF48] transition-colors duration-300">
                آموزشگاه
                <span className="text-[#00FF48] group-hover:text-white transition-colors duration-300"> کارپل</span>
              </div>
            </Link>

            {/* ناوبری دسکتاپ */}
            <nav className="hidden md:flex items-center space-x-6 space-x-reverse">
              <Link to="/" className={`px-3 py-2 rounded-lg transition-all duration-200 text-sm lg:text-base font-medium ${
                isActive('/') ? 'text-[#00FF48] bg-[#00FF48]/20' : 'text-gray-300 hover:text-[#00FF48] hover:bg-[#00FF48]/10'
              }`}>خانه</Link>
              <Link to="/courses" className={`px-3 py-2 rounded-lg transition-all duration-200 text-sm lg:text-base font-medium ${
                isActive('/courses') ? 'text-[#00FF48] bg-[#00FF48]/20' : 'text-gray-300 hover:text-[#00FF48] hover:bg-[#00FF48]/10'
              }`}>دوره‌ها</Link>
              <a href="#about" onClick={(e) => handleScroll(e, 'about')} className="px-3 py-2 rounded-lg text-gray-300 hover:text-[#00FF48] hover:bg-[#00FF48]/10 transition-all text-sm lg:text-base font-medium">درباره ما</a>
              
              <a href="#contact" onClick={(e) => handleScroll(e, 'contact')} className="px-3 py-2 rounded-lg text-gray-300 hover:text-[#00FF48] hover:bg-[#00FF48]/10 transition-all text-sm lg:text-base font-medium">تماس با ما</a>
            </nav>

            {/* بخش راست */}
            <div className="flex items-center space-x-3 md:space-x-5 space-x-reverse">
              
              {/* سبد خرید */}
              <Link to="/cart" className="relative group">
                <div className="p-2 rounded-full transition-colors duration-200">
                  <FiShoppingCart className="w-5 h-5 md:w-6 md:h-6 text-gray-300 group-hover:text-[#00FF48] transition-colors" />
                  {cartCount > 0 && (
                    <span className="absolute -top-1 -right-1 bg-[#00FF48] text-[#0f111d] text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center animate-pulse">
                      {cartCount}
                    </span>
                  )}
                </div>
              </Link>

              {/* ورود/ثبت‌نام */}
              <div className="hidden sm:flex items-center space-x-3 space-x-reverse">
                {isLoggedIn ? (
                  <button onClick={handleLogout} className="px-4 py-2 text-sm font-medium text-red-500 border-2 border-red-500 rounded-lg hover:bg-red-500 hover:text-white transition-all duration-300">
                    خروج
                  </button>
                ) : (
                  <>
                    <Link to="/login" className="px-6 ml-1 py-2.5 text-sm font-medium text-[#00FF48] border-2 border-[#00FF48] rounded-lg hover:bg-[#00FF48] hover:text-[#0f111d] transition-all duration-300">
                      ورود
                    </Link>
                    <Link to="/register" className="px-8 py-2.5 text-sm font-medium text-[#0f111d] bg-[#00FF48] rounded-lg hover:shadow-lg hover:shadow-[#00FF48]/30 hover:scale-105 transition-all duration-300">
                      ثبت‌نام
                    </Link>
                  </>
                )}
              </div>

              {/* منو موبایل */}
              <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="md:hidden p-2 rounded-lg hover:bg-[#00FF48]/20 transition-colors">
                {isMobileMenuOpen ? <FiX className="w-6 h-6 text-gray-300" /> : <FiMenu className="w-6 h-6 text-gray-300" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* منوی موبایل */}
      <div className={`fixed inset-0 z-[999] transition-all duration-300 ${isMobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}`}>
        <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" onClick={() => setIsMobileMenuOpen(false)} />
        <div className={`absolute top-0 left-0 h-full w-[80%] max-w-sm bg-[#0f111d] shadow-2xl transition-all duration-300 transform ${isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'}`}>
          <div className="flex items-center justify-between p-4 border-b border-[#00FF48]/20">
            <Link to="/" className="text-xl font-bold text-white" onClick={() => setIsMobileMenuOpen(false)}>
              آموزشگاه <span className="text-[#00FF48]">کارپل</span>
            </Link>
            <button onClick={() => setIsMobileMenuOpen(false)} className="p-2 rounded-lg hover:bg-[#00FF48]/20 transition-colors">
              <FiX className="w-6 h-6 text-gray-300" />
            </button>
          </div>
          <nav className="flex flex-col p-4 space-y-2">
            <Link to="/" className={`block w-full text-right px-4 py-3 rounded-lg transition-all duration-200 ${
              isActive('/') ? 'text-[#00FF48] bg-[#00FF48]/20' : 'text-gray-300 hover:bg-[#00FF48]/10 hover:text-[#00FF48]'
            }`} onClick={() => setIsMobileMenuOpen(false)}>خانه</Link>
            <a href="#about" onClick={(e) => { handleScroll(e, 'about'); setIsMobileMenuOpen(false); }} className="block w-full text-right px-4 py-3 rounded-lg text-gray-300 hover:bg-[#00FF48]/10 hover:text-[#00FF48] transition-all">درباره ما</a>
            
            <a href="#contact" onClick={(e) => { handleScroll(e, 'contact'); setIsMobileMenuOpen(false); }} className="block w-full text-right px-4 py-3 rounded-lg text-gray-300 hover:bg-[#00FF48]/10 hover:text-[#00FF48] transition-all">تماس با ما</a>
            <Link to="/courses" className={`block w-full text-right px-4 py-3 rounded-lg transition-all duration-200 ${
              isActive('/courses') ? 'text-[#00FF48] bg-[#00FF48]/20' : 'text-gray-300 hover:bg-[#00FF48]/10 hover:text-[#00FF48]'
            }`} onClick={() => setIsMobileMenuOpen(false)}>دوره‌ها</Link>
            <div className="border-t border-[#00FF48]/20 my-4"></div>
            {isLoggedIn ? (
              <button onClick={handleLogout} className="w-full text-center px-4 py-3 text-sm font-medium text-red-500 border-2 border-red-500 rounded-lg hover:bg-red-500 hover:text-white transition-all">خروج</button>
            ) : (
              <>
                <Link to="/login" className="w-full text-center px-4 py-3 text-sm font-medium text-[#00FF48] border-2 border-[#00FF48] rounded-lg hover:bg-[#00FF48] hover:text-[#0f111d] transition-all" onClick={() => setIsMobileMenuOpen(false)}>ورود</Link>
                <Link to="/register" className="w-full text-center px-4 py-3 text-sm font-medium text-[#0f111d] bg-[#00FF48] rounded-lg hover:shadow-lg transition-all" onClick={() => setIsMobileMenuOpen(false)}>ثبت‌نام</Link>
              </>
            )}
          </nav>
        </div>
      </div>
    </>
  );
};

export default Header;