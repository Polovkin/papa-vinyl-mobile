export enum PRODUCT_STATUS {
  AVAILABLE = 'AVAILABLE',
  UNAVAILABLE = 'UNAVAILABLE',
  RESERVED = 'RESERVED',
}

export type IProduct = {
  id: string;
  name: string;
  url: string;
  metaDescription: string;
  metaTitle: string;
  tag: string;
  description: string;
  price: number;
  purchasePrice: null;
  quantity: number;
  catalogNumber: string;
  status: PRODUCT_STATUS;
  receiptDate: Date | null;
  year: Date;
  createdAt: Date;
};
