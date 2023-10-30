import { useRouteError } from "react-router-dom";

import LinkButton from "./LinkButton";

function Error() {
  const error = useRouteError();

  return (
    <div className="px-4 py-3 text-sm md:text-base">
      <h2 className="mb-1 text-2xl  md:text-3xl">Something went wrong!</h2>
      <p className="mb-3 text-base text-slate-200 md:text-lg">
        {error.data || error.message}
      </p>
      <LinkButton to="-1">&larr; Go back</LinkButton>
    </div>
  );
}

export default Error;
