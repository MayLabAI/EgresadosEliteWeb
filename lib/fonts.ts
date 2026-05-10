export interface FontOption {
  name: string;
  cssVar: string;
  family: string;
  preview: string;
}

export const FONT_OPTIONS: FontOption[] = [
  {
    name: "Bebas Neue",
    cssVar: "--font-bebas",
    family: "var(--font-bebas), sans-serif",
    preview: "EGRESADOS 2025",
  },
  {
    name: "Anton",
    cssVar: "--font-anton",
    family: "var(--font-anton), sans-serif",
    preview: "EGRESADOS 2025",
  },
  {
    name: "Oswald",
    cssVar: "--font-oswald",
    family: "var(--font-oswald), sans-serif",
    preview: "Egresados 2025",
  },
  {
    name: "Bangers",
    cssVar: "--font-bangers",
    family: "var(--font-bangers), cursive",
    preview: "Egresados 2025",
  },
  {
    name: "Pacifico",
    cssVar: "--font-pacifico",
    family: "var(--font-pacifico), cursive",
    preview: "Egresados 2025",
  },
  {
    name: "Dancing Script",
    cssVar: "--font-dancing-script",
    family: "var(--font-dancing-script), cursive",
    preview: "Egresados 2025",
  },
  {
    name: "Permanent Marker",
    cssVar: "--font-permanent-marker",
    family: "var(--font-permanent-marker), cursive",
    preview: "Egresados 2025",
  },
  {
    name: "Inter Bold",
    cssVar: "--font-inter",
    family: "var(--font-inter), sans-serif",
    preview: "Egresados 2025",
  },
];
