export const img = {
  hero: "/images/hero.jpg",
  heroBlend: "/images/hero-blend.jpg",
  heroClose: "/images/hero-close.jpg",
  cup: "/images/cup.jpg",
  bowls: "/images/bowls.jpg",
  vase: "/images/vase.jpg",
  plates: "/images/plates.jpg",
  jug: "/images/jug.jpg",
  wheel: "/images/wheel.jpg",
  clay: "/images/clay.jpg",
  kiln: "/images/kiln.jpg",
  earth: "/images/earth.jpg",
  mugs: "/images/mugs.jpg",
  planter: "/images/planter.jpg",
  home: "/images/home.jpg",
  bottle: "/images/bottle.jpg",
  bowl: "/images/bowl.jpg",
  hands: "/images/hands.jpg",
  shelf: "/images/shelf.jpg",
  wall: "/images/wall.jpg",
  leaf: "/images/leaf-vase.jpg",
  line: "/images/line-pots.jpg",
  desert: "/images/desert-cups.jpg",
  distressed: "/images/distressed.jpg",
  monstera: "/images/monstera.jpg",
  succulents: "/images/succulents.jpg",
  face: "/images/face-vase.jpg",
  boho: "/images/boho-planter.jpg",
} as const;

export type CategorySlug = "mugs" | "bowls-plates" | "vases" | "planters" | "others";

export type Product = {
  id: string;
  slug: string;
  name: string;
  category: CategorySlug;
  price: number;
  description: string;
  story: string;
  material: string;
  finish: string;
  dimensions: string;
  weight: string;
  care: string;
  images: string[];
  stock: number;
  featured: boolean;
  foodSafe: boolean;
  archive?: string;
  tags: string[];
};

export const categories: {
  slug: CategorySlug;
  name: string;
  blurb: string;
  number: string;
  image: string;
}[] = [
  { slug: "mugs", name: "Mugs", blurb: "For quiet moments", number: "01", image: img.mugs },
  { slug: "bowls-plates", name: "Plates & Bowls", blurb: "For shared tables", number: "02", image: img.plates },
  { slug: "planters", name: "Planters", blurb: "For greener spaces", number: "03", image: img.planter },
  { slug: "vases", name: "Vases", blurb: "For meaningful corners", number: "04", image: img.vase },
  { slug: "others", name: "Others", blurb: "Unique pieces", number: "05", image: img.wall },
];

const careFood = "Dishwasher gentle, or wash by hand. Avoid sudden temperature changes.";
const careDry = "Wipe with a soft, dry cloth. Not intended for food or prolonged water.";

