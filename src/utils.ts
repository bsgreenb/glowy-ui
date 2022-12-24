export const hexToRgba = (hexString: string, opacity?: number): string => {
  const hexValue = hexString.replace("#", "");

  const r = parseInt(hexValue.substring(0, 2), 16);
  const g = parseInt(hexValue.substring(2, 4), 16);
  const b = parseInt(hexValue.substring(4, 6), 16);
  if (opacity) {
    const a = opacity / 100;
    return `rgba(${r}, ${g}, ${b}, ${a})`;
  } else {
    return `rgba(${r}, ${g}, ${b}, 1)`;
  }
};

const BASE_FONT_SIZE_PX = 16;
const EM_PRECISION = 3;
export const formatEm = (em: string | number) =>
  `${Number(em).toFixed(EM_PRECISION)}em`;
export const formatPx = (px: string | number) => `${Number(px).toFixed(0)}px`;
export const pxToEm = (px: number) =>
  (px / BASE_FONT_SIZE_PX).toFixed(EM_PRECISION);
export const emToPx = (em: number) => (em * BASE_FONT_SIZE_PX).toFixed(0);

export const defaultParagraph = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean et
neque id purus hendrerit iaculis. Donec cursus risus sapien, in
convallis ante suscipit non.`;

export function objectMap<T>(
  obj: Record<string, T>,
  fn: (v: T, k?: string, i?: number) => string | number
): Record<string, string | number> {
  return Object.fromEntries(
    Object.entries(obj).map(([k, v]: [string, T], i) => [k, fn(v, k, i)])
  );
}
