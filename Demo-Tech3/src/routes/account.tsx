import { createFileRoute } from "@tanstack/react-router";
import { AccountScreen } from "@/components/site/pages-commerce";
import { meta } from "@/lib/meta";

export const Route = createFileRoute("/account")({
  head: () => meta("Account", "A demo Clay Pot profile stored only in this browser."),
  component: AccountScreen,
});