export const products: Product[] = [
  {
    id: "p02",
    slug: "espresso-cup",
    name: "Espresso Cup",
    category: "mugs",
    price: 1400,
    description: "A small speckled cup for the first quiet cup of the day. The rim is slightly uneven, the way a hand leaves it.",
    story: "Thrown in a short series and glazed in a warm cream slip that breaks to brown on the lip.",
    material: "Stoneware",
    finish: "Speckled cream glaze",
    dimensions: "H 6.5 cm × Ø 7 cm",
    weight: "180 g",
    care: careFood,
    images: [img.cup, img.mugs, img.desert],
    stock: 14,
    featured: true,
    foodSafe: true,
    archive: "01",
    tags: ["cup", "coffee", "speckle", "morning"],
  },
  {
    id: "p03",
    slug: "serving-bowl",
    name: "Serving Bowl",
    category: "bowls-plates",
    price: 2100,
    description: "A generous bowl for fruit, noodles, or a salad meant to be passed. The walls stay thick enough to feel steady in the hand.",
    story: "Nested in threes on the studio shelf, each one a little different in the belly.",
    material: "Stoneware",
    finish: "Matte oatmeal",
    dimensions: "H 8 cm × Ø 18 cm",
    weight: "640 g",
    care: careFood,
    images: [img.bowls, img.bowl],
    stock: 9,
    featured: false,
    foodSafe: true,
    archive: "02",
    tags: ["bowl", "table", "serving"],
  },
  {
    id: "p04",
    slug: "handmade-vase",
    name: "Handmade Vase",
    category: "vases",
    price: 2800,
    description: "A round speckled vase with a short neck, happy holding a few dried stems or standing empty.",
    story: "The speckles come from iron in the clay, not from a printed pattern.",
    material: "Speckled stoneware",
    finish: "Satin cream",
    dimensions: "H 18 cm × Ø 14 cm",
    weight: "780 g",
    care: careDry,
    images: [img.vase, img.shelf, img.leaf],
    stock: 6,
    featured: true,
    foodSafe: false,
    archive: "03",
    tags: ["vase", "dried flowers", "speckle"],
  },
  {
    id: "p05",
    slug: "ceramic-plate",
    name: "Ceramic Plate",
    category: "bowls-plates",
    price: 1600,
    description: "A dinner plate with a quiet rim and a warm sand surface. It stacks, but never looks factory-matched.",
    story: "Pressed over a hump mold, then finished on the wheel so the edge stays soft.",
    material: "Stoneware",
    finish: "Matte sand",
    dimensions: "H 2.5 cm × Ø 26 cm",
    weight: "720 g",
    care: careFood,
    images: [img.plates, img.bowls],
    stock: 18,
    featured: false,
    foodSafe: true,
    archive: "04",
    tags: ["plate", "dinner", "table"],
  },
  {
    id: "p06",
    slug: "clay-jug",
    name: "Clay Jug",
    category: "others",
    price: 3200,
    description: "A small unglazed jug with one handle. Use it for dried stems, or as a sculptural pourer on a dry shelf.",
    story: "Left unglazed so the clay color stays honest. Not for storing water.",
    material: "Terracotta",
    finish: "Matte, unglazed",
    dimensions: "H 16 cm × Ø 12 cm",
    weight: "540 g",
    care: careDry,
    images: [img.jug, img.wall],
    stock: 5,
    featured: false,
    foodSafe: false,
    archive: "05",
    tags: ["jug", "pitcher", "unglazed"],
  },
  {
    id: "p01",
    slug: "earth-vessel",
    name: "The Earth Vessel",
    category: "vases",
    price: 8400,
    description: "A sculptural form with raw texture and timeless presence. Each vessel is uniquely handcrafted, embracing the natural variations of clay and fire.",
    story: "Built from coarse earthen clay and fired once, so the surface keeps the marks of the hand and the kiln.",
    material: "Natural clay",
    finish: "Matte, unglazed",
    dimensions: "H 18 cm × W 22 cm",
    weight: "1.4 kg (approx.)",
    care: "Wipe with a soft, dry cloth.",
    images: [img.earth, img.hero, img.shelf],
    stock: 3,
    featured: true,
    foodSafe: false,
    tags: ["vessel", "sculpture", "featured", "unglazed"],
  },
  {
    id: "p07",
    slug: "dawn-mug",
    name: "Dawn Mug",
    category: "mugs",
    price: 1700,
    description: "A taller everyday mug in the same speckled family as the espresso cup, with a handle that sits close to the body.",
    story: "Named for the hour it was meant for. The glaze pools warmer at the foot.",
    material: "Stoneware",
    finish: "Speckled cream glaze",
    dimensions: "H 9 cm × Ø 8 cm",
    weight: "280 g",
    care: careFood,
    images: [img.mugs, img.cup],
    stock: 11,
    featured: false,
    foodSafe: true,
    tags: ["mug", "coffee", "tea"],
  },
  {
    id: "p08",
    slug: "grain-bowl",
    name: "Grain Bowl",
    category: "bowls-plates",
    price: 1900,
    description: "A single deep bowl with a soft matte oatmeal surface. Heavy enough to stay put, light enough to carry.",
    story: "Trimmed thin at the lip and left thicker at the base, the way porridge bowls used to be.",
    material: "Stoneware",
    finish: "Matte oatmeal",
    dimensions: "H 7 cm × Ø 15 cm",
    weight: "420 g",
    care: careFood,
    images: [img.bowl, img.bowls],
    stock: 8,
    featured: false,
    foodSafe: true,
    tags: ["bowl", "breakfast"],
  },
  {
    id: "p09",
    slug: "olive-planter",
    name: "Olive Planter",
    category: "planters",
    price: 2400,
    description: "A straightforward terracotta planter with a drainage hole and room for a small herb or olive start.",
    story: "Thrown thick so it can live on a windowsill and still feel like clay, not plastic.",
    material: "Terracotta",
    finish: "Matte, unglazed",
    dimensions: "H 14 cm × Ø 15 cm",
    weight: "690 g",
    care: "Empty standing water from the saucer. Outdoor frost can crack raw clay.",
    images: [img.planter, img.monstera],
    stock: 7,
    featured: true,
    foodSafe: false,
    tags: ["planter", "plant", "herb"],
  },
  {
    id: "p10",
    slug: "hearth-planter",
    name: "Hearth Planter",
    category: "planters",
    price: 2900,
    description: "A wider planted pot for a trailing plant. The surface is left with visible brush and throwing lines.",
    story: "A studio experiment in painted slip, kept because the color still felt like earth.",
    material: "Stoneware",
    finish: "Painted satin",
    dimensions: "H 16 cm × Ø 18 cm",
    weight: "980 g",
    care: "Wipe the outside. Do not soak the foot.",
    images: [img.monstera, img.boho, img.succulents],
    stock: 4,
    featured: false,
    foodSafe: false,
    tags: ["planter", "plant", "painted"],
  },
  {
    id: "p11",
    slug: "window-bottle",
    name: "Window Bottle",
    category: "vases",
    price: 2300,
    description: "A tall, narrow bottle for a single branch. It stands calmly on a shelf and needs very little around it.",
    story: "Pulled tall from a small ball of clay. No two necks land in the same place.",
    material: "Terracotta",
    finish: "Matte, unglazed",
    dimensions: "H 28 cm × Ø 10 cm",
    weight: "620 g",
    care: careDry,
    images: [img.bottle, img.shelf],
    stock: 10,
    featured: false,
    foodSafe: false,
    tags: ["bottle", "vase", "branch"],
  },
  {
    id: "p12",
    slug: "studio-pitcher",
    name: "Studio Pitcher",
    category: "others",
    price: 3600,
    description: "A whitewashed pitcher with the clay showing through at the shoulder. Decorative, and good for dried stems.",
    story: "The white slip is brushed on and then partly wiped back, so the terracotta stays visible.",
    material: "Terracotta",
    finish: "Wiped white slip",
    dimensions: "H 24 cm × Ø 16 cm",
    weight: "1.1 kg",
    care: careDry,
    images: [img.distressed, img.jug],
    stock: 2,
    featured: false,
    foodSafe: false,
    tags: ["pitcher", "white", "decorative"],
  },
  {
    id: "p13",
    slug: "linen-tumbler",
    name: "Linen Tumbler",
    category: "mugs",
    price: 1300,
    description: "A straight-sided tumbler in a pale clay body. This firing is spoken for — the next one is on the drying rack.",
    story: "A small edition. When the shelf is empty, we do not pretend otherwise.",
    material: "Stoneware",
    finish: "Satin linen",
    dimensions: "H 9 cm × Ø 8 cm",
    weight: "250 g",
    care: careFood,
    images: [img.desert, img.cup],
    stock: 0,
    featured: false,
    foodSafe: true,
    tags: ["tumbler", "cup", "sold out"],
  },
  {
    id: "p14",
    slug: "mesa-cup",
    name: "Mesa Cup",
    category: "mugs",
    price: 1500,
    description: "A terracotta cup with a pale incised landscape. The drawing is scratched in before the fire, so the line stays.",
    story: "Inspired by late light on a dry hill, not by a printed transfer.",
    material: "Terracotta",
    finish: "Incised slip",
    dimensions: "H 8 cm × Ø 9 cm",
    weight: "260 g",
    care: careFood,
    images: [img.desert, img.line],
    stock: 12,
    featured: false,
    foodSafe: true,
    tags: ["cup", "incised", "landscape"],
  },
  {
    id: "p15",
    slug: "terrace-pot",
    name: "Terrace Pot",
    category: "planters",
    price: 2200,
    description: "A low terracotta cachepot with a simple white line drawing of sun and steps. Drainage hole included.",
    story: "The line work is done with a slip trailer, quickly, while the clay is leather hard.",
    material: "Terracotta",
    finish: "White slip line",
    dimensions: "H 10 cm × Ø 12 cm",
    weight: "480 g",
    care: "Suitable for a small succulent. Protect from hard frost.",
    images: [img.line, img.planter],
    stock: 6,
    featured: false,
    foodSafe: false,
    tags: ["planter", "succulent", "line"],
  },
  {
    id: "p16",
    slug: "quiet-plate",
    name: "Quiet Plate",
    category: "bowls-plates",
    price: 1450,
    description: "A smaller plate for bread, cheese, or a single peach. The surface is matte and slightly sandy to the touch.",
    story: "Paired with the dinner plate, but sold on its own so the table can stay spare.",
    material: "Stoneware",
    finish: "Matte sand",
    dimensions: "H 2 cm × Ø 18 cm",
    weight: "390 g",
    care: careFood,
    images: [img.plates, img.bowl],
    stock: 16,
    featured: false,
    foodSafe: true,
    tags: ["plate", "side", "bread"],
  },
  {
    id: "p17",
    slug: "kinship-vessel",
    name: "Kinship Vessel",
    category: "others",
    price: 4800,
    description: "A painted vessel of overlapping faces, meant as a studio piece rather than a flower jar.",
    story: "One of a short painted series. The clay form is thrown first; the faces come after the bisque.",
    material: "Stoneware",
    finish: "Painted matte",
    dimensions: "H 26 cm × Ø 18 cm",
    weight: "1.3 kg",
    care: careDry,
    images: [img.face, img.leaf],
    stock: 2,
    featured: false,
    foodSafe: false,
    tags: ["painted", "art", "vessel", "faces"],
  },
];

