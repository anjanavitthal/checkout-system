import { Product } from '../../product';

export interface PricingRule {
    sku: string;
    apply(products: Product[]): number;
}
