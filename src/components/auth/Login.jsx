import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FiMail, FiLock, FiEye, FiEyeOff, FiArrowRight } from 'react-icons/fi';
import { RxEnter } from "react-icons/rx";
const Login = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({ email: '', password: '' });
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setError('');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.email || !formData.password) {
      setError('لطفاً تمام فیلدها را پر کنید');
      return;
    }
    setLoading(true);
    setTimeout(() => {
      if (formData.email === 'admin@example.com' && formData.password === '123456') {
        localStorage.setItem('user', JSON.stringify({ email: formData.email, name: 'مدیر' }));
        navigate('/');
      } else {
        setError('ایمیل یا رمز عبور اشتباه است');
        setLoading(false);
      }
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-[#0f111d] flex items-center justify-center p-4">
      <div className="bg-[#0f111d] border-2 border-[#00FF48]/20 rounded-2xl p-8 max-w-md w-full">
        <div className="text-center mb-8">
          <div className="text-5xl mb-4 animate-float"><RxEnter className='mr-[42%] text-[#00FF48]' /></div>
          <h1 className="text-3xl font-bold text-white">ورود</h1>
          <p className="text-gray-400 text-sm mt-2">خوش آمدید! لطفاً وارد حساب کاربری خود شوید</p>
        </div>
        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label className="text-sm text-gray-400 block mb-2">ایمیل</label>
            <div className="relative">
              <FiMail className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500" />
              <input type="email" name="email" value={formData.email} onChange={handleChange} className="w-full pr-10 pl-4 py-3 bg-[#080a16] border border-[#00FF48]/20 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-[#00FF48] transition-colors" placeholder="example@email.com" />
            </div>
          </div>
          <div>
            <label className="text-sm text-gray-400 block mb-2">رمز عبور</label>
            <div className="relative">
              <FiLock className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500" />
              <input type={showPassword ? 'text' : 'password'} name="password" value={formData.password} onChange={handleChange} className="w-full pr-10 pl-12 py-3 bg-[#080a16] border border-[#00FF48]/20 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-[#00FF48] transition-colors" placeholder="********" />
              <button type="button" onClick={() => setShowPassword(!showPassword)} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-[#00FF48] transition-colors">
                {showPassword ? <FiEyeOff className="w-5 h-5" /> : <FiEye className="w-5 h-5" />}
              </button>
            </div>
          </div>
          {error && <div className="bg-red-500/10 border border-red-500/30 text-red-400 text-sm p-3 rounded-xl">{error}</div>}
          <div className="text-left"><Link to="/forgot-password" className="text-sm text-[#00FF48] hover:underline">رمز عبور را فراموش کرده‌اید؟</Link></div>
          <button type="submit" disabled={loading} className="w-full py-3.5 bg-[#00FF48] text-[#0f111d] font-bold rounded-xl hover:shadow-lg hover:shadow-[#00FF48]/30 hover:scale-105 transition-all duration-300 text-lg flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed">
            {loading ? <span className="animate-spin">⏳</span> : <><FiArrowRight className="w-5 h-5" />ورود</>}
          </button>
        </form>
        <div className="mt-6 text-center"><p className="text-gray-400 text-sm">حساب کاربری ندارید؟ <Link to="/register" className="text-[#00FF48] hover:underline font-medium">ثبت‌نام کنید</Link></p></div>
        <div className="mt-4 text-center"><Link to="/" className="text-gray-500 text-sm hover:text-[#00FF48] transition-colors">← بازگشت به صفحه اصلی</Link></div>
      </div>
    </div>
  );
};

export default Login;