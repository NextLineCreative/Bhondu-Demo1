export const SHIPPING_FLAT = 199;
export const FREE_AT = 3999;

export function money(n: number) {
  return new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    maximumFractionDigits: 0,
  }).format(n);
}

export function shippingFor(subtotal: number) {
  if (subtotal <= 0) return 0;
  return subtotal >= FREE_AT ? 0 : SHIPPING_FLAT;
}
