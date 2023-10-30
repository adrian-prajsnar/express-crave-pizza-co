import { Link } from "react-router-dom";

import SearchOrder from "../features/order/SearchOrder";
import Username from "../features/user/Username";

function Header() {
  return (
    <header className="flex items-center justify-between gap-4 border-b border-slate-700 bg-slate-800 px-4 py-3 uppercase sm:px-6">
      <Link
        to="/"
        className="inline rounded-xl text-sm font-medium tracking-widest outline-none transition-all duration-300 focus:ring focus:ring-slate-600 focus:ring-offset-4 focus:ring-offset-slate-800 sm:rounded-full sm:text-base"
      >
        Express Crave Pizza Co.
      </Link>
      <SearchOrder />
      <Username />
    </header>
  );
}

export default Header;
