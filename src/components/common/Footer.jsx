import { Link } from 'react-router-dom';
import { FaMapMarkerAlt,FaWhatsapp , FaPhone, FaEnvelope, FaClock,FaGithub, FaInstagram, FaTelegram, FaYoutube, FaLinkedin, FaTwitter } from 'react-icons/fa';
import { SiGmail } from "react-icons/si";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#080a16] text-white border-t-4 border-[#00FF48]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          
          <div className="space-y-4">
            <h3 className="text-lg font-bold flex items-center gap-2">
              <span className="w-1 h-6 bg-[#00FF48] rounded-full"></span>
              ارتباط با ما
            </h3>
            <div className="space-y-3 text-gray-300 text-sm">
              <div className="flex items-start gap-3 group hover:text-[#00FF48] transition-colors cursor-pointer">
                <FaMapMarkerAlt className="text-[#00FF48] mt-1 group-hover:text-green-300 transition-colors" />
                <span>مازندران ،ساری ، راهبند ، اول پژمان</span>
              </div>
              <div className="flex items-center gap-3 group hover:text-[#00FF48] transition-colors cursor-pointer">
                <FaPhone className="text-[#00FF48] group-hover:text-green-300 transition-colors" />
                <span>011-1234567</span>
              </div>
              <div className="flex items-center gap-3 group hover:text-[#00FF48] transition-colors cursor-pointer">
                <FaEnvelope className="text-[#00FF48] group-hover:text-green-300 transition-colors" />
                <span>avarmahan22@gmail.com</span>
              </div>
              <div className="flex items-center gap-3 group hover:text-[#00FF48] transition-colors cursor-pointer">
                <FaClock className="text-[#00FF48] group-hover:text-green-300 transition-colors" />
                <span>شنبه تا پنجشنبه 9 الی 20</span>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-bold flex items-center gap-2">
              <span className="w-1 h-6 bg-[#00FF48] rounded-full"></span>
              شبکه‌های اجتماعی
            </h3>
            <div className="space-y-3">
              {[
                { icon: FaInstagram, name: 'اینستاگرام',href:"https://instagram.com/avar-mahan" },
                { icon: FaTelegram, name: 'تلگرام',href:"https://t.me/Mahan-AvR" },
                { icon: SiGmail, name: 'ایمیل',href:"mailto:avarmahan22@gmail.com" },
                { icon: FaGithub, name: 'گیت هاب' ,herf:"https://github.com/MahanAvar-dev"},
                { icon: FaWhatsapp, name: 'واتساپ',href:"https://wa.me/09333822413"},
              ].map((social, index) => (
                <a key={index} href={social.href} className="flex items-center gap-3 text-gray-300 hover:text-[#00FF48] transition-all group cursor-pointer">
                  <social.icon className="text-xl transition-colors group-hover:scale-110" />
                  <span className="text-sm group-hover:translate-x-1 transition-transform duration-200">{social.name}</span>
                </a>
              ))}
            </div>
          </div>

          {/* ستون ۴: خبرنامه */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold flex items-center gap-2">
              <span className="w-1 h-6 bg-[#00FF48] rounded-full"></span>
              آموزشگاه حرفه‌ای
            </h3>
            <p className="text-gray-300 text-sm leading-relaxed">
              ما با ارائه دوره‌های تخصصی و به‌روز، شما را برای ورود به بازار کار آماده می‌کنیم.
            </p>
            <div className="bg-[#0f111d]/50 rounded-lg p-4 lg:w-100 lg:mt-0 mt-2 w-[90%] backdrop-blur-sm border border-[#00FF48]/30">
              <p className="text-xs text-gray-400 mb-2"> عضویت در خبرنامه:</p>
              <div className="flex gap-2">
                <input type="email" placeholder="ایمیل شما" className="flex-1 px-3 py-2 text-sm bg-[#0f111d] border border-[#00FF48]/50 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-[#00FF48] transition-colors" />
                <button className="px-4 py-2 text-sm bg-[#00FF48] text-[#0f111d] font-bold rounded-lg hover:shadow-lg hover:scale-105 transition-all duration-300">
                  ثبت
                </button>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* فوتر پایینی */}
      <div className="border-t border-[#00FF48]/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-2">
            <p className="text-gray-400 text-sm text-center sm:text-right">
              © {currentYear} تمامی حقوق برای <span className="text-[#00FF48] font-bold">آموزشگاه کارپل </span> محفوظ است.
            </p>
            <div className="flex items-center gap-4 text-xs text-gray-500">
              <span>نسخه 1.0.0</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
