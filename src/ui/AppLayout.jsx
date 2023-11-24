import { Outlet, useNavigation } from "react-router-dom";

import Header from "./Header";
import Loader from "./Loader";
import CartOverview from "../features/cart/CartOverview";

function AppLayout() {
  const navigation = useNavigation();
  const isLoading = navigation.state === "loading";

  return (
    <>
      <div className="bg- absolute left-0 top-0 h-screen w-screen bg-[url('/pizza-bg.jpg')] bg-cover bg-center"></div>
      <div className="max-w-screen relative grid h-screen w-screen grid-rows-[auto_1fr_auto]">
        {isLoading && <Loader />}
        <Header />
        <div className="overflow-auto ">
          <main className="mx-auto flex min-h-full w-full max-w-3xl items-center justify-center py-4">
            <Outlet />
          </main>
        </div>
        <CartOverview />
      </div>
    </>
  );
}

export default AppLayout;
