import { useSelector } from "react-redux";

import CreateUser from "../features/user/CreateUser";
import Button from "./Button";

function Home() {
  const username = useSelector((store) => store.user.username);

  return (
    <div className="h-full w-screen px-4 text-center">
      <h1 className="mb-8 text-[1.75rem] font-semibold leading-[1.3] md:text-4xl md:leading-tight">
        The best pizza.
        <br />
        <span className="text-yellow-500">
          Straight out of the oven, straight to you.
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
