import { Product } from '../../product';
import { PricingRule } from '../interface/pricingRule.interface';

export default class IPadRule implements PricingRule {
    public sku: string;

    constructor(sku: string) {
        this.sku = sku;
    }

    apply(products: Product[]): number {
        const ipdProducts = products.filter((product) => product.sku === 'ipd');
        if (!ipdProducts.length) return 0;

        let price = ipdProducts[0].price;
        if (ipdProducts.length > 4) {
            price = 499.99;
        }

        // console.log('ipdProducts.length', ipdProducts.length * price);

        return price * ipdProducts.length;
    }
}
