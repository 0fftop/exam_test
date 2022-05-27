import axios from 'axios';

import { IProduct } from '../types';

const config = {
    method: 'get',
    url: 'https://fakestoreapi.com/products',
};

export const getProducts = async (): Promise<Array<IProduct | any>> => {
    try {
        const { data } = await axios.request(config);
        return data;
    } catch(error: any) {
        return error;
    }
}
