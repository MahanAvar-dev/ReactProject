// components/SimpleParallax.jsx
import React from 'react';
import { LuGoal } from "react-icons/lu";
import { CiDiscount1 } from "react-icons/ci"
import { GrCertificate } from "react-icons/gr";
import paralexpic from '../assets/img/paralex.jpg'
const SimpleParallax = () => {
  return (
    <div className="relative w-full">
      {/* بخش پارالکس با تصویر ثابت */}
      <section className="relative min-h-[500px] md:min-h-[700px] flex items-center justify-center overflow-hidden">
        
        {/* تصویر پس‌زمینه ثابت */}
        <div 
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: `url(${paralexpic})`,
            backgroundAttachment: 'fixed',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
          }}
        >
          <div className="absolute inset-0 bg-black/10 backdrop-blur-sm"></div>
        </div>

        {/* محتوای اصلی */}
        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center font-bold  text-[#e1e1e1]">
          {/* آیکون یا نشان */}
          <div className="mb-8">
            <div className="inline-block p-4 rounded-full bg-white/10 backdrop-blur-md border border-white/20">
              <svg className="w-12 h-12 text-green-400" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
              </svg>
            </div>
          </div>

          {/* نقل قول */}
          <blockquote className="mb-8">
            <p className="text-2xl md:text-4xl lg:text-5xl font-light leading-relaxed">
              "آموزش، قدرتمندترین سلاحی است که
              <br />
              می‌توانید برای تغییر جهان از آن استفاده کنید."
            </p>
            <footer className="mt-6 text-lg md:text-xl text-green-400 font-semibold">
              — نلسون ماندلا
            </footer>
          </blockquote>

          <button 
            onClick={() => window.location.href = '/signup'}
            className="group relative inline-flex items-center gap-3 px-10 hover:cursor-pointer  py-4 bg-gradient-to-r from-green-400 via-green-700 to-green-400 text-black font-bold text-lg rounded-full shadow-2xl hover:scale-105 transition-all duration-300 hover:shadow-green-900/50"
          >
            <span>به ما بپیوندید</span>
            <svg style={{rotate:"-180deg"}}
              className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </button>

          {/* متن اضافی کوچک زیر دکمه */}
          <p className="mt-6 text-sm text-white/60">
            به جمع هزاران دانشجو بپیوندید
          </p>
        </div>
      </section>

      <section className="relative bg-[#0f111d] dark:bg-gray-900 py-16 z-10">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-[#00FF48] dark:ger mb-4">
            چرا به ما بپیوندید؟
          </h2>
          <p className="text-gray-300 dark:text-gray-300 mb-8">
            با عضویت در خبرنامه ما، به محتوای آموزشی ارزشمند و تخفیف‌های ویژه دسترسی پیدا کنید
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { icon:<LuGoal/> , title: 'محتوای رایگان', desc: 'دسترسی به مقالات و ویدیوهای آموزشی' },
              { icon:<CiDiscount1 /> , title: 'تخفیف ویژه', desc: 'کدهای تخفیف انحصاری برای دوره‌ها' },
              { icon:<GrCertificate /> , title: 'گواهی معتبر', desc: 'دریافت گواهی پایان دوره' }
            ].map((item, index) => (
              <div key={index} className="bg-[#080a16] dark:bg-gray-800 rounded-2xl p-6 shadow-lg">
                <div className="text-3xl mb-3 mr-[44%]">{item.icon}</div>
                <h3 className="font-bold text-green-500  mb-2">{item.title}</h3>
                <p className="text-sm text-gray-400">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default SimpleParallax;