// const SIZE: { id: 'X' | 'Y' | 'Z'; price: number }[] = [
const SIZE: { id: string; price: number }[] = [
  { id: "X", price: 1000 },
  { id: "Y", price: 2000 },
  { id: "Z", price: 3000 },
];
//] as const;

/* first try
type Option = {
  [key: string]: number;
};
const cart: Option = {
*/

/* answer

 */

const cart = {
  X: 1,
  Y: 2,
  Z: 3,
};

const total = SIZE.reduce(
  (curr, size) => curr + (cart[size.id] ?? 0) * size.price,
  0
);
