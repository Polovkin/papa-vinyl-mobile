import type {Product} from 'papa-vinyl-types';

export enum PRODUCT_STATUS {
  AVAILABLE = 'AVAILABLE',
  UNAVAILABLE = 'UNAVAILABLE',
  RESERVED = 'RESERVED',
}

export enum PRODUCT_FIELDS {
  id = 'id',
  name = 'name',
  url = 'url',
  metaDescription = 'metaDescription',
  metaTitle = 'metaTitle',
  tag = 'tag',
  description = 'description',
  price = 'price',
  purchasePrice = 'purchasePrice',
  quantity = 'quantity',
  catalogNumber = 'catalogNumber',
  receiptDate = 'receiptDate',
  year = 'year',
  createdAt = 'createdAt',
  status = 'status',
  categoryId = 'categoryId',
  thumbnail = 'thumbnail',
}

export type IProduct = Product.Interface;

export type ProductRequest = Omit<
  IProduct,
  'id' | 'url' | 'createdAt' | 'status' | 'name'
>;
