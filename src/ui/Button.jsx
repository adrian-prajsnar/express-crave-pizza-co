import { Link } from "react-router-dom";

function Button({ children, disabled, to, type, onClick }) {
  const base =
    "inline-block text-sm rounded-full font-semibold uppercase tracking-wide text-slate-200 transition-all duration-300 bg-slate-800 hover:bg-slate-700 focus:bg-slate-700 focus:ring-slate-700 focus:ring-offset-slate-900 outline-none focus:ring focus:ring-offset-2 disabled:cursor-not-allowed";

  const styles = {
    primary: base + " px-4 py-3 md:px-6 md:py-4",
    small: base + " px-4 py-2 md:px-5 md:py-2.5 text-xs",
    round: base + " px-2.5 py-1 md:px-3.5 md:py-2 text-sm",
    secondary:
      "inline-block text-sm rounded-full border-2 border-slate-800 font-semibold uppercase tracking-wide text-slate-400 transition-all duration-300 hover:bg-slate-800 hover:text-slate-200 focus:bg-slate-800 focus:text-slate-200 outline-none focus:ring focus:ring-slate-600 focus:ring-offset-2 focus:ring-offset-slate-900 disabled:cursor-not-allowed px-4 py-2.5 md:px-6 md:py-3.5",
    lighterSmall:
      "inline-block text-sm rounded-full font-semibold uppercase tracking-wide text-slate-200 transition-all duration-300 bg-slate-700 hover:bg-slate-600 focus:bg-slate-600 focus:ring-slate-600 focus:ring-offset-slate-800 outline-none focus:ring focus:ring-offset-2 disabled:cursor-not-allowed px-4 py-2 md:px-5 md:py-2.5 text-xs",
  };

  if (to)
    return (
      <Link to={to} className={styles[type]}>
        {children}
      </Link>
    );

  if (onClick)
    return (
      <button onClick={onClick} className={styles[type]} disabled={disabled}>
        {children}
      </button>
    );

  return (
    <button className={styles[type]} disabled={disabled}>
      {children}
    </button>
  );
}

export default Button;
