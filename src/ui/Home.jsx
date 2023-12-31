import { useSelector } from "react-redux";

import CreateUser from "../features/user/CreateUser";
import Button from "./Button";

function Home() {
  const username = useSelector((store) => store.user.username);

  return (
    <div className="h-full w-screen bg-slate-900/75 p-4 text-center backdrop-blur-sm md:rounded-md">
      <h1 className="mb-8 text-[1.75rem] font-semibold leading-[1.4] md:text-4xl md:leading-[1.3]">
        The Finest Pizza!
        <br />
        <span className="text-slate-200">
          Served fresh from the oven, directly to your door.
        </span>
      </h1>
      {username === "" ? (
        <CreateUser />
      ) : (
        <Button to="menu" type="primary">
          Continue ordering, {username}
        </Button>
      )}
    </div>
  );
}

export default Home;
