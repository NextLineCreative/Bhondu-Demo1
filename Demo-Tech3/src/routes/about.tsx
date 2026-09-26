import { createFileRoute } from "@tanstack/react-router";
import { AboutScreen } from "@/components/site/pages-info";
import { meta } from "@/lib/meta";

export const Route = createFileRoute("/about")({
  head: () => meta("About", "The Clay Pot studio: earth, fire, hands, and objects made to be used."),
  component: AboutScreen,
});
