import { Link, useNavigate } from "react-router-dom";

function LinkButton({ children, to }) {
  const navigate = useNavigate();
  const className =
    "relative text-sm pb-0.5 text-slate-400 hover:text-slate-300 hover:border-slate-300 transition-all duration-300 outline-none focus:ring focus:ring-slate-600 focus:ring-offset-4 focus:ring-offset-slate-900 focus:rounded-full focus:hover:border-b-transparent before:content-[''] before:absolute before:left-0 before:bottom-0 before:w-0 before:h-[1px] before:bg-slate-200 before:transition-[width] before:duration-300 hover:before:w-full";

  if (to === "-1")
    return (
      <button className={className} onClick={() => navigate(-1)}>
        {children}
      </button>
    );

  return (
    <Link to={to} className={className}>
      {children}
    </Link>
  );
}

export default LinkButton;
