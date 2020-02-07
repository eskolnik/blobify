const A = [
  [1, 1, 1],
  [1, 0, 1],
  [1, 1, 1],
  [1, 0, 1],
  [1, 0, 1]
];
const B = [
  [1, 1, 0],
  [1, 0, 1],
  [1, 1, 0],
  [1, 0, 1],
  [1, 1, 0]
];
const C = [
  [0, 1, 1],
  [1, 0, 0],
  [1, 0, 0],
  [1, 0, 0],
  [0, 1, 1]
];
const D = [
  [1, 1, 0],
  [1, 0, 1],
  [1, 0, 1],
  [1, 0, 1],
  [1, 1, 0]
];
const E = [
  [1, 1, 1],
  [1, 0, 0],
  [1, 1, 1],
  [1, 0, 0],
  [1, 1, 1]
];
const F = [
  [1, 1, 1],
  [1, 0, 0],
  [1, 1, 1],
  [1, 0, 0],
  [1, 0, 0]
];
const G = [
  [0, 1, 1],
  [1, 0, 1],
  [1, 0, 1],
  [1, 0, 1],
  [0, 1, 1]
];
const H = [
  [1, 0, 1],
  [1, 0, 1],
  [1, 1, 1],
  [1, 0, 1],
  [1, 0, 1]
];
const I = [
  [1, 1, 1],
  [0, 1, 0],
  [0, 1, 0],
  [0, 1, 0],
  [1, 1, 1]
];
const J = [
  [0, 0, 1],
  [0, 0, 1],
  [0, 0, 1],
  [1, 0, 1],
  [1, 1, 1]
];
const K = [
  [1, 0, 1],
  [1, 0, 1],
  [1, 1, 0],
  [1, 0, 1],
  [1, 0, 1]
];
const L = [
  [1, 0, 0],
  [1, 0, 0],
  [1, 0, 0],
  [1, 0, 0],
  [1, 1, 1]
];
const M = [
  [1, 0, 1],
  [1, 1, 1],
  [1, 0, 1],
  [1, 0, 1],
  [1, 0, 1]
];
const N = [
  [1, 1, 1],
  [1, 0, 1],
  [1, 0, 1],
  [1, 0, 1],
  [1, 0, 1]
];
const O = [
  [1, 1, 1],
  [1, 0, 1],
  [1, 0, 1],
  [1, 0, 1],
  [1, 1, 1]
];
const P = [
  [1, 1, 1],
  [1, 0, 1],
  [1, 1, 1],
  [1, 0, 0],
  [1, 0, 0]
];
const Q = [
  [1, 1, 0],
  [1, 1, 0],
  [1, 1, 0],
  [1, 1, 0],
  [1, 1, 1]
];
const R = [
  [1, 1, 0],
  [1, 0, 1],
  [1, 1, 0],
  [1, 0, 1],
  [1, 0, 1]
];
const S = [
  [0, 1, 1],
  [1, 0, 0],
  [0, 1, 0],
  [0, 0, 1],
  [1, 1, 0]
];
const T = [
  [1, 1, 1],
  [0, 1, 0],
  [0, 1, 0],
  [0, 1, 0],
  [0, 1, 0]
];
const U = [
  [1, 0, 1],
  [1, 0, 1],
  [1, 0, 1],
  [1, 0, 1],
  [1, 1, 1]
];
const V = [
  [1, 0, 1],
  [1, 0, 1],
  [1, 0, 1],
  [1, 0, 1],
  [1, 1, 0]
];
const W = [
  [1, 0, 1],
  [1, 0, 1],
  [1, 0, 1],
  [1, 1, 1],
  [1, 0, 1]
];
const X = [
  [1, 0, 1],
  [1, 0, 1],
  [0, 1, 0],
  [1, 0, 1],
  [1, 0, 1]
];
const Y = [
  [1, 0, 1],
  [1, 0, 1],
  [0, 1, 0],
  [0, 1, 0],
  [0, 1, 0]
];
const Z = [
  [1, 1, 1],
  [0, 0, 1],
  [0, 1, 0],
  [1, 0, 0],
  [1, 1, 1]
];
const spaceChar = [
  [0, 0, 0],
  [0, 0, 0],
  [0, 0, 0],
  [0, 0, 0],
  [0, 0, 0]
];

const alphabet = {
  A: A,
  B: B,
  C: C,
  D: D,
  E: E,
  F: F,
  G: G,
  H: H,
  I: I,
  J: J,
  K: K,
  L: L,
  M: M,
  N: N,
  O: O,
  P: P,
  Q: Q,
  R: R,
  S: S,
  T: T,
  U: U,
  V: V,
  W: W,
  X: X,
  Y: Y,
  Z: Z,
  " ": spaceChar
};

const blob = n => `:partyblob${n % 10}:`;

const blobRenderer = (x, y) => blob(x + y);

const blackRenderer = () => ":black:";

const makeMaskRenderer = (
  mask,
  background = blobRenderer,
  foreground = blackRenderer
) => (x, y) => {
  if (mask[x][y] === 1) {
    return foreground(x, y);
  } else {
    return background(x, y);
  }
};

// return 2d array of blob backgrounds
const makeCanvas = (height, width, renderer = blobRenderer) => {
  let canvas = [];
  for (let x = 0; x < height; x++) {
    canvas[x] = [];
    for (let y = 0; y < width; y++) {
      canvas[x][y] = renderer(x, y);
    }
  }
  return canvas;
};

const getLetterMask = letter =>
  Object.keys(alphabet).includes(letter) ? alphabet[letter] : spaceChar;

const padRow = [0, 0, 0, 0, 0];

const padLetter = (letterMask, padding = true) => {
  const hPaddedLetter = letterMask.map(row => [0, ...row, 0]);
  //only apply vertical padding if flag is set
  return padding ? [padRow, ...hPaddedLetter, padRow] : hPaddedLetter;
};

const appendMask = (baseMask, newMask) =>
  baseMask.map((baseRow, index) => baseRow.concat(newMask[index]));

const stringToMask = (string, padding = true) =>
  string
    .toUpperCase()
    .split("")
    .map(char => padLetter(getLetterMask(char), padding))
    .reduce(appendMask);

const prettyPrint = canvas => canvas.map(line => line.join("")).join("\n");

const blobify = (string, padding = true, invert = false) => {
  if (!string || string.length <= 0) {
    return "";
  }
  const mask = stringToMask(string, padding);
  const foreground = invert ? blobRenderer : blackRenderer;
  const background = invert ? blackRenderer : blobRenderer;
  const renderer = makeMaskRenderer(mask, background, foreground);
  const canvas = makeCanvas(mask.length, mask[0].length, renderer);
  return prettyPrint(canvas);
};
