import { createFileRoute } from "@tanstack/react-router";
import { ContactScreen } from "@/components/site/pages-info";
import { meta } from "@/lib/meta";

export const Route = createFileRoute("/contact")({
  head: () => meta("Contact", "Write to the Clay Pot studio. This demo keeps your note on this device."),
  component: ContactScreen,
});
