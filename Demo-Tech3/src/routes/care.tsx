import { createFileRoute } from "@tanstack/react-router";
import { CareScreen } from "@/components/site/pages-info";
import { meta } from "@/lib/meta";

export const Route = createFileRoute("/care")({
  head: () => meta("Care guide", "How to care for Clay Pot stoneware and unglazed terracotta."),
  component: CareScreen,
});
