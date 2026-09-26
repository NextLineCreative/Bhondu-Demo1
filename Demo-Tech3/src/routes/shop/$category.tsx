import { createFileRoute } from "@tanstack/react-router";
import { categoryBySlug, shopSearchSchema } from "@/data/catalog";
import { ShopScreen } from "@/components/site/shop-page";
import { meta } from "@/lib/meta";

export const Route = createFileRoute("/shop/$category")({
  validateSearch: shopSearchSchema,
  head: ({ params }) => {
    const cat = categoryBySlug(params.category);
    return meta(
      cat ? cat.name : "Collection",
      cat ? `${cat.name}. ${cat.blurb}. Handcrafted ceramics from Clay Pot.` : "A Clay Pot collection.",
    );
  },
  component: function ShopCategory() {
    const { category } = Route.useParams();
    const search = Route.useSearch();
    return <ShopScreen category={category} search={search} />;
  },
});
