import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Mainall from '../layout/Mainall';
import { FiTrash2, FiPlus, FiMinus, FiArrowRight, FiShoppingCart, FiGift, FiTruck, FiShield } from 'react-icons/fi';

const CartPage = () => {
  const navigate = useNavigate();
  const [cartItems, setCartItems] = useState(() => {
    try {
      const item = window.localStorage.getItem('cart');
      return item ? JSON.parse(item) : [];
    } catch (error) {
      return [];
    }
  });

  const saveToLocalStorage = (items) => {
    try {
      window.localStorage.setItem('cart', JSON.stringify(items));
    } catch (error) {
      console.log(error);
    }
  };

  const updateQuantity = (id, change) => {
    setCartItems(prev => {
      const item = prev.find(item => item.id === id);
      if (!item) return prev;
      if (item.quantity + change <= 0) {
        const newItems = prev.filter(item => item.id !== id);
        saveToLocalStorage(newItems);
        return newItems;
      }
      const newItems = prev.map(item => item.id === id ? { ...item, quantity: item.quantity + change } : item);
      saveToLocalStorage(newItems);
      return newItems;
    });
  };

  const removeFromCart = (id) => {
    setCartItems(prev => {
      const newItems = prev.filter(item => item.id !== id);
      saveToLocalStorage(newItems);
      return newItems;
    });
  };

  const clearCart = () => {
    if (window.confirm('آیا از پاک کردن همه آیتم‌ها مطمئن هستید؟')) {
      setCartItems([]);
      saveToLocalStorage([]);
    }
  };

  const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);
  const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const discount = subtotal > 1000000 ? Math.floor(subtotal * 0.1) : 0;
  const shipping = subtotal > 500000 ? 0 : 50000;
  const finalTotal = subtotal - discount + shipping;

  if (cartItems.length === 0) {
    return (
      <Mainall>
        <div className="container mx-auto px-4 py-8">
          <div className="bg-[#0f111d] border-2 border-[#00FF48]/20 rounded-2xl p-12 text-center">
            <div className="text-8xl mb-6 opacity-50">🛒</div>
            <h2 className="text-2xl font-bold text-white mb-3">سبد خرید شما خالی است</h2>
            <p className="text-gray-400 mb-8 max-w-md mx-auto">هنوز دوره‌ای به سبد خرید خود اضافه نکرده‌اید.</p>
            <Link to="/courses" className="inline-flex items-center gap-2 px-8 py-3 bg-[#00FF48] text-[#0f111d] font-bold rounded-xl hover:shadow-lg hover:shadow-[#00FF48]/30 hover:scale-105 transition-all duration-300">مشاهده دوره‌ها <FiArrowRight className="w-5 h-5" /></Link>
          </div>
        </div>
      </Mainall>
    );
  }

  return (
    <Mainall>
      <div className="container mx-auto px-4 py-8">
        <div className="flex items-center justify-between mb-8">
          <div><h1 className="text-3xl md:text-4xl font-bold text-white mb-2 mr-5">سبد خرید</h1><p className="mr-5 text-gray-400 text-lg">{totalItems} آیتم در سبد خرید شما</p></div>
          <Link to="/courses" className="flex items-center gap-2 text-[#00FF48] hover:text-white transition-colors duration-300 ml-10"><FiArrowRight className="w-5 h-5" />بازگشت به دوره‌ها</Link>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-4">
            <div className="hidden md:grid grid-cols-12 gap-4 px-4 py-3 bg-[#080a16] rounded-xl border border-[#00FF48]/10 text-xs text-gray-500 font-medium">
              <div className="col-span-5">محصول</div><div className="col-span-3 text-center">قیمت</div><div className="col-span-2 text-center">تعداد</div><div className="col-span-2 text-left">مجموع</div>
            </div>
            {cartItems.map((item) => (
              <div key={item.id} className="bg-[#0f111d] border border-[#00FF48]/20 rounded-xl p-4 hover:border-[#00FF48]/50 transition-all duration-300">
                <div className="flex flex-col md:flex-row md:items-center gap-4">
                  <div className="flex items-center gap-4 flex-1">
                    <div className="w-20 h-20 bg-[#080a16] rounded-xl flex items-center justify-center p-3 border border-[#00FF48]/10 flex-shrink-0">
                      <img src={item.image} alt={item.title} className="w-full h-full object-contain" />
                    </div>
                    <div className="min-w-0">
                      <h3 className="text-white font-bold text-base line-clamp-1">{item.title}</h3>
                      <p className="text-gray-400 text-sm">{item.instructor}</p>
                      <div className="flex items-center gap-2 mt-1 md:hidden"><span className="text-[#00FF48] font-bold text-sm">{item.price.toLocaleString()} تومان</span></div>
                    </div>
                  </div>
                  <div className="hidden md:block text-center text-white font-medium w-32">{item.price.toLocaleString()} تومان</div>
                  <div className="flex items-center justify-center gap-3">
                    <button onClick={() => updateQuantity(item.id, -1)} className="w-8 hover:cursor-pointer h-8 bg-[#00FF48]/10 text-[#00FF48] rounded-lg hover:bg-[#00FF48] hover:text-[#0f111d] transition-all duration-200 flex items-center justify-center"><FiMinus className="w-4 h-4" /></button>
                    <span className="text-white font-bold text-lg w-8 text-center">{item.quantity}</span>
                    <button onClick={() => updateQuantity(item.id, 1)} className="w-8 h-8 hover:cursor-pointer bg-[#00FF48]/10 text-[#00FF48] rounded-lg hover:bg-[#00FF48] hover:text-[#0f111d] transition-all duration-200 flex items-center justify-center"><FiPlus className="w-4 h-4" /></button>
                  </div>
                  <div className="flex items-center justify-between md:justify-end gap-4">
                    <div className="text-center md:w-32"><span className="text-[#00FF48] font-bold text-base">{(item.price * item.quantity).toLocaleString()} تومان</span></div>
                    <button onClick={() => removeFromCart(item.id)} className="p-2 hover:cursor-pointer text-red-500 hover:text-red-400 hover:bg-red-500/10 rounded-lg transition-all duration-200"><FiTrash2 className="w-5 h-5" /></button>
                  </div>
                </div>
              </div>
            ))}
            <button onClick={clearCart} className="text-sm text-red-500 hover:text-red-400 py-2 px-4 border border-red-500/20 rounded-lg hover:bg-red-500/10 transition-all duration-200">پاک کردن همه آیتم‌ها</button>
          </div>

          <div className="lg:col-span-1">
            <div className="bg-[#0f111d] border-2 border-[#00FF48]/20 rounded-2xl p-6 sticky top-24">
              <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2"><FiShoppingCart className="text-[#00FF48]" />خلاصه سبد خرید</h3>
              <div className="space-y-3 mb-6">
                <div className="flex items-center justify-between text-sm"><span className="text-gray-400">مجموع ({totalItems} آیتم)</span><span className="text-white">{subtotal.toLocaleString()} تومان</span></div>
                {discount > 0 && <div className="flex items-center justify-between text-sm"><span className="text-gray-400 flex items-center gap-1"><FiGift className="text-[#00FF48] w-4 h-4" />تخفیف ۱۰%</span><span className="text-[#00FF48]">-{discount.toLocaleString()} تومان</span></div>}
                <div className="flex items-center justify-between text-sm"><span className="text-gray-400 flex items-center gap-1"><FiTruck className="text-[#00FF48] w-4 h-4" />هزینه ارسال</span><span className="text-white">{shipping === 0 ? 'رایگان' : `${shipping.toLocaleString()} تومان`}</span></div>
                <div className="border-t border-[#00FF48]/10 pt-3"><div className="flex items-center justify-between"><span className="text-white font-bold text-lg">مجموع نهایی</span><span className="text-2xl font-bold text-[#00FF48]">{finalTotal.toLocaleString()} تومان</span></div></div>
              </div>
              <div className="space-y-2 mb-6 text-xs text-gray-500">
                <div className="flex items-center gap-2"><FiShield className="text-[#00FF48] w-4 h-4" /><span>پرداخت امن و مطمئن</span></div>
                {shipping === 0 && <div className="flex items-center gap-2 text-[#00FF48]"><FiTruck className="w-4 h-4" /><span>ارسال رایگان</span></div>}
                {discount > 0 && <div className="flex items-center gap-2 text-[#00FF48]"><FiGift className="w-4 h-4" /><span>تخفیف ویژه اعمال شد</span></div>}
              </div>
              <button onClick={() => navigate('/checkout')} className="w-full py-3.5 bg-[#00FF48] text-[#0f111d] font-bold rounded-xl hover:shadow-lg hover:shadow-[#00FF48]/30 hover:scale-105 transition-all duration-300 text-lg flex items-center justify-center gap-2 hover:cursor-pointer">تسویه حساب <FiArrowRight className="w-5 h-5 " style={{rotate:"-180deg"}} /></button>
              <Link to="/courses" className="block text-center text-gray-400 text-sm mt-4 hover:text-[#00FF48] transition-colors duration-200">← ادامه خرید</Link>
            </div>
          </div>
        </div>
      </div>
    </Mainall>
  );
};

export default CartPage;