import { Link } from 'react-router-dom';
import { FiArrowLeft, FiClock, FiUsers, FiStar } from 'react-icons/fi';

const CoursesPreview = ({ courses, onAddToCart }) => {
  return (
    <section className="py-20 bg-[#0f111d] border-b border-[#00FF48]/30">
      <div className="container mx-auto px-4">
        
        <div className="flex items-center justify-between mb-12">
          <div>
            <h2 className="text-2xl mr-[40%] flex md:text-4xl font-bold mb-2 lg:mr-7">
              محبوب‌ترین <span className="text-[#00FF48]">دوره‌ها</span>
            </h2>
            <p className="text-gray-400 mr-8 hidden lg:block">دوره‌های پرفروش و محبوب آموزشگاه</p>
          </div>
          <Link to="/courses" className=" hidden lg:flex group flex items-center gap-2 ml-15 text-[#00FF48] hover:text-white transition-colors duration-300">
            مشاهده همه
            <FiArrowLeft className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {courses.map((course) => (
            <div key={course.id} className="bg-[#080a16] border-2 border-[#00FF48]/20 rounded-xl overflow-hidden hover:border-[#00FF48] hover:-translate-y-2 transition-all duration-300 group">
              
              <div className="h-40 bg-gradient-to-br from-[#00FF48]/10 to-[#00FF48]/5 flex items-center justify-center p-6 relative">
                <img src={course.image} alt={course.title} className="w-16 h-16 object-contain group-hover:scale-110 transition-transform duration-500" />
                <span className={`absolute top-2 right-2 px-2 py-0.5 text-[10px] font-semibold rounded-full border ${
                  course.level === 'پیشرفته' ? 'bg-red-500/20 text-red-400 border-red-500/30' :
                  course.level === 'متوسط' ? 'bg-yellow-500/20 text-yellow-400 border-yellow-500/30' :
                  'bg-green-500/20 text-green-400 border-green-500/30'
                }`}>
                  {course.level}
                </span>
              </div>

              <div className="p-4">
                <h3 className="text-white font-bold text-sm line-clamp-1 group-hover:text-[#00FF48] transition-colors">{course.title}</h3>
                <p className="text-xs text-gray-500 mt-1"> {course.instructor}</p>
                
                <div className="flex items-center justify-between text-xs text-gray-400 mt-3 pt-2 border-t border-[#00FF48]/10">
                  <span className="flex items-center gap-1"><FiClock className="text-[#00FF48]" />20h</span>
                  <span className="flex items-center gap-1"><FiUsers className="text-[#00FF48]" />156</span>
                  <span className="flex items-center gap-1"><FiStar className="text-yellow-400" />4.9</span>
                </div>

                <div className="flex items-center justify-between mt-3 pt-2 border-t border-[#00FF48]/10">
                  <span className="text-[#00FF48] font-bold text-sm">{course.price.toLocaleString()} تومان</span>
                  <button 
                    onClick={() => onAddToCart(course)}
                    className="px-6 py-2.5 text-xs hover:cursor-pointer bg-[#00FF48]/10 text-[#00FF48] border border-[#00FF48]/30 rounded-lg hover:bg-[#00FF48] hover:text-[#0f111d] transition-all duration-300"
                  >
                    خرید  
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default CoursesPreview;
