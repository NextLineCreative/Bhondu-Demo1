import { useEffect, type RefObject } from "react";

export function useOverlay(open: boolean, onClose: () => void, ref: RefObject<HTMLElement | null>) {
  useEffect(() => {
    if (!open) return;
    const prevOverflow = document.body.style.overflow;
    const previous = document.activeElement instanceof HTMLElement ? document.activeElement : null;
    document.body.style.overflow = "hidden";
    const root = ref.current;
    const nodes = root
      ? Array.from(
          root.querySelectorAll<HTMLElement>("a[href], button:not([disabled]), input, textarea, select"),
        )
      : [];
    const first = nodes[0];
    const last = nodes[nodes.length - 1];
    const timer = window.setTimeout(() => first?.focus(), 40);
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") {
        e.preventDefault();
        onClose();
        return;
      }
      if (e.key !== "Tab" || nodes.length === 0) return;
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last?.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first?.focus();
      }
    }
    document.addEventListener("keydown", onKey);
    return () => {
      window.clearTimeout(timer);
      document.body.style.overflow = prevOverflow;
      document.removeEventListener("keydown", onKey);
      previous?.focus();
    };
  }, [open, onClose, ref]);
}
