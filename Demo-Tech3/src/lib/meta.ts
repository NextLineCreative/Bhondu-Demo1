export function meta(title: string, description: string) {
  const full = title.includes("Clay Pot") ? title : `${title} · Clay Pot`;
  return {
    meta: [
      { title: full },
      { name: "description", content: description },
    ],
  };
}
