import { createFileRoute } from "@tanstack/react-router";
import { OrderScreen } from "@/components/site/pages-commerce";
import { meta } from "@/lib/meta";

export const Route = createFileRoute("/order/$id")({
  head: () => meta("Order", "A Clay Pot demo order confirmation. No payment was taken."),
  component: function OrderRoute() {
    const { id } = Route.useParams();
    return <OrderScreen id={id} />;
  },
});
