import { createFileRoute } from "@tanstack/react-router";
import { shopSearchSchema } from "@/data/catalog";
import { ShopScreen } from "@/components/site/shop-page";
import { meta } from "@/lib/meta";

export const Route = createFileRoute("/shop/")({
  validateSearch: shopSearchSchema,
  head: () => meta("Shop", "Shop handcrafted mugs, bowls, vases, and planters from Clay Pot."),
  component: function ShopIndex() {
    const search = Route.useSearch();
    return <ShopScreen search={search} />;
  },
});
