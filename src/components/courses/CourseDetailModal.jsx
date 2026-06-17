import { FiX, FiShoppingCart, FiClock, FiUsers, FiStar, FiCheck, FiBookOpen, FiAward } from 'react-icons/fi';

const CourseDetailModal = ({ course, isOpen, onClose, onAddToCart }) => {
  if (!isOpen || !course) return null;

  return (
    <div className="fixed inset-0 z-[999] flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" onClick={onClose} />
      <div className="relative bg-[#0f111d] border-2 border-[#00FF48] rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto shadow-2xl shadow-[#00FF48]/10 animate-slideDown">
        <button onClick={onClose} className="absolute hover:cursor-pointer top-4 left-4 p-2 rounded-full bg-[#080a16] hover:bg-[#00FF48]/20 transition-colors z-10 border border-[#00FF48]/30 group">
          <FiX className="w-6 h-6 text-[#00FF48] group-hover:rotate-90 transition-transform duration-300" />
        </button>
        <div className="p-6 md:p-8">
          <div className="flex flex-col md:flex-row gap-6 mb-6">
            <div className="w-full md:w-48 h-48 bg-[#080a16] border border-[#00FF48]/30 rounded-xl flex items-center justify-center p-4 flex-shrink-0">
              <img src={course.image} alt={course.title} className="w-full h-full object-contain" />
            </div>
            <div className="flex-1">
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">{course.title}</h2>
              <div className="flex flex-wrap gap-2 mb-3">
                {course.tags && course.tags.map((tag, index) => (
                  <span key={index} className="px-3 py-1 text-xs bg-[#00FF48]/10 text-[#00FF48] border border-[#00FF48]/30 rounded-full">#{tag}</span>
                ))}
              </div>
              <p className="text-gray-400 text-sm mb-4 leading-relaxed">{course.description}</p>
              <div className="flex flex-wrap gap-4 text-sm text-gray-400">
                <span className="flex items-center gap-1.5 bg-[#080a16] px-3 py-1.5 rounded-lg border border-[#00FF48]/10"><FiClock className="text-[#00FF48]" />{course.duration}</span>
                <span className="flex items-center gap-1.5 bg-[#080a16] px-3 py-1.5 rounded-lg border border-[#00FF48]/10"><FiUsers className="text-[#00FF48]" />{course.students} دانشجو</span>
                <span className="flex items-center gap-1.5 bg-[#080a16] px-3 py-1.5 rounded-lg border border-[#00FF48]/10"><FiStar className="text-yellow-400" />{course.rating} / 5</span>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 p-4 bg-[#080a16] rounded-xl mb-6 border border-[#00FF48]/10">
            <div className="text-center"><p className="text-xs text-gray-500 mb-1"> مدرس</p><p className="text-white font-medium">{course.instructor}</p></div>
            <div className="text-center"><p className="text-xs text-gray-500 mb-1"> سطح</p>
              <span className={`inline-block px-3 py-1 text-xs font-semibold rounded-full ${course.level === 'پیشرفته' ? 'bg-red-500/20 text-red-400 border border-red-500/30' : course.level === 'متوسط' ? 'bg-yellow-500/20 text-yellow-400 border border-yellow-500/30' : 'bg-green-500/20 text-green-400 border border-green-500/30'}`}>{course.level}</span>
            </div>
            <div className="text-center"><p className="text-xs text-gray-500 mb-1"> نوع</p>
              <span className="inline-block px-3 py-1 text-xs font-semibold rounded-full bg-[#00FF48]/20 text-[#00FF48] border border-[#00FF48]/30">{course.type === 'frontend' ? 'فرانت‌اند' : course.type === 'backend' ? 'بک‌اند' : 'UI/UX'}</span>
            </div>
          </div>

          <div className="mb-6">
            <h3 className="text-lg font-bold text-white mb-3 flex items-center gap-2"><FiBookOpen className="text-[#00FF48]" />آنچه یاد می‌گیرید:</h3>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
              {course.whatYouLearn && course.whatYouLearn.map((item, index) => (
                <li key={index} className="flex items-center gap-2 text-gray-300 text-sm p-2 rounded-lg hover:bg-[#00FF48]/5 transition-colors">
                  <FiCheck className="text-[#00FF48] flex-shrink-0 w-4 h-4" />{item}
                </li>
              ))}
            </ul>
          </div>

          <div className="flex items-center gap-3 p-3 bg-[#00FF48]/5 border border-[#00FF48]/20 rounded-xl mb-6">
            <FiAward className="text-[#00FF48] w-6 h-6 flex-shrink-0" />
            <div><p className="text-white text-sm font-medium">دریافت گواهینامه معتبر</p><p className="text-gray-500 text-xs">پس از اتمام دوره، گواهینامه دریافت خواهید کرد</p></div>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-6 border-t border-[#00FF48]/20">
            <div className="text-center sm:text-right">
              <p className="text-3xl font-bold text-[#00FF48]">{course.price.toLocaleString()} <span className="text-sm text-gray-400 mr-1">تومان</span></p>
              <p className="text-xs text-gray-500 mt-1">قیمت نهایی دوره</p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
              <button onClick={() => { onAddToCart(course); onClose(); }} className="flex hover:cursor-pointer items-center justify-center gap-2 flex-1 sm:flex-none px-6 py-3 bg-[#00FF48] text-[#0f111d] font-bold rounded-xl hover:shadow-lg hover:shadow-[#00FF48]/30 hover:scale-105 transition-all duration-300">
                <FiShoppingCart className="w-5 h-5" />افزودن به سبد خرید
              </button>
              <button onClick={() => { onAddToCart(course); onClose(); window.location.href = '/cart'; }} className=" hover:cursor-pointer flex-1 sm:flex-none px-6 py-3 border-2 border-[#00FF48] text-[#00FF48] font-bold rounded-xl hover:bg-[#00FF48] hover:text-[#0f111d] transition-all duration-300 hover:shadow-lg hover:shadow-[#00FF48]/20">
                خرید مستقیم
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseDetailModal;