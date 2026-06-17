import { FiTrash2, FiPlus, FiMinus } from 'react-icons/fi';

const CartItem = ({ item, onUpdateQuantity, onRemove }) => {
  return (
    <div className="bg-[#080a16] border border-[#00FF48]/20 rounded-xl p-3 hover:border-[#00FF48]/50 transition-all duration-300 group">
      <div className="flex items-start gap-3">
        <div className="w-16 h-16 bg-[#0f111d] rounded-lg flex items-center justify-center p-2 border border-[#00FF48]/10 flex-shrink-0">
          <img src={item.image} alt={item.title} className="w-full h-full object-contain" />
        </div>
        <div className="flex-1 min-w-0">
          <h4 className="text-white text-sm font-medium line-clamp-1">{item.title}</h4>
          <p className="text-[#00FF48] text-sm font-bold mt-1">{item.price.toLocaleString()} تومان</p>
          <div className="flex items-center gap-1 mt-2">
            <button onClick={() => onUpdateQuantity(item.id, -1)} className="w-7 h-7 bg-[#00FF48]/10 text-[#00FF48] rounded-lg hover:bg-[#00FF48] hover:text-[#0f111d] transition-all duration-200 flex items-center justify-center hover:cursor-pointer"><FiMinus className="w-3 h-3" /></button>
            <span className="text-white w-8 text-center text-sm font-medium">{item.quantity}</span>
            <button onClick={() => onUpdateQuantity(item.id, 1)} className="w-7 h-7 bg-[#00FF48]/10 text-[#00FF48] rounded-lg hover:bg-[#00FF48] hover:text-[#0f111d] transition-all duration-200 flex items-center justify-center hover:cursor-pointer"><FiPlus className="w-3 h-3" /></button>
          </div>
        </div>
        <div className="flex flex-col items-end gap-2">
          <span className="text-[#00FF48] text-sm font-bold">{(item.price * item.quantity).toLocaleString()} تومان</span>
          <button onClick={() => onRemove(item.id)} className="p-1.5 text-red-500 hover:text-red-400 hover:bg-red-500/10 rounded-lg transition-all duration-200 opacity-0 group-hover:opacity-100 hover:cursor-pointer"><FiTrash2 className="w-4 h-4" /></button>
        </div>
      </div>
    </div>
  );
};

export default CartItem;