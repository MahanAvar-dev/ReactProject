import { Link } from 'react-router-dom';
import Slider from './Slider';
import { FiArrowLeft, FiPlay } from 'react-icons/fi';
import { FaGripfire } from "react-icons/fa"
const HeroSection = ({courseslength}) => {
  return (
  <section className="relative bg-[#0f111d] min-h-[80vh] flex items-center justify-center overflow-hidden border-b border-[#00FF48]/30">
      
      {/* المان‌های دکوری */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#00FF48]/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#00FF48]/5 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col items-center justify-center text-center max-w-4xl mx-auto">
          
          {/* برچسب */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-[#00FF48]/10 border border-[#00FF48]/30 rounded-full text-[#00FF48] text-xs font-medium mb-6 animate-pulse-slow">
            <FaGripfire className="w-4 h-4" />
            دوره‌های جدید
          </div>
          
          {/* عنوان */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            به <span className="text-[#00FF48] relative">
              آموزشگاه کارپل
              <span className="absolute -bottom-2 right-0 w-full h-1 bg-[#00FF48] rounded-full"></span>
            </span> خوش آمدید
          </h1>
          
          {/* توضیحات */}
          <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto leading-relaxed">
            یادگیری را از امروز شروع کنید و آینده خود را با بهترین دوره‌های آموزشی بسازید
          </p>
          
          {/* دکمه‌ها */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/courses" className="group px-8 py-3.5 bg-[#00FF48] text-[#0f111d] font-bold rounded-xl hover:shadow-xl hover:shadow-[#00FF48]/30 hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2">
              شروع یادگیری
              <FiArrowLeft className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link to="/courses" className="group px-8 py-3.5 border-2 border-[#00FF48] text-[#00FF48] rounded-xl hover:bg-[#00FF48] hover:text-[#0f111d] transition-all duration-300 flex items-center justify-center gap-2">
              مشاهده دوره‌ها
            </Link>
          </div>

          {/* آمار */}
          <div className="flex flex-wrap gap-8 mt-12 justify-center">
            <div>
              <p className="text-3xl font-bold text-[#00FF48]">+10</p>
              <p className="text-xs text-gray-500">دوره آموزشی</p>
            </div>
            <div className="w-px h-12 bg-[#00FF48]/20"></div>
            <div>
              <p className="text-3xl font-bold text-[#00FF48]">+200</p>
              <p className="text-xs text-gray-500">دانشجو</p>
            </div>
            <div className="w-px h-12 bg-[#00FF48]/20"></div>
            <div>
              <p className="text-3xl font-bold text-[#00FF48]">4.5</p>
              <p className="text-xs text-gray-500">میانگین امتیاز</p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default HeroSection;