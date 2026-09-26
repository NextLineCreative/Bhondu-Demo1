import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";
import { getProduct } from "@/data/catalog";
import { shippingFor } from "@/lib/money";

export type CartLine = { slug: string; qty: number };

export type Address = {
  id: string;
  label: string;
  line: string;
  city: string;
  state: string;
  postal: string;
  country: string;
};

export type Account = {
  name: string;
  email: string;
  password: string;
  phone: string;
  addresses: Address[];
};

export type OrderItem = { slug: string; name: string; price: number; qty: number; image: string };

export type Order = {
  id: string;
  createdAt: string;
  email: string;
  name: string;
  phone: string;
  address: string;
  city: string;
  state: string;
  postal: string;
  country: string;
  items: OrderItem[];
  shipping: number;
  subtotal: number;
  total: number;
};

export type CartResult = "added" | "max" | "oos" | "missing";

type ShopState = {
  hydrated: boolean;
  cart: CartLine[];
  wishlist: string[];
  account: Account | null;
  orders: Order[];
  cartOpen: boolean;
  searchOpen: boolean;
  menuOpen: boolean;
  setHydrated: () => void;
  openCart: () => void;
  closeCart: () => void;
  openSearch: () => void;
  closeSearch: () => void;
  openMenu: () => void;
  closeMenu: () => void;
  closeOverlays: () => void;
  addToCart: (slug: string, qty?: number) => CartResult;
  setQty: (slug: string, qty: number) => CartResult;
  removeFromCart: (slug: string) => void;
  clearCart: () => void;
  toggleWish: (slug: string) => "added" | "removed";
  inWish: (slug: string) => boolean;
  signIn: (email: string, password: string) => "ok" | "missing" | "bad";
  register: (input: { name: string; email: string; password: string }) => "ok" | "exists";
  signOut: () => void;
  updateAccount: (patch: Partial<Pick<Account, "name" | "phone">>) => void;
  resetPassword: (email: string, password: string) => boolean;
  addAddress: (address: Omit<Address, "id">) => void;
  removeAddress: (id: string) => void;
  placeOrder: (
    info: Omit<Order, "id" | "createdAt" | "items" | "shipping" | "subtotal" | "total">,
  ) => Order | null;
};

const memory = {
  getItem: (name: string) => (typeof window === "undefined" ? null : localStorage.getItem(name)),
  setItem: (name: string, value: string) => {
    if (typeof window !== "undefined") localStorage.setItem(name, value);
  },
  removeItem: (name: string) => {
    if (typeof window !== "undefined") localStorage.removeItem(name);
  },
};

function orderId() {
  const n = Math.random().toString(36).slice(2, 8).toUpperCase();
  return `CP-${n}`;
}

type Saved = Pick<ShopState, "cart" | "wishlist" | "account" | "orders">;

