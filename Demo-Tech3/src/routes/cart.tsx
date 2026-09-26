import { createFileRoute } from "@tanstack/react-router";
import { CartScreen } from "@/components/site/pages-commerce";
import { meta } from "@/lib/meta";

export const Route = createFileRoute("/cart")({
  head: () => meta("Cart", "Review the Clay Pot pieces on your shelf before a demo checkout."),
  component: CartScreen,
});
