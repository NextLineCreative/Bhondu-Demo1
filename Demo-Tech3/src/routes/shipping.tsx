import { createFileRoute } from "@tanstack/react-router";
import { ShippingScreen } from "@/components/site/pages-info";
import { meta } from "@/lib/meta";

export const Route = createFileRoute("/shipping")({
  head: () => meta("Shipping", "Clay Pot demo shipping: ₹199 within India, or complimentary over ₹3,999. Nothing is dispatched."),
  component: ShippingScreen,
});
