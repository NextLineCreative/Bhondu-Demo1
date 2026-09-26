import { createFileRoute } from "@tanstack/react-router";
import { TrackScreen } from "@/components/site/pages-commerce";
import { meta } from "@/lib/meta";

export const Route = createFileRoute("/track")({
  head: () => meta("Track order", "Look up a Clay Pot demo order saved in this browser."),
  component: TrackScreen,
});