export const useShop = create<ShopState>()(
  persist<ShopState, [], [], Saved>(
    (set, get) => ({
      hydrated: false,
      cart: [],
      wishlist: [],
      account: null,
      orders: [],
      cartOpen: false,
      searchOpen: false,
      menuOpen: false,
      setHydrated: () => set({ hydrated: true }),
      openCart: () => set({ cartOpen: true, searchOpen: false, menuOpen: false }),
      closeCart: () => set({ cartOpen: false }),
      openSearch: () => set({ searchOpen: true, cartOpen: false, menuOpen: false }),
      closeSearch: () => set({ searchOpen: false }),
      openMenu: () => set({ menuOpen: true, cartOpen: false, searchOpen: false }),
      closeMenu: () => set({ menuOpen: false }),
      closeOverlays: () => set({ cartOpen: false, searchOpen: false, menuOpen: false }),
      addToCart: (slug, qty = 1) => {
        const product = getProduct(slug);
        if (!product) return "missing";
        if (product.stock <= 0) return "oos";
        const existing = get().cart.find((l) => l.slug === slug);
        const current = existing?.qty ?? 0;
        if (current >= product.stock) return "max";
        const next = Math.min(product.stock, current + qty);
        const cart = existing
          ? get().cart.map((l) => (l.slug === slug ? { ...l, qty: next } : l))
          : [...get().cart, { slug, qty: next }];
        set({ cart });
        return "added";
      },
      setQty: (slug, qty) => {
        const product = getProduct(slug);
        if (!product) return "missing";
        if (product.stock <= 0) return "oos";
        const next = Math.max(1, Math.min(product.stock, qty));
        const exists = get().cart.some((l) => l.slug === slug);
        const cart = exists
          ? get().cart.map((l) => (l.slug === slug ? { ...l, qty: next } : l))
          : [...get().cart, { slug, qty: next }];
        set({ cart });
        return "added";
      },
      removeFromCart: (slug) => set({ cart: get().cart.filter((l) => l.slug !== slug) }),
      clearCart: () => set({ cart: [] }),
      toggleWish: (slug) => {
        const has = get().wishlist.includes(slug);
        set({
          wishlist: has ? get().wishlist.filter((s) => s !== slug) : [...get().wishlist, slug],
        });
        return has ? "removed" : "added";
      },
      inWish: (slug) => get().wishlist.includes(slug),
      signIn: (email, password) => {
        const account = get().account;
        if (!account || account.email.toLowerCase() !== email.trim().toLowerCase()) return "missing";
        if (account.password !== password) return "bad";
        return "ok";
      },
      register: ({ name, email, password }) => {
        if (get().account) return "exists";
        set({
          account: {
            name: name.trim(),
            email: email.trim().toLowerCase(),
            password,
            phone: "",
            addresses: [],
          },
        });
        return "ok";
      },
      signOut: () => set({ account: null }),
      updateAccount: (patch) => {
        const account = get().account;
        if (!account) return;
        set({ account: { ...account, ...patch } });
      },
      resetPassword: (email, password) => {
        const account = get().account;
        if (!account || account.email.toLowerCase() !== email.trim().toLowerCase()) return false;
        set({ account: { ...account, password } });
        return true;
      },
      addAddress: (address) => {
        const account = get().account;
        if (!account) return;
        const next = { ...address, id: orderId() };
        set({ account: { ...account, addresses: [...account.addresses, next] } });
      },
      removeAddress: (id) => {
        const account = get().account;
        if (!account) return;
        set({ account: { ...account, addresses: account.addresses.filter((a) => a.id !== id) } });
      },
      placeOrder: (info) => {
        const items = get()
          .cart.map((line) => {
            const p = getProduct(line.slug);
            if (!p) return null;
            return { slug: p.slug, name: p.name, price: p.price, qty: line.qty, image: p.images[0] ?? "" };
          })
          .filter((item): item is OrderItem => item !== null);
        if (!items.length) return null;
        const subtotal = items.reduce((n, i) => n + i.price * i.qty, 0);
        const shipping = shippingFor(subtotal);
        const order: Order = {
          ...info,
          id: orderId(),
          createdAt: new Date().toISOString(),
          items,
          shipping,
          subtotal,
          total: subtotal + shipping,
        };
        set({ orders: [order, ...get().orders], cart: [] });
        return order;
      },
    }),
    {
      name: "claypot-shop",
      storage: createJSONStorage(() => ({
        getItem: (name) => memory.getItem(name),
        setItem: (name, value) => memory.setItem(name, value),
        removeItem: (name) => memory.removeItem(name),
      })),
      skipHydration: true,
      partialize: (s) => ({
        cart: s.cart,
        wishlist: s.wishlist,
        account: s.account,
        orders: s.orders,
      }),
    },
  ),
);

export function useCartCount() {
  return useShop((s) => s.cart.reduce((n, l) => n + l.qty, 0));
}

export function selectSubtotal(cart: CartLine[]) {
  return cart.reduce((n, l) => n + (getProduct(l.slug)?.price ?? 0) * l.qty, 0);
}
