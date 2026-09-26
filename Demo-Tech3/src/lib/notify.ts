import { toast } from "sonner";

export function notifyCart(result: "added" | "max" | "oos" | "missing") {
  if (result === "added") toast("Added to your cart");
  else if (result === "max") toast("That's all we have of this piece");
  else if (result === "oos") toast("This piece is sold out");
}

export function notifyWish(result: "added" | "removed") {
  toast(result === "added" ? "Added to wishlist" : "Removed from wishlist");
}
