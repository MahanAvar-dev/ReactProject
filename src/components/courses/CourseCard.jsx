import { FiShoppingCart, FiEye, FiClock, FiUsers, FiStar } from 'react-icons/fi';

const CourseCard = ({ course, onViewDetails, onAddToCart }) => {
  return (
    <div className="bg-[#0f111d] border-2 border-[#00FF48]/20 rounded-xl overflow-hidden hover:border-[#00FF48] hover:shadow-2xl hover:shadow-[#00FF48]/10 hover:-translate-y-2 transition-all duration-300 group">
      
      {/* بخش تصویر */}
      <div className="h-48 bg-gradient-to-br from-[#00FF48]/10 to-[#00FF48]/5 flex items-center justify-center p-8 relative overflow-hidden">
        <img src={course.image} alt={course.title} className="w-24 h-24 object-contain group-hover:scale-110 transition-transform duration-500" />
        <span className={`absolute top-3 right-3 px-3 py-1 text-xs font-semibold rounded-full border backdrop-blur-sm ${
          course.level === 'پیشرفته' ? 'bg-red-500/20 text-red-400 border-red-500/30' :
          course.level === 'متوسط' ? 'bg-yellow-500/20 text-yellow-400 border-yellow-500/30' :
          'bg-green-500/20 text-green-400 border-green-500/30'
        }`}>{course.level}</span>
        <span className="absolute top-3 left-3 px-3 py-1 text-xs font-semibold rounded-full bg-[#00FF48]/20 text-[#00FF48] border border-[#00FF48]/30 backdrop-blur-sm">
          {course.type === 'frontend' ? 'فرانت‌اند' : course.type === 'backend' ? 'بک‌اند' : 'UI/UX'}
        </span>
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#00FF48] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      </div>

      {/* بخش محتوا */}
      <div className="p-5">
        <h3 className="text-lg font-bold text-white mb-2 line-clamp-1 group-hover:text-[#00FF48] transition-colors duration-300">{course.title}</h3>
        <p className="text-gray-400 text-sm mb-3 line-clamp-2 leading-relaxed">{course.description}</p>
        <div className="flex items-center gap-2 text-xs text-gray-500 mb-3">
          <span className="text-lg"></span>
          <span>{course.instructor}</span>
        </div>

        <div className="flex items-center justify-between text-xs text-gray-400 mb-4 pb-3 border-b border-[#00FF48]/10">
          <span className="flex items-center gap-1.5"><FiClock className="text-[#00FF48] w-4 h-4" />{course.duration}</span>
          <span className="flex items-center gap-1.5"><FiUsers className="text-[#00FF48] w-4 h-4" />{course.students}</span>
          <span className="flex items-center gap-1.5"><FiStar className="text-yellow-400 w-4 h-4" />{course.rating}</span>
        </div>

        <div className="flex items-center justify-between">
          <div>
            <span className="text-xl font-bold text-[#00FF48]">{course.price.toLocaleString()}</span>
            <span className="text-xs text-gray-500 mr-1">تومان</span>
          </div>
          <div className="flex gap-2">
            <button onClick={() => onAddToCart(course)} className="px-8 w-20 h-10 hover:cursor-pointer bg-[#00FF48]/10 hover:bg-[#00FF48] text-[#00FF48] hover:text-[#0f111d] rounded-lg transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-[#00FF48]/20 group/btn" title="افزودن به سبد خرید">
              <FiShoppingCart className="w-5 h-5 group-hover/btn:rotate-12 transition-transform" />
            </button>
            <button onClick={() => onViewDetails(course)} className=" w-20 h-10 hover:cursor-pointer border border-[#00FF48] text-[#00FF48] hover:bg-[#00FF48] hover:text-[#0f111d] rounded-lg transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-[#00FF48]/20" title="مشاهده جزییات">
              {/* <FiEye className="w-5 h-5" /> */}
              جزییات 
            </button>
          </div>
        </div>

        <div className="flex flex-wrap gap-1.5 mt-3 pt-3 border-t border-[#00FF48]/5">
          {course.tags && course.tags.slice(0, 3).map((tag, index) => (
            <span key={index} className="px-2 py-0.5 text-[10px] bg-[#00FF48]/5 text-gray-500 rounded-full border border-[#00FF48]/10">#{tag}</span>
          ))}
          {course.tags && course.tags.length > 3 && (
            <span className="px-2 py-0.5 text-[10px] text-gray-500">+{course.tags.length - 3}</span>
          )}
        </div>
      </div>
    </div>
  );
};

export default CourseCard;