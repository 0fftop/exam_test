import { getProducts } from '../src/api'
import { IProduct, FilterType } from '../src/types';
import { productsService } from '../src/services';
import { sorting, isSorted } from '../src/util';

const ProductMock = {
    id: expect.any(Number),
    title: expect.any(String),
    price: expect.any(Number),
    description: expect.any(String),
    category: expect.any(String),
    image: expect.any(String),
    rating: {
        count: expect.any(Number),
        rate: expect.any(Number),
    },
};

const ArrayMock = [
  { price: 2 },
  { price: 4 },
  { price: 1 },
  { price: 3 },
  { price: 5 },
] as unknown as Array<IProduct>;
const SortedArrayMock = [
  { price: 5 },
  { price: 4 },
  { price: 3 },
  { price: 2 },
  { price: 1 },
] as unknown as Array<IProduct>;

describe("Testing product service", () => {
  beforeEach(() => console.log("Start testing product services"));
  afterEach(() => console.log("Product services testing finished"));

  test("Get products works correctly", async () => {
    const products: Array<IProduct> = await getProducts();

    expect(products).toHaveLength(20);
    expect(products).toBeInstanceOf(Array);
    expect(products[0]).toMatchObject(ProductMock);
  });

  test("Sorting function is working correctly (by desc)", async () => {
    const products: Array<IProduct> = await getProducts();
    const sortedProducts = productsService.sortProducts(FilterType.ByDesc, products);

    expect(ArrayMock.sort(sorting.byDesc)).toEqual(SortedArrayMock);
    expect(isSorted(sortedProducts)).toBe(-1);
  });

  test("10th number of products array is correct", async () => {
    const products: Array<IProduct> = await getProducts();
    const sortedProducts = productsService.sortProducts(FilterType.ByDesc, products);
    const productByIndex = productsService.getProductByIndex(10, sortedProducts);

    expect(productByIndex).toEqual(sortedProducts[10]);
  });
});
