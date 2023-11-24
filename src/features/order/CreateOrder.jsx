import { Form, redirect, useActionData, useNavigation } from "react-router-dom";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { createOrder } from "../../services/apiRestaurant";
import { clearCart, getCart, getTotalCartPrice } from "../cart/cartSlice";
import { formatCurrency } from "../../utilities/helpers";
import { fetchAddress } from "../user/userSlice";
import Button from "../../ui/Button";
import EmptyCart from "../cart/EmptyCart";
import store from "../../store";

const isValidPhone = (str) =>
  /^\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}$/.test(
    str,
  );

function CreateOrder() {
  const [withPriority, setWithPriority] = useState(false);
  const {
    username,
    status: addressStatus,
    position,
    address,
    error: errorAddress,
  } = useSelector((store) => store.user);
  const isLoadingAddress = addressStatus === "loading";
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const isSubmitting = navigation.state === "submitting";
  const formErrors = useActionData();
  const cart = useSelector(getCart);
  const totalCartPrice = useSelector(getTotalCartPrice);
  const priorityPrice = withPriority ? totalCartPrice * 0.2 : 0;
  const totalPrice = totalCartPrice + priorityPrice;

  const isBtnGetPosDisplayed =
    addressStatus === "error" || (!position.latitude && !position.longitude);

  if (!cart.length) return <EmptyCart />;

  return (
    <div className="w-screen bg-slate-900/75 p-4 backdrop-blur-sm md:rounded-md">
      <h2 className="mb-8 text-xl font-semibold">Ready to order? Let's go!</h2>
      <Form method="POST" action="/order/new">
        <div className="mb-5 flex flex-col gap-2 sm:flex-row sm:items-center">
          <label className="sm:basis-40">Full name</label>
          <input
            className="input grow"
            type="text"
            name="customer"
            defaultValue={username}
            required
            autoComplete="off"
          />
        </div>
        <div className="mb-5 flex flex-col gap-2 sm:flex-row sm:items-center">
          <label className="sm:basis-40">Phone number</label>
          <div className="grow">
            <input
              className="input w-full"
              type="tel"
              name="phone"
              required
              autoComplete="off"
            />
            {formErrors?.phone && (
              <p className="mt-2 rounded-md bg-red-700 p-2 text-xs text-red-50">
                {formErrors.phone}
              </p>
            )}
          </div>
        </div>
        <div className="mb-5 flex flex-col gap-2 sm:flex-row sm:items-center">
          <label
            className={
              addressStatus === "error" ? "sm:basis-[16.89rem]" : "sm:basis-40"
            }
          >
            Address
          </label>
          <div className="grow">
            <div className="relative">
              <input
                className={`input w-full ${
                  isBtnGetPosDisplayed && "pr-[8.625rem] md:pr-[10.25rem]"
                }`}
                type="text"
                name="address"
                disabled={isLoadingAddress}
                defaultValue={address}
                required
                autoComplete="off"
              />
              {addressStatus === "error" ||
                (!position.latitude && !position.longitude && (
                  <span className="absolute right-[3px] top-[3px] z-10 md:right-[5px] md:top-[5px]">
                    <Button
                      disabled={isLoadingAddress}
                      type="lighterSmall"
                      onClick={(e) => {
                        e.preventDefault();
                        dispatch(fetchAddress());
                      }}
                    >
                      Get position
                    </Button>
                  </span>
                ))}
            </div>
            {addressStatus === "error" && (
              <p className="mt-2 rounded-md bg-red-700 p-2 text-xs text-red-50">
                {errorAddress}
              </p>
            )}
          </div>
        </div>
        <div className="mb-12 flex items-center gap-5">
          <input
            className="h-4 w-4 accent-sky-400 outline-none transition-all duration-300 focus:ring focus:ring-slate-600 focus:ring-offset-2 focus:ring-offset-slate-900"
            type="checkbox"
            name="priority"
            id="priority"
            value={withPriority}
            onChange={(e) => setWithPriority(e.target.checked)}
          />
          <label htmlFor="priority" className="font-medium">
            Do you want to give your order priority?
          </label>
        </div>
        <div>
          <input type="hidden" name="cart" value={JSON.stringify(cart)} />
          <input
            type="hidden"
            name="position"
            value={
              position.latitude && position.longitude
                ? `${position.latitude}, ${position.longitude}`
                : ""
            }
          />
          <Button disabled={isSubmitting || isLoadingAddress} type="primary">
            {isSubmitting
              ? "Placing order..."
              : `Order now from ${formatCurrency(totalPrice)}`}
          </Button>
        </div>
      </Form>
    </div>
  );
}

export async function action({ request }) {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);

  const order = {
    ...data,
    cart: JSON.parse(data.cart),
    priority: data.priority === "true",
  };

  const errors = {};

  if (!isValidPhone(order.phone))
    errors.phone =
      "Please give us your correct phone number. We might need it to contact you.";

  if (Object.keys(errors).length > 0) return errors;

  const newOrder = await createOrder(order);
  store.dispatch(clearCart());
  return redirect(`/order/${newOrder.id}`);
}

export default CreateOrder;
