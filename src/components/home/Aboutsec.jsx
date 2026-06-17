import aboutuspic from '../assets/img/2474882.jpg'
import { FiAward, FiUsers, FiBookOpen, FiTrendingUp } from 'react-icons/fi';

const AboutSection = () => {
  const stats = [
    { icon: FiBookOpen, value: '+10', label: 'دوره آموزشی' },
    { icon: FiUsers, value: '+۲۰۰', label: 'دانشجو' },
    { icon: FiAward, value: '۴.۹', label: 'میانگین امتیاز' },
    { icon: FiTrendingUp, value: '۹۵٪', label: 'رضایت دانشجو' },
  ];

  return (
    <section id="about" className="py-20 bg-[#080a16]">
      <div className="container mx-auto px-4">
        
        <div className="flex flex-col lg:flex-row items-center gap-12">
          
          <div className="flex-1">
            <div className="relative">
              <div className="w-full h-90 rounded-2xl flex items-center justify-center overflow-hidden" style={{cornerShape:"scoop" ,borderRadius:"40px"}}>
                <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiMwMEZGNDgiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDM0djItSDI0di0yaDEyek0zNiAyNHYySDI0di0yaDEyeiIvPjwvZz48L2c+PC9zdmc+')] opacity-20"></div>
               <img src={aboutuspic} />
              </div>
              <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-[#00FF48] rounded-full opacity-20 blur-2xl"></div>
              <div className="absolute -top-4 -left-4 w-32 h-32 bg-[#00FF48] rounded-full opacity-10 blur-2xl"></div>
            </div>
          </div>

          {/* متن */}
          <div className="flex-1 text-center lg:text-right">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              درباره <span className="text-[#00FF48]">ما</span>
            </h2>
            <div className="w-20 h-1 bg-[#00FF48] rounded-full mx-auto lg:mx-0 mb-6"></div>
            
            <p className="text-gray-400 leading-relaxed mb-6 text-lg">
              ما یک آموزشگاه حرفه‌ای با سال‌ها تجربه در زمینه آموزش برنامه‌نویسی و طراحی وب هستیم. <br />
              با تیمی مجرب و متدهای آموزشی به‌روز، شما را برای ورود به بازار کار آماده می‌کنیم.
            </p>
            
            <p className="text-gray-400 leading-relaxed mb-8">
              هدف ما ارائه بهترین کیفیت آموزشی با استفاده از جدیدترین تکنولوژی‌های روز دنیا و 
              ایجاد فرصت‌های<br /> شغلی برای دانشجویان عزیز است.
            </p>

            {/* آمار */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-2xl mx-auto lg:mx-0">
              {stats.map((stat, index) => (
                <div key={index} className="bg-[#0f111d] p-4 rounded-xl border border-[#00FF48]/20 hover:border-[#00FF48] transition-all duration-300 hover:-translate-y-1">
                  <stat.icon className="w-6 h-6 text-[#00FF48] mx-auto mb-2" />
                  <p className="text-xl font-bold text-white">{stat.value}</p>
                  <p className="text-xs text-gray-500">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default AboutSection;