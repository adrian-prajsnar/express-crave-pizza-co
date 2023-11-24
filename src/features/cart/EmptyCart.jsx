import LinkButton from "../../ui/LinkButton";

function EmptyCart() {
  return (
    <div className="bg-slate-900/75 p-4 backdrop-blur-sm md:rounded-md">
      <LinkButton to="/menu">&larr; Back to menu</LinkButton>
      <p className="mt-7 font-semibold ">
        Your cart is still empty. Why not start by adding some delicious pizzas?
        😉
      </p>
    </div>
  );
}

export default EmptyCart;
