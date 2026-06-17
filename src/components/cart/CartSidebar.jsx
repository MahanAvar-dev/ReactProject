import { Link } from 'react-router-dom';
import { FiX, FiShoppingCart, FiTrash2, FiPlus, FiMinus, FiArrowLeft } from 'react-icons/fi';

const CartSidebar = ({ isOpen, onClose, cartItems, removeFromCart, updateQuantity, clearCart }) => {
  const total = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);
  const discount = total > 1000000 ? Math.floor(total * 0.1) : 0;
  const finalTotal = total - discount;

  return (
    <div className={`fixed inset-0 z-[999] transition-all duration-300 ${isOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}`}>
      <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" onClick={onClose} />
      <div className={`absolute top-0 left-0 h-full w-[90%] max-w-md bg-[#0f111d] border-l-2 border-[#00FF48] shadow-2xl shadow-[#00FF48]/10 transition-all duration-300 transform ${isOpen ? 'translate-x-0' : '-translate-x-full'}`}>
        <div className="flex items-center justify-between p-4 border-b border-[#00FF48]/20 bg-[#080a16]">
          <div className="flex items-center gap-3">
            <FiShoppingCart className="w-6 h-6 text-[#00FF48]" />
            <h2 className="text-xl font-bold text-white">سبد خرید</h2>
            <span className="text-sm text-gray-400 bg-[#0f111d] px-2.5 py-0.5 rounded-full border border-[#00FF48]/20">{totalItems}</span>
          </div>
          <button onClick={onClose} className="p-2 rounded-lg hover:bg-[#00FF48]/10 transition-colors group">
            <FiX className="w-6 h-6 text-gray-400 hover:cursor-pointer group-hover:text-[#00FF48] transition-colors" />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto p-4 h-[calc(100%-230px)] custom-scrollbar">
          {cartItems.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-center">
              <div className="text-7xl mb-4 opacity-50">🛒</div>
              <h3 className="text-xl font-bold text-white mb-2">سبد خرید خالی است</h3>
              <p className="text-gray-400 text-sm mb-6">دوره‌های مورد نظر خود را اضافه کنید</p>
              <button onClick={onClose} className="px-6 py-2.5 bg-[#00FF48] text-[#0f111d] font-bold rounded-xl hover:shadow-lg hover:shadow-[#00FF48]/20 hover:scale-105 transition-all duration-300">مشاهده دوره‌ها</button>
            </div>
          ) : (
            <div className="space-y-3">
              {cartItems.map((item) => (
                <div key={item.id} className="bg-[#080a16] border border-[#00FF48]/20 rounded-xl p-3 hover:border-[#00FF48]/50 transition-all duration-300 group">
                  <div className="flex items-start gap-3">
                    <div className="w-16 h-16 bg-[#0f111d] rounded-lg flex items-center justify-center p-2 border border-[#00FF48]/10 flex-shrink-0">
                      <img src={item.image} alt={item.title} className="w-full h-full object-contain" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className="text-white text-sm font-medium line-clamp-1">{item.title}</h4>
                      <p className="text-[#00FF48] text-sm font-bold mt-1">{item.price.toLocaleString()} تومان</p>
                      <div className="flex items-center gap-1 mt-2">
                        <button onClick={() => updateQuantity(item.id, -1)} className="w-7 hover:cursor-pointer h-7 bg-[#00FF48]/10 text-[#00FF48] rounded-lg hover:bg-[#00FF48] hover:text-[#0f111d] transition-all duration-200 flex items-center justify-center"><FiMinus className="w-3 h-3" /></button>
                        <span className="text-white w-8 text-center text-sm font-medium">{item.quantity}</span>
                        <button onClick={() => updateQuantity(item.id, 1)} className="w-7 hover:cursor-pointer h-7 bg-[#00FF48]/10 text-[#00FF48] rounded-lg hover:bg-[#00FF48] hover:text-[#0f111d] transition-all duration-200 flex items-center justify-center"><FiPlus className="w-3 h-3" /></button>
                      </div>
                    </div>
                    <button onClick={() => removeFromCart(item.id)} className="opacity-0 hover:cursor-pointer group-hover:opacity-100 transition-opacity duration-300 p-1.5 text-red-500 hover:text-red-400 hover:bg-red-500/10 rounded-lg"><FiTrash2 className="w-4 h-4" /></button>
                  </div>
                </div>
              ))}
              {cartItems.length > 1 && (
                <button onClick={clearCart} className="w-full text-center text-xs text-red-500 hover:text-red-400 py-2 border border-red-500/20 rounded-lg hover:bg-red-500/10 transition-all hover:cursor-pointer duration-200">پاک کردن همه آیتم‌ها</button>
              )}
            </div>
          )}
        </div>

        {cartItems.length > 0 && (
          <div className="absolute bottom-0 left-0 right-0 p-4 border-t border-[#00FF48]/20 bg-[#080a16]">
            {discount > 0 && (
              <div className="flex items-center justify-between text-sm mb-1">
                <span className="text-gray-400">تخفیف ۱۰%</span>
                <span className="text-[#00FF48] font-medium">-{discount.toLocaleString()} تومان</span>
              </div>
            )}
            <div className="flex items-center justify-between mb-4">
              <span className="text-gray-400 text-sm">مجموع ({totalItems} آیتم)</span>
              <span className="text-2xl font-bold text-[#00FF48]">{finalTotal.toLocaleString()} <span className="text-sm text-gray-400 mr-1">تومان</span></span>
            </div>
            <div className="flex gap-3">
              <Link to="/cart" className="flex-1 text-center px-4 py-3 bg-[#00FF48]/10 text-[#00FF48] border border-[#00FF48] rounded-xl hover:bg-[#00FF48] hover:text-[#0f111d] transition-all duration-300 font-medium text-sm" onClick={onClose}>
                <span className="flex items-center justify-center gap-2"><FiArrowLeft className="w-4 h-4" />مشاهده سبد خرید</span>
              </Link>
              <Link to="/checkout" className="flex-1 text-center px-4 py-3 bg-[#00FF48] text-[#0f111d] font-bold rounded-xl hover:shadow-lg hover:shadow-[#00FF48]/30 hover:scale-105 transition-all duration-300 text-sm" onClick={onClose}>تسویه حساب</Link>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CartSidebar;