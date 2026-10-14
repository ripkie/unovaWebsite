import { products as catalog, type CatalogProduct } from "./products";
export type ProductData = CatalogProduct;
export const products: Record<string, ProductData> = Object.fromEntries(catalog.map(product => [product.id, product]));
