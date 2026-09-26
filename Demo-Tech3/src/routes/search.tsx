import { createFileRoute } from "@tanstack/react-router";
import { SearchScreen } from "@/components/site/pages-commerce";
import { meta } from "@/lib/meta";

export const Route = createFileRoute("/search")({
  validateSearch: (search: { q?: unknown }) => ({
    q: typeof search.q === "string" ? search.q : "",
  }),
  head: () => meta("Search", "Search Clay Pot pieces and studio notes."),
  component: function SearchRoute() {
    const { q } = Route.useSearch();
    return <SearchScreen q={q} />;
  },
});
