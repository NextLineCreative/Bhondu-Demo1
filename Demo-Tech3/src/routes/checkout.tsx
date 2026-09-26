import { createFileRoute } from "@tanstack/react-router";
import { CheckoutScreen } from "@/components/site/pages-commerce";
import { meta } from "@/lib/meta";

export const Route = createFileRoute("/checkout")({
  head: () => meta("Checkout", "Demo checkout for Clay Pot. No payment is processed."),
  component: CheckoutScreen,
});
