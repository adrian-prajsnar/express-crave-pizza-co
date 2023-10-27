import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

import { getTotalCartPrice, getTotalCartQuantity } from "./cartSlice";
import { formatCurrency } from "../../utilities/helpers";

function CartOverview() {
  const totalCartQuantity = useSelector(getTotalCartQuantity);
  const totalCartPrice = useSelector(getTotalCartPrice);

  if (!totalCartQuantity) return null;

  return (
    <div className="flex flex-wrap items-center justify-between gap-1 bg-stone-800 p-4 text-sm uppercase text-stone-200 sm:px-6 md:text-base">
      <p className="space-x-4 font-semibold text-stone-300 sm:space-x-6">
        <span>{totalCartQuantity} pizzas</span>
        <span>{formatCurrency(totalCartPrice)}</span>
      </p>
      <Link
        to="/cart"
        className="focus:outline-none focus:ring focus:ring-stone-200 focus:ring-opacity-50 focus:ring-offset-4 focus:ring-offset-stone-800"
      >
        Open cart &rarr;
      </Link>
    </div>
  );
}

export default CartOverview;
