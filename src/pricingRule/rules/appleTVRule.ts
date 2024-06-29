import { Product } from '../../product';
import { PricingRule } from '../interface/pricingRule.interface';

export default class AppleTVRule implements PricingRule {
    public sku: string;

    constructor(sku: string) {
        this.sku = sku;
    }

    apply(products: Product[]): number {
        const atvProducts = products.filter((product) => product.sku === 'atv');
        if (!atvProducts.length) return 0;

        const discountCount = Math.floor(atvProducts.length / 3);
        const discountedTotal = (atvProducts.length - discountCount) * atvProducts[0].price;
        return discountedTotal;
    }
}
