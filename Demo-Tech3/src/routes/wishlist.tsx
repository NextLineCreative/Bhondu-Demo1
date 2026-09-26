import { createFileRoute } from "@tanstack/react-router";
import { WishlistScreen } from "@/components/site/pages-commerce";
import { meta } from "@/lib/meta";

export const Route = createFileRoute("/wishlist")({
  head: () => meta("Wishlist", "Pieces you have saved from the Clay Pot archive, on this device."),
  component: WishlistScreen,
});
