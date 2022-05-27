import { IProduct } from "../types";

export const sorting = {
  byDesc: (a: IProduct, b: IProduct): number =>
    a.price > b.price ? -1 : b.price > a.price ? 1 : 0,
  byAsc: (a: IProduct, b: IProduct): number =>
    a.price > b.price ? 1 : b.price > a.price ? -1 : 0,
};

/**
 * @param array
 * @extends Array.every
 * @example
 * isSorted([0, 1, 2, 2]); // 1
 * isSorted([4, 3, 2]); // -1
 * isSorted([4, 3, 5]); // 0
 */
export const isSorted = (array: Array<IProduct>): number => {
  return array.every(
    (value, index) => !index || value.price >= array[index - 1].price
  )
    ? 1
    : array.every(
        (value, index) => !index || value.price <= array[index - 1].price
      )
    ? -1
    : 0;
};
