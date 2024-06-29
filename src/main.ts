import { CheckOut } from './checkout/checkout';
import AppleTVRule from './pricingRule/rules/appleTVRule';
import IPadRule from './pricingRule/rules/iPadRule';

const checkout = new CheckOut([new IPadRule('ipd'), new AppleTVRule('atv')]);

checkout.scan('atv');
checkout.scan('ipd');
checkout.scan('ipd');
checkout.scan('atv');
checkout.scan('ipd');
checkout.scan('ipd');
checkout.scan('ipd');

console.log(checkout.total());

const co = new CheckOut([new IPadRule('ipd'), new AppleTVRule('atv')]);

co.scan("atv");
co.scan("atv");
co.scan("atv");
co.scan("vga");
console.log(co.total());
