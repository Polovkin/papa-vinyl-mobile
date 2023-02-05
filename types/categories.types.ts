import {IProduct} from './product.types';
import {IAttributeInCategory} from './attribute.types';

export type ICategoryNaming = {
  id: string;
  name: string;
};

export type ICategory = {
  id: string;
  name: string;
  order: number;
  products: IProduct[];
  attributes: IAttributeInCategory[];
  categoryNaming: ICategoryNaming[];
};

export type ICategoryInAttribute = Omit<ICategory, 'products' | 'attributes'>;
export type CategoryRequest = Omit<
  ICategory,
  'id' | 'products' | 'attributes' | 'categoryNaming'
>;
