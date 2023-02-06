import type {Category, Product} from 'papa-vinyl-types';

export type IProduct = Product.Interface;

export type ICategoryNaming = Category.Naming;

export type ICategory = Category.Interface;
export type ICategoryInAttribute = Omit<ICategory, 'products' | 'attributes'>;
export type CategoryRequest = Omit<ICategory, 'id' | 'products' | 'attributes'>;
