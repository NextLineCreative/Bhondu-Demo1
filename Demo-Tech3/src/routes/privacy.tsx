import { createFileRoute } from "@tanstack/react-router";
import { PrivacyScreen } from "@/components/site/pages-info";
import { meta } from "@/lib/meta";

export const Route = createFileRoute("/privacy")({
  head: () => meta("Privacy", "Clay Pot stores demo data in your browser and does not run an account server."),
  component: PrivacyScreen,
});