export type Article = {
  slug: string;
  title: string;
  date: string;
  category: string;
  excerpt: string;
  image: string;
  paragraphs: string[];
};

export const articles: Article[] = [
  {
    slug: "the-beauty-in-imperfection",
    title: "The Beauty in Imperfection",
    date: "Sep 12, 2024",
    category: "Craft",
    excerpt: "A wobble in the rim is not a flaw we sand away. It is the record of a hand that was actually there.",
    image: img.hands,
    paragraphs: [
      "People sometimes write to ask if a piece can be made perfectly even. We understand the wish. Most of what we buy is designed to disappear into a matching set. Clay does not work that way, and we do not ask it to.",
      "When a cup leaves the wheel, the rim still carries the last pass of a finger. In the kiln, iron in the body specks the glaze, and a flame that ran hotter on one side leaves a warmer blush. Those are not mistakes to apologize for. They are how you know the object was not pressed in a mold.",
      "Living with that kind of variation changes a table. Two bowls from the same afternoon will not stack into silence. One will sit a little prouder. You will reach for the one that fits your hand. That is the beauty we mean: not distress for its own sake, but evidence.",
    ],
  },
  {
    slug: "inside-our-firing-process",
    title: "Inside Our Firing Process",
    date: "Aug 28, 2024",
    category: "Studio",
    excerpt: "Heat is the part of the making you cannot touch. It decides the color, the ring, and whether a pot survives.",
    image: img.kiln,
    paragraphs: [
      "Before a piece ever sees flame, it dries slowly on a rack. Rush that, and the water still locked in the walls will turn to steam and open a crack. We wait longer than feels efficient.",
      "The first fire, the bisque, is a quiet one. It hardens the form so it can be handled, glazed, and trusted. The second fire is the one that changes the clay for good. We bring the kiln up slowly, hold it, and let it cool without being opened early. Opening a hot kiln is how pots are lost.",
      "What you see as a blush, a speckle, or a darker foot is the record of that heat. We do not use it to make every object identical. We use it to finish what the hand started.",
    ],
  },
  {
    slug: "creating-a-kinder-slower-home",
    title: "Creating a Kinder, Slower Home",
    date: "Aug 10, 2024",
    category: "Living",
    excerpt: "A few good objects, used every day, do more for a room than a shelf of things you are afraid to touch.",
    image: img.home,
    paragraphs: [
      "We make vessels, not lifestyles. Still, the reason to keep a handmade cup is ordinary: you will use it tomorrow. The weight in the hand is a small pause between the kettle and the rest of the morning.",
      "A slower home is not a styled one. It is a room where the plate you like is the plate you eat from, and the vase is allowed to be empty for a week. Clay is good at that. It does not look abandoned when it is not performing.",
      "If you are starting, start with one thing you will reach for without thinking. A mug. A bowl. Let the rest of the room stay quiet.",
    ],
  },
  {
    slug: "what-the-clay-remembers",
    title: "What the Clay Remembers",
    date: "Jul 2, 2024",
    category: "Material",
    excerpt: "We work with earthen clay and stoneware bodies chosen for how they feel wet, not for how they photograph.",
    image: img.clay,
    paragraphs: [
      "Clay is ground rock and river silt, aged and wedged until the air is out of it. The wedging matters. A pocket of air is a future crack, and a crack in the kiln is a piece we will not sell.",
      "Terracotta stays porous and warm. It wants to be a planter, a dry jug, a sculptural vessel. Stoneware, fired hotter, vitrifies and can hold a glaze that is safe for food. We say which is which on every piece, because a beautiful pot can still be the wrong tool.",
      "Nothing in the studio is a secret recipe. The standard is simpler: know the material, fire it honestly, and only send out what survived.",
    ],
  },
];

