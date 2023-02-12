import type {Product} from 'papa-vinyl-types';

export type IProduct = Product.Interface;

export type ProductRequest = Omit<
  IProduct,
  'id' | 'url' | 'createdAt' | 'status' | 'name'
>;
