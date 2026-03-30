/**
 * Cube state and sticker layout extracted from the original static/app.js flow.
 * Color cycle order matches the legacy CSS class list: orange → green → white → blue → yellow → red.
 */

export const INITIAL_RAW_STRING =
  'OOOOOOOOOGGGWWWBBBYYYGGGWWWBBBYYYGGGWWWBBBYYYRRRRRRRRR';

export const COLOR_CHARS = ['O', 'G', 'W', 'B', 'Y', 'R'];

export const CHAR_TO_FACE_CLASS = {
  O: 'orange-face',
  G: 'green-face',
  W: 'white-face',
  B: 'blue-face',
  Y: 'yellow-face',
  R: 'red-face',
};

/** Each face: CSS grid placement + 9 string indices (row-major 3×3 on that face). */
export const FACES = [
  {
    id: 'orange',
    label: 'Up',
    gridColumn: 2,
    gridRow: 1,
    stringIndices: [0, 1, 2, 3, 4, 5, 6, 7, 8],
  },
  {
    id: 'green',
    label: 'Left',
    gridColumn: 1,
    gridRow: 2,
    stringIndices: [9, 10, 11, 21, 22, 23, 33, 34, 35],
  },
  {
    id: 'white',
    label: 'Front',
    gridColumn: 2,
    gridRow: 2,
    stringIndices: [12, 13, 14, 24, 25, 26, 36, 37, 38],
  },
  {
    id: 'blue',
    label: 'Right',
    gridColumn: 3,
    gridRow: 2,
    stringIndices: [15, 16, 17, 27, 28, 29, 39, 40, 41],
  },
  {
    id: 'yellow',
    label: 'Back',
    gridColumn: 4,
    gridRow: 2,
    stringIndices: [18, 19, 20, 30, 31, 32, 42, 43, 44],
  },
  {
    id: 'red',
    label: 'Down',
    gridColumn: 2,
    gridRow: 3,
    stringIndices: [45, 46, 47, 48, 49, 50, 51, 52, 53],
  },
];

export function parseInitialStickers() {
  return INITIAL_RAW_STRING.split('');
}

export function cycleChar(c) {
  const i = COLOR_CHARS.indexOf(c);
  if (i === -1) {
    return COLOR_CHARS[0];
  }
  return COLOR_CHARS[(i + 1) % COLOR_CHARS.length];
}

export function stickersToScramble(stickers) {
  return stickers.join('');
}

export function solveUrl(scramble) {
  const q = encodeURIComponent(scramble);
  return `/api/Solve?scramble=${q}`;
}
