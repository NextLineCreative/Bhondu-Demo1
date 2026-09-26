import { createFileRoute } from "@tanstack/react-router";
import { NotFoundView } from "@/components/site/ui";
import { meta } from "@/lib/meta";

export const Route = createFileRoute("/$")({
  head: () => meta("Page not found", "That page is not in the Clay Pot studio."),
  component: NotFoundView,
});
