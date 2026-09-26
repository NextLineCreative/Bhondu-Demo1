import { createFileRoute } from "@tanstack/react-router";
import { HomePage } from "@/components/site/home-page";
import { meta } from "@/lib/meta";

export const Route = createFileRoute("/")({
  head: () =>
    meta(
      "Clay Pot — Handcrafted Ceramics",
      "Handcrafted clay pieces for a more meaningful home. Rooted in nature, shaped by hands, made to last.",
    ),
  component: HomePage,
});
