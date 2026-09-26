import { createFileRoute } from "@tanstack/react-router";
import { ReturnsScreen } from "@/components/site/pages-info";
import { meta } from "@/lib/meta";

export const Route = createFileRoute("/returns")({
  head: () => meta("Returns", "How returns would work at Clay Pot, and what this demo does instead."),
  component: ReturnsScreen,
});
