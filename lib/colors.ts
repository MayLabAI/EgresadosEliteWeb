export interface ColorOption {
  name: string;
  hex: string;
}

export interface ColorGroup {
  family: string;
  colors: ColorOption[];
}

// Paleta completa de colores textiles argentinos
export const COLOR_GROUPS: ColorGroup[] = [
  {
    family: "Morados",
    colors: [
      { name: "VIOLETA LIGHT", hex: "#9966CC" },
      { name: "VIOLETA GRAPE", hex: "#7B2FBE" },
      { name: "LILA", hex: "#C8A2C8" },
      { name: "PETUNIA", hex: "#8B5E9B" },
    ],
  },
  {
    family: "Rosas",
    colors: [
      { name: "FUCSIA BRILLANTE", hex: "#FF0090" },
      { name: "ROSA POP", hex: "#FF69B4" },
      { name: "ROSA CHICLE", hex: "#FF85A1" },
      { name: "ROSA PALO", hex: "#F4A8BB" },
    ],
  },
  {
    family: "Rojos",
    colors: [
      { name: "ROJO", hex: "#CC0000" },
      { name: "ROJO MANZANA", hex: "#C41E3A" },
      { name: "BORDO", hex: "#7B1F2E" },
      { name: "ROJO ELITE", hex: "#8B1414" },
    ],
  },
  {
    family: "Naranjas",
    colors: [
      { name: "SALMON", hex: "#E8856A" },
      { name: "NARANJA", hex: "#FF6600" },
      { name: "NARANJA MANGO", hex: "#FF8C00" },
    ],
  },
  {
    family: "Amarillos",
    colors: [
      { name: "AMARILLO", hex: "#FFE033" },
      { name: "AMARILLO FLUO", hex: "#DFFF00" },
      { name: "DORADO", hex: "#C9A84C" },
    ],
  },
  {
    family: "Verdes",
    colors: [
      { name: "VERDE FLUO", hex: "#39FF14" },
      { name: "VERDE JADE", hex: "#00A86B" },
      { name: "VERDE MILITAR", hex: "#556B2F" },
      { name: "VERDE OLIVA", hex: "#6B7B3A" },
      { name: "VERDE BOTELLA", hex: "#1A4731" },
    ],
  },
  {
    family: "Azules",
    colors: [
      { name: "CELESTE", hex: "#7EC8E3" },
      { name: "TURQUESA", hex: "#30D5C8" },
      { name: "AZUL CIELO", hex: "#4A90D9" },
      { name: "AZUL EGEO", hex: "#1F75FE" },
      { name: "AZUL FRANCIA", hex: "#0072BB" },
      { name: "AZUL MARINO", hex: "#001F5B" },
    ],
  },
  {
    family: "Blancos",
    colors: [
      { name: "BLANCO", hex: "#FFFFFF" },
      { name: "IVORY", hex: "#FFFAED" },
      { name: "CREMA", hex: "#F5F0E4" },
    ],
  },
  {
    family: "Grises",
    colors: [
      { name: "GRIS CLARO", hex: "#D3D3D3" },
      { name: "GRIS MEDIO", hex: "#9B9B9B" },
      { name: "GRIS MELANGE", hex: "#808080" },
      { name: "GRIS OSCURO", hex: "#4A4A4A" },
      { name: "ANTRACITA", hex: "#2B2B2B" },
    ],
  },
  {
    family: "Negros",
    colors: [
      { name: "NEGRO", hex: "#0A0A0A" },
    ],
  },
  {
    family: "Marrones",
    colors: [
      { name: "MARRON", hex: "#7B3F00" },
      { name: "CHOCOLATE", hex: "#3D1C02" },
      { name: "CAMEL", hex: "#C19A6B" },
    ],
  },
];

// Lista plana de todos los colores
export const ALL_COLORS: ColorOption[] = COLOR_GROUPS.flatMap((g) => g.colors);

// Gradientes predefinidos (pares de colores)
export interface GradientOption {
  name: string;
  from: string;
  to: string;
  direction: "vertical" | "horizontal" | "diagonal";
}

export const GRADIENT_PRESETS: GradientOption[] = [
  { name: "Azul marino → Celeste", from: "#001F5B", to: "#7EC8E3", direction: "vertical" },
  { name: "Bordo → Rojo", from: "#7B1F2E", to: "#CC0000", direction: "vertical" },
  { name: "Negro → Gris", from: "#0A0A0A", to: "#808080", direction: "vertical" },
  { name: "Verde oscuro → Verde jade", from: "#1A4731", to: "#00A86B", direction: "vertical" },
  { name: "Violeta → Rosa", from: "#7B2FBE", to: "#FF69B4", direction: "vertical" },
  { name: "Naranja → Amarillo", from: "#FF6600", to: "#FFE033", direction: "vertical" },
  { name: "Azul → Turquesa", from: "#0072BB", to: "#30D5C8", direction: "vertical" },
  { name: "Rojo → Naranja", from: "#CC0000", to: "#FF6600", direction: "vertical" },
];

// Zonas de la prenda
export type GarmentZone = "all" | "body" | "sleeves" | "hood" | "details";

export const ZONE_LABELS: Record<GarmentZone, string> = {
  all: "Toda la prenda",
  body: "Cuerpo",
  sleeves: "Mangas",
  hood: "Capucha",
  details: "Detalles",
};

// Posiciones de texto en la prenda
export interface TextPosition {
  id: string;
  label: string;
  x: number;  // SVG coordinate
  y: number;
  side: "front" | "back";
}

export const TEXT_POSITIONS: TextPosition[] = [
  { id: "chest-left", label: "Pecho izquierdo", x: 115, y: 165, side: "front" },
  { id: "chest-center", label: "Centro pecho", x: 150, y: 175, side: "front" },
  { id: "sleeve-left", label: "Manga izquierda", x: 45, y: 180, side: "front" },
  { id: "sleeve-right", label: "Manga derecha", x: 255, y: 180, side: "front" },
  { id: "back-top", label: "Espalda alta", x: 150, y: 145, side: "back" },
  { id: "back-center", label: "Espalda centro", x: 150, y: 185, side: "back" },
  { id: "back-bottom", label: "Espalda baja", x: 150, y: 235, side: "back" },
];
