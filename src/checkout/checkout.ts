import { PricingRule } from '../pricingRule/interface/pricingRule.interface';
import { Product } from '../product';
import { productCatalog } from '../product';

export class CheckOut {
    private productList: Product[] = [];
    private pricingRules: PricingRule[];

    constructor(pricingRuleList: PricingRule[]) {
        this.pricingRules = pricingRuleList;
    }

    scan(sku: string) {
        const productDetails = productCatalog.find((product) => product.sku === sku);
        if (productDetails) {
            this.productList.push(productDetails);
        }
    }

    total(): number {
        let total = 0;
        // const totalCartamount = this.productList.reduce((sum: number, curr: Product) => sum += curr.price, 0)
        let scanedProducts = [...this.productList];

        // apply each rule to scanned product list
        this.pricingRules.forEach((rule) => {
            total += rule.apply(scanedProducts);
            // console.log("totsl", rule.sku, total)
        });

        // total of products that don't have specific pricing rules
        const processedSKUs = new Set(this.pricingRules.map((rule) => rule.sku));
        const otherProducts = scanedProducts.filter((product) => !processedSKUs.has(product.sku));
        otherProducts.forEach((product) => {
            total += product.price;
        });

        return total;
    }
}
