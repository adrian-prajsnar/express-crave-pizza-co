import { useFetcher } from "react-router-dom";

import { updateOrder } from "../../services/apiRestaurant";
import Button from "../../ui/Button";

function UpdateOrder({ order }) {
  const fetcher = useFetcher();
  const isSubmitting = fetcher.state === "submitting";
  const isLoading = fetcher.state === "loading";

  return (
    <fetcher.Form method="PATCH" className="text-right">
      <Button type="primary">
        {isLoading || isSubmitting ? "Changing priority... " : "Make priority"}
      </Button>
    </fetcher.Form>
  );
}

export default UpdateOrder;

export async function action({ request, params }) {
  const data = { priority: true };
  await updateOrder(params.orderId, data);
  return null;
}
