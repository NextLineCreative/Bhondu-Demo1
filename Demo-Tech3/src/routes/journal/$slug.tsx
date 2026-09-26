import { createFileRoute } from "@tanstack/react-router";
import { getArticle } from "@/data/catalog";
import { ArticleScreen } from "@/components/site/pages-info";
import { meta } from "@/lib/meta";

export const Route = createFileRoute("/journal/$slug")({
  head: ({ params }) => {
    const article = getArticle(params.slug);
    return meta(article ? article.title : "Note not found", article?.excerpt ?? "This studio note is not on the shelf.");
  },
  component: function ArticleRoute() {
    const { slug } = Route.useParams();
    return <ArticleScreen slug={slug} />;
  },
});