export const processSteps = [
  { n: "01", title: "Sourcing", text: "Natural clay from the earth", image: img.clay },
  { n: "02", title: "Shaping", text: "Guided by hand and intuition", image: img.wheel },
  { n: "03", title: "Firing", text: "Transformed by heat", image: img.kiln },
  { n: "04", title: "Finishing", text: "Unique textures, for lasting beauty", image: img.bowl },
];

export const faqs = [
  {
    q: "Will two pieces look identical?",
    a: "No. Size, speckles, and the warmth of the fire shift from piece to piece. That variation is part of the work, not a defect.",
  },
  {
    q: "Are the mugs and plates safe for food?",
    a: "Glazed stoneware marked food-safe is for everyday eating and drinking. Unglazed terracotta vessels, jugs, and planters are decorative or for plants — not for storing water or serving food.",
  },
  {
    q: "How does shipping work in this demo?",
    a: "Checkout estimates ₹199, or complimentary shipping over ₹3,999. This is a front-end demo: no parcel is sent and no carrier tracking exists.",
  },
  {
    q: "Will my card be charged?",
    a: "No. The payment step is a mock. Card numbers stay in the browser only for that step and are not saved.",
  },
  {
    q: "Can I return a piece?",
    a: "In a working studio we would accept unused pieces within 14 days. Here, orders live only in this browser, so there is nothing to ship back.",
  },
  {
    q: "How should I care for unglazed clay?",
    a: "Wipe with a soft dry cloth. Do not soak the foot, and do not leave raw terracotta in a hard frost.",
  },
  {
    q: "Is the account real?",
    a: "It is a demo profile stored in this browser. Passwords are not sent to a server, and signing out only clears the profile on this device.",
  },
  {
    q: "Do you take commissions?",
    a: "The contact form records a note on this device only. It does not email the studio.",
  },
];

