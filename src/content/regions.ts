/**
 * Region nodes for the global intelligence map. Coordinates are expressed as
 * percentages of an equirectangular world (0–100 left→right, top→bottom),
 * so no projection library is needed at runtime.
 */

export type Region = {
  name: string;
  x: number;
  y: number;
};

export const regions: Region[] = [
  { name: "North America", x: 22, y: 38 },
  { name: "Latin America", x: 31, y: 66 },
  { name: "United Kingdom", x: 46, y: 31 },
  { name: "Europe", x: 51, y: 34 },
  { name: "Middle East", x: 58, y: 46 },
  { name: "Africa", x: 52, y: 60 },
  { name: "South Asia", x: 68, y: 49 },
  { name: "Southeast Asia", x: 76, y: 58 },
  { name: "East Asia", x: 80, y: 40 },
  { name: "Oceania", x: 84, y: 74 },
];
