import { FilterType, IProduct } from '../types';
import { sorting } from '../util';

interface IProductsService {
  sortProducts: (
    order: FilterType,
    products: Array<IProduct>
  ) => Array<IProduct>;
  getProductByIndex: (index: number, products: Array<IProduct>) => IProduct | undefined;
}

export const productsService: IProductsService = {
  sortProducts: (order, products) => products.sort(sorting[order]),
  getProductByIndex: (index, products) =>
    products.find((item, i) => index === i),
};