export function categoryBySlug(slug: string) {
  return categories.find((c) => c.slug === slug);
}

export function categoryName(slug: CategorySlug) {
  return categories.find((c) => c.slug === slug)?.name ?? slug;
}

export function getProduct(slug: string) {
  return products.find((p) => p.slug === slug);
}

export function archiveProducts() {
  return products.filter((p) => p.archive).sort((a, b) => (a.archive ?? "").localeCompare(b.archive ?? ""));
}

export function relatedProducts(slug: string) {
  const current = getProduct(slug);
  if (!current) return [];
  const same = products.filter((p) => p.slug !== slug && p.category === current.category);
  const rest = products.filter((p) => p.slug !== slug && p.category !== current.category);
  return [...same, ...rest].slice(0, 4);
}

export function getArticle(slug: string) {
  return articles.find((a) => a.slug === slug);
}

export function searchAll(q: string) {
  const s = q.trim().toLowerCase();
  if (!s) return { products: [] as Product[], articles: [] as Article[] };
  return {
    products: products.filter((p) =>
      [p.name, p.description, p.story, p.category, p.material, p.finish, ...p.tags]
        .join(" ")
        .toLowerCase()
        .includes(s),
    ),
    articles: articles.filter((a) =>
      [a.title, a.excerpt, a.category, ...a.paragraphs].join(" ").toLowerCase().includes(s),
    ),
  };
}

