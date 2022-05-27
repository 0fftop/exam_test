import { getProducts } from './api';
import { productsService } from './services';
import { FilterType } from './types';

const startApp = async (): Promise<void> => {
    const products = await getProducts();
    console.log('All products:', products, '\n\n\n');

    const sortedProducts = productsService.sortProducts(FilterType.ByDesc, products);
    console.log('Sorted products:', sortedProducts, '\n\n\n');
    
    const productByIndex = productsService.getProductByIndex(10, sortedProducts);
    console.log('10th product:', productByIndex);
}

startApp();
