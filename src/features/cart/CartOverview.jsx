import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

import { getTotalCartPrice, getTotalCartQuantity } from "./cartSlice";
import { formatCurrency } from "../../utilities/helpers";

function CartOverview() {
  const totalCartQuantity = useSelector(getTotalCartQuantity);
  const totalCartPrice = useSelector(getTotalCartPrice);

  if (!totalCartQuantity) return null;

  return (
    <div className="flex flex-wrap items-center justify-between gap-1 border-t border-slate-700 bg-slate-800/75 p-4 text-sm uppercase text-slate-200 backdrop-blur-sm sm:px-6 md:text-base">
      <p className="space-x-4 font-semibold text-slate-300 sm:space-x-6">
        <span>{totalCartQuantity} pizzas</span>
        <span>{formatCurrency(totalCartPrice)}</span>
      </p>
      <Link
        to="/cart"
        className="rounded-full outline-none transition-all duration-300 hover:text-sky-400 focus:ring focus:ring-slate-600"
      >
        <span className="p-1">Open cart &rarr;</span>
      </Link>
    </div>
  );
}

export default CartOverview;
