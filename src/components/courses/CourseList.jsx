import { useState } from 'react';
import CourseCard from './CourseCard';
import CourseDetailModal from './CourseDetailModal';
import { FiSearch, FiFilter, FiShoppingCart } from 'react-icons/fi';
import { ImSad } from "react-icons/im";
const CourseList = ({ courses, onAddToCart, cartItems, onCartOpen }) => {
  const [levelFilter, setLevelFilter] = useState('all');
  const [typeFilter, setTypeFilter] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCourse, setSelectedCourse] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const levelOptions = [
    { value: 'all', label: 'همه سطح‌ها' },
    { value: 'مقدماتی', label: 'مقدماتی' },
    { value: 'متوسط', label: 'متوسط' },
    { value: 'پیشرفته', label: 'پیشرفته' }
  ];

  const typeOptions = [
    { value: 'all', label: 'همه نوع‌ها' },
    { value: 'frontend', label: 'فرانت‌اند' },
    { value: 'backend', label: 'بک‌اند' },
    { value: 'ui-ux', label: 'UI/UX' }
  ];

  const filteredCourses = courses.filter(course => {
    const matchLevel = levelFilter === 'all' || course.level === levelFilter;
    const matchType = typeFilter === 'all' || course.type === typeFilter;
    const matchSearch = course.title.includes(searchTerm) || 
                       course.description.includes(searchTerm) ||
                       course.instructor.includes(searchTerm);
    return matchLevel && matchType && matchSearch;
  });

  const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <div>
          <h2 className="text-2xl md:text-3xl font-bold text-white">دوره‌های آموزشی</h2>
          <p className="text-gray-400 text-sm mt-1">{filteredCourses.length} دوره فعال</p>
        </div>
      </div>

      <div className="bg-[#0f111d] border-2 border-[#00FF48]/20 rounded-xl p-4 md:p-6">
        <div className="flex flex-col md:flex-row gap-4">
          <div className="flex-1 relative">
            <FiSearch className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500" />
            <input type="text" placeholder="جستجوی دوره..." value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} className="w-full pr-10 pl-4 py-3 bg-[#080a16] border border-[#00FF48]/20 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-[#00FF48] transition-colors" />
          </div>
          <div className="w-full md:w-48 relative">
            <select value={levelFilter} onChange={(e) => setLevelFilter(e.target.value)} className="w-full px-4 py-3 bg-[#080a16] border border-[#00FF48]/20 rounded-xl text-white appearance-none cursor-pointer focus:outline-none focus:border-[#00FF48] transition-colors">
              {levelOptions.map(option => <option key={option.value} value={option.value}>{option.label}</option>)}
            </select>
            <FiFilter className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 pointer-events-none" />
          </div>
          <div className="w-full md:w-48 relative">
            <select value={typeFilter} onChange={(e) => setTypeFilter(e.target.value)} className="w-full px-4 py-3 bg-[#080a16] border border-[#00FF48]/20 rounded-xl text-white appearance-none cursor-pointer focus:outline-none focus:border-[#00FF48] transition-colors">
              {typeOptions.map(option => <option key={option.value} value={option.value}>{option.label}</option>)}
            </select>
            <FiFilter className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 pointer-events-none" />
          </div>
          {(levelFilter !== 'all' || typeFilter !== 'all' || searchTerm) && (
            <button onClick={() => { setLevelFilter('all'); setTypeFilter('all'); setSearchTerm(''); }} className="px-4 py-3 bg-[#00FF48]/10 text-[#00FF48] border border-[#00FF48]/30 rounded-xl hover:bg-[#00FF48] hover:text-[#0f111d] transition-all duration-300 whitespace-nowrap">پاک کردن فیلترها</button>
          )}
          <button onClick={onCartOpen} className="relative px-4 py-3 bg-[#00FF48]/10 border-2 border-[#00FF48] rounded-xl hover:bg-[#00FF48] hover:text-[#0f111d] transition-all duration-300 group">
            <FiShoppingCart className="w-5 h-5 text-[#00FF48] group-hover:text-[#0f111d]" />
            {totalItems > 0 && (
              <span className="absolute -top-2 -right-2 bg-[#00FF48] text-[#0f111d] text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center animate-pulse">{totalItems}</span>
            )}
          </button>
        </div>
      </div>

      {filteredCourses.length === 0 && (
        <div className="text-center py-16">
          <div className="text-6xl mb-4"><ImSad className='mr-[40%] lg:mr-[47.5%] text-[#00FF48]' /></div>
          <p className="text-gray-400 text-lg">هیچ دوره‌ای با این فیلترها پیدا نشد!</p>
          <button onClick={() => { setLevelFilter('all'); setTypeFilter('all'); setSearchTerm(''); }} className="mt-4 px-6 py-2 bg-[#00FF48]/10 text-[#00FF48] border border-[#00FF48]/30 rounded-lg hover:bg-[#00FF48] hover:text-[#0f111d] transition-all duration-300">نمایش همه دوره‌ها</button>
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
        {filteredCourses.map(course => (
          <CourseCard key={course.id} course={course} onViewDetails={() => { setSelectedCourse(course); setIsModalOpen(true); }} onAddToCart={onAddToCart} />
        ))}
      </div>

      <CourseDetailModal course={selectedCourse} isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} onAddToCart={onAddToCart} />
    </div>
  );
};

export default CourseList;