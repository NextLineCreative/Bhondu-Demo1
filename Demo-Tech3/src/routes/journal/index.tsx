import { createFileRoute } from "@tanstack/react-router";
import { JournalScreen } from "@/components/site/pages-info";
import { meta } from "@/lib/meta";

export const Route = createFileRoute("/journal/")({
  head: () => meta("Journal", "Notes from the Clay Pot studio on clay, firing, and a slower home."),
  component: JournalScreen,
});
