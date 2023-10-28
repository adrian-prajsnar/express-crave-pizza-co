import { Link } from "react-router-dom";

import SearchOrder from "../features/order/SearchOrder";
import Username from "../features/user/Username";

function Header() {
  return (
    <header className="flex items-center justify-between gap-4 border-b border-stone-300 bg-yellow-400 px-4 py-3 uppercase sm:px-6">
      <Link
        to="/"
        className="text-sm font-medium tracking-widest focus:outline-none focus:ring focus:ring-stone-500 focus:ring-opacity-50 focus:ring-offset-4 focus:ring-offset-yellow-400 sm:text-base"
      >
        Express Crave Pizza Co.
      </Link>
      <SearchOrder />
      <Username />
    </header>
  );
}

export default Header;
