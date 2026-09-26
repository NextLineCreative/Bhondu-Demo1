import { createFileRoute } from "@tanstack/react-router";
import { getProduct } from "@/data/catalog";
import { ProductScreen } from "@/components/site/product-page";
import { meta } from "@/lib/meta";

export const Route = createFileRoute("/product/$slug")({
  head: ({ params }) => {
    const product = getProduct(params.slug);
    return meta(
      product ? product.name : "Piece not found",
      product?.description ?? "This piece is not in the Clay Pot archive.",
    );
  },
  component: function ProductRoute() {
    const { slug } = Route.useParams();
    return <ProductScreen slug={slug} />;
  },
});
