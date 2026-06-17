import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Mainall from '../layout/Mainall';
import CheckoutForm from '../components/chekout/CheckoutForm';
import { FiArrowRight } from 'react-icons/fi';

const CheckoutPage = () => {
  const navigate = useNavigate();
  const [cartItems, setCartItems] = useState(() => {
    try {
      const item = window.localStorage.getItem('cart');
      return item ? JSON.parse(item) : [];
    } catch (error) {
      return [];
    }
  });

  useEffect(() => {
    if (cartItems.length === 0) {
      navigate('/courses');
    }
  }, [cartItems, navigate]);

  const total = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const discount = total > 1000000 ? Math.floor(total * 0.1) : 0;
  const shipping = total > 500000 ? 0 : 50000;
  const finalTotal = total - discount + shipping;

  return (
    <Mainall>
      <div className="container mx-auto px-4 py-8 max-w-3xl">
        <div className="flex items-center justify-between mb-8">
          <div><h1 className="text-3xl md:text-4xl font-bold text-white mb-2">تسویه حساب</h1><p className="text-gray-400 text-lg">تکمیل اطلاعات و پرداخت</p></div>
          <Link to="/cart" className="flex items-center gap-2 text-[#00FF48] hover:text-white transition-colors"><FiArrowRight className="w-5 h-5" />بازگشت به سبد خرید</Link>
        </div>
        <div className="bg-[#0f111d] border-2 border-[#00FF48]/20 rounded-2xl p-6 md:p-8">
          <CheckoutForm cartItems={cartItems} total={total} discount={discount} shipping={shipping} finalTotal={finalTotal} />
        </div>
      </div>
    </Mainall>
  );
};

export default CheckoutPage;