export const sorts = ["featured", "price-asc", "price-desc", "name"] as const;
export type SortKey = (typeof sorts)[number];
export const priceBands = ["all", "under-1500", "1500-3500", "over-3500"] as const;
export type PriceBand = (typeof priceBands)[number];

export type ShopSearch = {
  q?: string;
  sort?: SortKey;
  price?: PriceBand;
  avail?: boolean;
};

export type ShopQuery = {
  q: string;
  sort: SortKey;
  price: PriceBand;
  avail: boolean;
};

export function compactSearch(query: ShopQuery): ShopSearch {
  const search: ShopSearch = {};
  if (query.q) search.q = query.q;
  if (query.sort !== "featured") search.sort = query.sort;
  if (query.price !== "all") search.price = query.price;
  if (query.avail) search.avail = true;
  return search;
}

export function shopSearchSchema(search: {
  q?: unknown;
  sort?: unknown;
  price?: unknown;
  avail?: unknown;
}): ShopSearch {
  const sort = sorts.includes(search.sort as SortKey) ? (search.sort as SortKey) : "featured";
  const price = priceBands.includes(search.price as PriceBand) ? (search.price as PriceBand) : "all";
  return compactSearch({
    q: typeof search.q === "string" ? search.q : "",
    sort,
    price,
    avail: search.avail === true || search.avail === "1" || search.avail === "true",
  });
}

export function toShopQuery(search: ShopSearch): ShopQuery {
  return {
    q: search.q ?? "",
    sort: search.sort ?? "featured",
    price: search.price ?? "all",
    avail: search.avail ?? false,
  };
}

export function filterProducts(
  list: Product[],
  opts: { category?: CategorySlug; q: string; sort: SortKey; price: PriceBand; avail: boolean },
) {
  let out = list.filter((p) => {
    if (opts.category && p.category !== opts.category) return false;
    if (opts.avail && p.stock <= 0) return false;
    if (opts.price === "under-1500" && p.price >= 1500) return false;
    if (opts.price === "1500-3500" && (p.price < 1500 || p.price > 3500)) return false;
    if (opts.price === "over-3500" && p.price <= 3500) return false;
    if (opts.q) {
      const hay = `${p.name} ${p.description} ${p.tags.join(" ")} ${p.category}`.toLowerCase();
      if (!hay.includes(opts.q.trim().toLowerCase())) return false;
    }
    return true;
  });
  if (opts.sort === "price-asc") out = [...out].sort((a, b) => a.price - b.price);
  else if (opts.sort === "price-desc") out = [...out].sort((a, b) => b.price - a.price);
  else if (opts.sort === "name") out = [...out].sort((a, b) => a.name.localeCompare(b.name));
  else out = [...out].sort((a, b) => Number(b.featured) - Number(a.featured) || a.name.localeCompare(b.name));
  return out;
}
