import { Link } from "@tanstack/react-router";
import { ChevronDown } from "lucide-react";
import { useEffect, useId, useRef, useState, type KeyboardEvent, type ReactNode } from "react";

export function PageHero({
  eyebrow,
  title,
  lede,
}: {
  eyebrow: string;
  title: string;
  lede?: string;
}) {
  return (
    <header className="wrap pt-8 pb-6 md:pt-12">
      <p className="eyebrow text-muted">{eyebrow}</p>
      <h1 className="title mt-3 max-w-3xl text-dark">{title}</h1>
      {lede ? <p className="mt-4 max-w-xl text-sm leading-relaxed text-muted md:text-base">{lede}</p> : null}
    </header>
  );
}

export function Breadcrumbs({ items }: { items: { label: string; to?: "/" | "/shop" }[] }) {
  return (
    <nav aria-label="Breadcrumb" className="eyebrow text-muted">
      <ol className="flex flex-wrap gap-x-2 gap-y-1">
        {items.map((item, i) => (
          <li key={item.label} className="flex items-center gap-2">
            {i > 0 ? <span aria-hidden="true">/</span> : null}
            {item.to ? (
              <Link to={item.to} className="hover:text-dark">
                {item.label}
              </Link>
            ) : (
              <span className="text-dark">{item.label}</span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}

export function Qty({
  value,
  max,
  onChange,
}: {
  value: number;
  max: number;
  onChange: (n: number) => void;
}) {
  return (
    <div className="inline-flex items-center border border-line bg-white">
      <button
        type="button"
        className="grid size-11 place-items-center text-lg"
        aria-label="Decrease quantity"
        onClick={() => onChange(Math.max(1, value - 1))}
        disabled={value <= 1}
      >
        −
      </button>
      <span className="min-w-8 text-center text-sm" aria-live="polite">
        {value}
      </span>
      <button
        type="button"
        className="grid size-11 place-items-center text-lg"
        aria-label="Increase quantity"
        onClick={() => onChange(Math.min(max, value + 1))}
        disabled={value >= max}
      >
        +
      </button>
    </div>
  );
}

export function EmptyState({
  eyebrow,
  title,
  text,
  action,
}: {
  eyebrow: string;
  title: string;
  text: string;
  action?: ReactNode;
}) {
  return (
    <div className="mx-auto max-w-lg px-5 py-20 text-center">
      <p className="eyebrow text-muted">{eyebrow}</p>
      <h1 className="title mt-3 text-dark">{title}</h1>
      <p className="mt-4 text-muted">{text}</p>
      {action ? <div className="mt-8">{action}</div> : null}
    </div>
  );
}

export function NotFoundView({ title = "This page has left the kiln" }: { title?: string }) {
  return (
    <EmptyState
      eyebrow="404"
      title={title}
      text="The page or piece you asked for is not on the shelf."
      action={
        <Link to="/shop" className="btn btn-primary">
          Shop the collection
        </Link>
      }
    />
  );
}

export function Field({
  label,
  error,
  children,
}: {
  label: string;
  error?: string;
  children: ReactNode;
}) {
  return (
    <label className="field">
      <span className="field-label">{label}</span>
      {children}
      {error ? <span className="field-error">{error}</span> : null}
    </label>
  );
}

export function emailOk(value: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value.trim());
}

export function ThemeSelect({
  label,
  labelledBy,
  value,
  onChange,
  options,
}: {
  label?: string;
  labelledBy?: string;
  value: string;
  onChange: (value: string) => void;
  options: { value: string; label: string }[];
}) {
  const [open, setOpen] = useState(false);
  const [up, setUp] = useState(false);
  const [active, setActive] = useState(0);
  const root = useRef<HTMLDivElement>(null);
  const btn = useRef<HTMLButtonElement>(null);
  const listId = useId();
  const labelId = useId();
  const selected = Math.max(0, options.findIndex((o) => o.value === value));

  useEffect(() => {
    if (!open) return;
    function onDoc(e: MouseEvent) {
      if (!root.current?.contains(e.target as Node)) setOpen(false);
    }
    document.addEventListener("mousedown", onDoc);
    return () => document.removeEventListener("mousedown", onDoc);
  }, [open]);

  function place() {
    const rect = btn.current?.getBoundingClientRect();
    if (!rect) return;
    const below = window.innerHeight - rect.bottom;
    setUp(below < 220 && rect.top > below);
  }

  function openMenu() {
    place();
    setActive(selected);
    setOpen(true);
  }

  function choose(next: string) {
    onChange(next);
    setOpen(false);
    btn.current?.focus();
  }

  function onButtonKey(e: KeyboardEvent<HTMLButtonElement>) {
    if (e.key === "ArrowDown" || e.key === "ArrowUp") {
      e.preventDefault();
      if (!open) {
        openMenu();
        return;
      }
      setActive((i) => {
        const n = options.length;
        if (!n) return 0;
        return e.key === "ArrowDown" ? (i + 1) % n : (i - 1 + n) % n;
      });
    } else if (e.key === "Home" && open) {
      e.preventDefault();
      setActive(0);
    } else if (e.key === "End" && open) {
      e.preventDefault();
      setActive(Math.max(0, options.length - 1));
    } else if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      if (!open) openMenu();
      else if (options[active]) choose(options[active].value);
    } else if (e.key === "Escape") {
      setOpen(false);
    }
  }

  const current = options.find((o) => o.value === value)?.label ?? "Choose";
  const nameId = label ? labelId : labelledBy;

  return (
    <div className="theme-select" ref={root}>
      {label ? (
        <span id={labelId} className="field-label">
          {label}
        </span>
      ) : null}
      <button
        ref={btn}
        type="button"
        className="theme-select-btn"
        aria-haspopup="listbox"
        aria-expanded={open}
        aria-controls={open ? listId : undefined}
        aria-labelledby={nameId}
        onClick={() => (open ? setOpen(false) : openMenu())}
        onKeyDown={onButtonKey}
      >
        <span className="min-w-0">{current}</span>
        <ChevronDown size={16} strokeWidth={1.5} aria-hidden="true" />
      </button>
      {open ? (
        <ul id={listId} role="listbox" aria-labelledby={nameId} className={`theme-select-menu${up ? " is-up" : ""}`}>
          {options.map((opt, i) => (
            <li key={opt.value} role="none">
              <button
                type="button"
                role="option"
                aria-selected={opt.value === value}
                className={`theme-select-option${i === active ? " is-active" : ""}`}
                onMouseEnter={() => setActive(i)}
                onClick={() => choose(opt.value)}
              >
                {opt.label}
              </button>
            </li>
          ))}
        </ul>
      ) : null}
    </div>
  );
}
