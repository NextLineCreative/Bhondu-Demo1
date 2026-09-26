import { createFileRoute } from "@tanstack/react-router";
import { TermsScreen } from "@/components/site/pages-info";
import { meta } from "@/lib/meta";

export const Route = createFileRoute("/terms")({
  head: () => meta("Terms", "Terms for the Clay Pot preview. A demo order is not a sale."),
  component: TermsScreen,
});
