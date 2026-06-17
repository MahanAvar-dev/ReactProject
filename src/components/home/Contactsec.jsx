import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaClock, FaWhatsapp, FaTelegramPlane ,FaGithub,FaInstagram} from 'react-icons/fa';
import { FiSend } from 'react-icons/fi';
import { SiGmail } from "react-icons/si";
import { useState } from 'react';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  const contactInfo = [
    { icon: FaMapMarkerAlt, title: 'آدرس', value: 'مازندران ،ساری ، راهبند ، اول پژمان' },
    { icon: FaPhone, title: 'تلفن', value: '011-123456' },
    { icon: FaEnvelope, title: 'ایمیل', value: 'mahanavar22@gmail.com' },
    { icon: FaClock, title: 'ساعت کاری', value: 'شنبه تا پنجشنبه ۹ الی ۱۸' },
  ];

  return (
    <section id="contact" className="py-20 bg-[#0f111d]">
      <div className="container mx-auto px-4">
        
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            تماس با <span className="text-[#00FF48]">ما</span>
          </h2>
          <div className="w-20 h-1 bg-[#00FF48] rounded-full mx-auto"></div>
          <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
            برای اطلاعات بیشتر، مشاوره و ثبت‌نام با ما در تماس باشید
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          
          {/* اطلاعات تماس */}
          <div className="lg:col-span-1 lg:space-y-2">
            {contactInfo.map((item, index) => (
              <div key={index} className="bg-[#080a16] p-5 mt-2 lg:mt-0 rounded-xl border border-[#00FF48]/20 hover:border-[#00FF48] transition-all duration-300 group cursor-pointer">
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-[#00FF48]/10 rounded-lg group-hover:bg-[#00FF48] transition-colors duration-300">
                    <item.icon className="w-5 h-5 text-[#00FF48] group-hover:text-[#0f111d] transition-colors duration-300" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-500">{item.title}</p>
                    <p className="text-white text-sm group-hover:text-[#00FF48] transition-colors duration-300">{item.value}</p>
                  </div>
                </div>
              </div>
            ))}

            {/* شبکه‌های اجتماعی */}
            <div className="bg-[#080a16] p-5 rounded-xl border mt-2 lg:mt-0  border-[#00FF48]/20">
              <p className="text-sm text-gray-400 mb-3">ارتباط سریع:</p>
              <div className="flex gap-3">
                <a href="https://wa.me/09333822413" className="p-2.5 bg-[#00FF48]/10 rounded-lg hover:bg-[#00FF48] transition-colors duration-300 group">
                  <FaWhatsapp className="w-5 h-5 text-[#00FF48] group-hover:text-[#0f111d] transition-colors duration-300" />
                </a>
                <a href="https://t.me/Mahan-AvR" className="p-2.5 bg-[#00FF48]/10 rounded-lg hover:bg-[#00FF48] transition-colors duration-300 group">
                  <FaTelegramPlane className="w-5 h-5 text-[#00FF48] group-hover:text-[#0f111d] transition-colors duration-300" />
                </a>
                <a href="mailto:avarmahan22@gmail.com" className="p-2.5 bg-[#00FF48]/10 rounded-lg hover:bg-[#00FF48] transition-colors duration-300 group">
                  <SiGmail className="w-5 h-5 text-[#00FF48] group-hover:text-[#0f111d] transition-colors duration-300" />
                </a>  
                <a href="https://github.com/MahanAvar-dev" className="p-2.5 bg-[#00FF48]/10 rounded-lg hover:bg-[#00FF48] transition-colors duration-300 group">
                  <FaGithub  className="w-5 h-5 text-[#00FF48] group-hover:text-[#0f111d] transition-colors duration-300" />
                </a>
                <a href="https://instagram.com/avar-mahan" className="p-2.5 bg-[#00FF48]/10 rounded-lg hover:bg-[#00FF48] transition-colors duration-300 group">
                  <FaInstagram className="w-5 h-5 text-[#00FF48] group-hover:text-[#0f111d] transition-colors duration-300" />
                </a>
              </div>
            </div>
          </div>

          {/* فرم تماس */}
          <div className="lg:col-span-2">
            <form onSubmit={handleSubmit} className="bg-[#080a16] p-6 md:p-8 rounded-2xl border-2 border-[#00FF48]/20">
              <h3 className="text-xl font-bold text-white mb-6">ارسال پیام</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <div>
                  <label className="text-sm text-gray-400 block mb-2">نام کامل</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-[#0f111d] border border-[#00FF48]/20 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-[#00FF48] transition-colors"
                    placeholder="نام شما"
                  />
                </div>
                <div>
                  <label className="text-sm text-gray-400 block mb-2">ایمیل</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-[#0f111d] border border-[#00FF48]/20 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-[#00FF48] transition-colors"
                    placeholder="example@email.com"
                  />
                </div>
              </div>

              <div className="mb-4">
                <label className="text-sm text-gray-400 block mb-2">پیام</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="4"
                  className="w-full px-4 py-3 max-h-50 min-h-40 bg-[#0f111d] border border-[#00FF48]/20 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-[#00FF48] transition-colors"
                  placeholder="پیام شما..."
                />
              </div>

              <button
                type="submit"
                className="w-full py-3.5 hover:cursor-pointer bg-[#00FF48] text-[#0f111d] font-bold rounded-xl hover:shadow-lg hover:shadow-[#00FF48]/30 hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2"
              >
                <FiSend className="w-5 h-5" />
                {submitted ? '✅ پیام ارسال شد!' : 'ارسال پیام'}
              </button>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ContactSection;