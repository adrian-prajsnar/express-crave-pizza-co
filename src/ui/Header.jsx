import { Link } from "react-router-dom";

import SearchOrder from "../features/order/SearchOrder";
import Username from "../features/user/Username";

function Header() {
  return (
    <header className="flex items-center justify-between gap-4 border-b border-slate-700 bg-slate-800/75 px-4 py-3 uppercase backdrop-blur-sm sm:px-6">
      <Link
        to="/"
        className="inline rounded-xl pl-1 text-sm font-medium tracking-widest outline-none transition-all duration-300 focus:ring focus:ring-slate-600 focus:ring-offset-0 focus:ring-offset-slate-900 sm:rounded-full sm:text-base"
      >
        Express Crave Pizza Co.
      </Link>
      <SearchOrder />
      <Username />
    </header>
  );
}

export default Header;
