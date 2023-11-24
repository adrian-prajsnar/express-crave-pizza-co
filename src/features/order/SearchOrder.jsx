import { useState } from "react";
import { useNavigate } from "react-router-dom";

function SearchOrder() {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    if (!query) return;
    navigate(`/order/${query}`);
    setQuery("");
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        placeholder="Search order #"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="w-40 rounded-full bg-slate-800/75 px-4 py-2 text-sm outline-none transition-all duration-300 placeholder:text-slate-400 focus:ring focus:ring-slate-600 focus:ring-offset-2 focus:ring-offset-slate-900 sm:w-64 sm:focus:w-72"
      />
    </form>
  );
}

export default SearchOrder;
