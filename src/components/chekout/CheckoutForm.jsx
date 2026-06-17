import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FiUser, FiMail, FiPhone, FiMapPin, FiCreditCard, FiCheck } from 'react-icons/fi';

const CheckoutForm = ({ cartItems, total, discount, shipping, finalTotal }) => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    fullName: '', email: '', phone: '', address: '', city: '', postalCode: '', paymentMethod: 'online'
  });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setError('');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.fullName || !formData.email || !formData.phone || !formData.address || !formData.city) {
      setError('لطفاً تمام فیلدهای ضروری را پر کنید');
      return;
    }
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSuccess(true);
      localStorage.removeItem('cart');
      setTimeout(() => navigate('/'), 3000);
    }, 2000);
  };

  if (success) {
    return (
      <div className="text-center py-12">
        <div className="text-7xl mb-4 animate-bounce">✅</div>
        <h2 className="text-2xl font-bold text-white mb-2">پرداخت با موفقیت انجام شد!</h2>
        <p className="text-gray-400 mb-4">سفارش شما ثبت شد و به زودی تایید می‌شود.</p>
        <p className="text-gray-500 text-sm">در حال انتقال به صفحه اصلی...</p>
        <div className="w-16 h-1 bg-[#00FF48] mx-auto mt-4 rounded-full animate-pulse"></div>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      {error && <div className="bg-red-500/10 border border-red-500/30 text-red-400 text-sm p-3 rounded-xl">{error}</div>}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="text-sm text-gray-400 block mb-2">نام کامل *</label>
          <div className="relative">
            <FiUser className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500" />
            <input type="text" name="fullName" value={formData.fullName} onChange={handleChange} required className="w-full pr-10 pl-4 py-3 bg-[#080a16] border border-[#00FF48]/20 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-[#00FF48] transition-colors" placeholder="نام و نام خانوادگی" />
          </div>
        </div>
        <div>
          <label className="text-sm text-gray-400 block mb-2">ایمیل *</label>
          <div className="relative">
            <FiMail className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500" />
            <input type="email" name="email" value={formData.email} onChange={handleChange} required className="w-full pr-10 pl-4 py-3 bg-[#080a16] border border-[#00FF48]/20 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-[#00FF48] transition-colors" placeholder="example@email.com" />
          </div>
        </div>
      </div>
      <div>
        <label className="text-sm text-gray-400 block mb-2">شماره تماس *</label>
        <div className="relative">
          <FiPhone className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500" />
          <input type="tel" name="phone" value={formData.phone} onChange={handleChange} required className="w-full py-3 bg-[#080a16] px-10 border border-[#00FF48]/20 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-[#00FF48] transition-colors" placeholder="09111234567" dir='rtl' />
        </div>
      </div>
      <div>
        <label className="text-sm text-gray-400 block mb-2">آدرس *</label>
        <div className="relative">
          <FiMapPin className="absolute right-3 top-3 text-gray-500" />
          <textarea name="address" value={formData.address} onChange={handleChange} required rows="3" className="w-full min-h-40 max-h-60 pr-10 pl-4 py-3 bg-[#080a16] border border-[#00FF48]/20 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-[#00FF48] transition-colors" placeholder="آدرس کامل" />
        </div>
      </div>
      <div className="grid grid-cols-2 gap-4">
        <div><label className="text-sm text-gray-400 block mb-2">شهر *</label><input type="text" name="city" value={formData.city} onChange={handleChange} required className="w-full px-4 py-3 bg-[#080a16] border border-[#00FF48]/20 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-[#00FF48] transition-colors" placeholder="تهران" /></div>
        <div><label className="text-sm text-gray-400 block mb-2">کد پستی</label><input type="text" name="postalCode" value={formData.postalCode} onChange={handleChange} className="w-full px-4 py-3 bg-[#080a16] border border-[#00FF48]/20 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-[#00FF48] transition-colors" placeholder="۱۲۳۴۵۶۷۸۹۰" /></div>
      </div>
      <div>
        <label className="text-sm text-gray-400 block mb-2">روش پرداخت</label>
        <div className="grid grid-cols-3 gap-3">
          {[
            { value: 'online', label: ' پرداخت آنلاین' },
            { value: 'card', label: ' کارت به کارت' },
            { value: 'wallet', label: ' کیف پول' }
          ].map(method => (
            <button key={method.value} type="button" onClick={() => setFormData({ ...formData, paymentMethod: method.value })} className={`px-4 py-3 rounded-xl border-2 transition-all duration-300 ${formData.paymentMethod === method.value ? 'border-[#00FF48] bg-[#00FF48]/10 text-white' : 'border-gray-700 text-gray-400 hover:border-[#00FF48]'}`}>
              <span className="text-sm">{method.label}</span>
            </button>
          ))}
        </div>
      </div>
      <div className="bg-[#080a16] rounded-xl p-4 space-y-2 border border-[#00FF48]/10">
        <h4 className="text-white font-bold mb-3 flex items-center gap-2"><FiCreditCard className="text-[#00FF48]" />خلاصه سفارش</h4>
        <div className="space-y-2">
          {cartItems.map((item) => (
            <div key={item.id} className="flex justify-between text-sm py-1 border-b border-[#00FF48]/5">
              <span className="text-gray-400">{item.title} × {item.quantity}</span>
              <span className="text-white">{(item.price * item.quantity).toLocaleString()} تومان</span>
            </div>
          ))}
        </div>
        <div className="border-t border-[#00FF48]/10 pt-3 space-y-1">
          <div className="flex justify-between text-sm"><span className="text-gray-400">مجموع</span><span className="text-white">{total.toLocaleString()} تومان</span></div>
          {discount > 0 && <div className="flex justify-between text-sm"><span className="text-gray-400">تخفیف</span><span className="text-[#00FF48]">-{discount.toLocaleString()} تومان</span></div>}
          <div className="flex justify-between text-sm"><span className="text-gray-400">ارسال</span><span className="text-white">{shipping === 0 ? 'رایگان' : `${shipping.toLocaleString()} تومان`}</span></div>
          <div className="border-t border-[#00FF48]/10 pt-2 flex justify-between"><span className="text-white font-bold">مجموع نهایی</span><span className="text-[#00FF48] font-bold text-lg">{finalTotal.toLocaleString()} تومان</span></div>
        </div>
      </div>
      <button type="submit" disabled={loading} className="w-full hover:cursor-pointer py-3.5 bg-[#00FF48] text-[#0f111d] font-bold rounded-xl hover:shadow-lg hover:shadow-[#00FF48]/30 hover:scale-105 transition-all duration-300 text-lg flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed">
        {loading ? <><span className="animate-spin"></span>در حال پردازش...</> : <><FiCheck className="w-6 h-6" />تایید و پرداخت</>}
      </button>
      <div className="flex items-center justify-center gap-6 text-xs text-gray-500">
        <span className="flex items-center gap-1"> پرداخت امن</span>
        <span className="w-1 h-1 bg-gray-600 rounded-full"></span>
        <span className="flex items-center gap-1"> گارانتی بازگشت وجه</span>
        <span className="w-1 h-1 bg-gray-600 rounded-full"></span>
        <span className="flex items-center gap-1"> پشتیبانی ۲۴/۷</span>
      </div>
    </form>
  );
};

export default CheckoutForm;