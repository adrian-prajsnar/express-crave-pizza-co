import { useRouteError } from "react-router-dom";
import LinkButton from "./LinkButton";

function Error() {
  const error = useRouteError();

  return (
    <div className="px-4 py-3 text-sm md:text-base">
      <h2 className="mb-1 text-xl text-stone-800 md:text-2xl">
        Something went wrong 😢
      </h2>
      <p className="mb-3">{error.data || error.message}</p>
      <LinkButton to="-1">&larr; Go back</LinkButton>
    </div>
  );
}

export default Error;
