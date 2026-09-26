import { createFileRoute } from "@tanstack/react-router";
import { FaqScreen } from "@/components/site/pages-info";
import { meta } from "@/lib/meta";

export const Route = createFileRoute("/faqs")({
  head: () => meta("FAQs", "Questions about Clay Pot pieces, care, shipping, and this demo checkout."),
  component: FaqScreen,
});
