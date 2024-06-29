import { CheckOut } from "../../src/checkout/checkout";
import AppleTVRule from "../../src/pricingRule/rules/appleTVRule";
import IPadRule from "../../src/pricingRule/rules/iPadRule";

describe('Checkout System', () => {
    const pricingRules = [new AppleTVRule("atv"), new IPadRule("ipd")];
  
    it('should calculate total for scenario 1: atv, atv, atv, vga', () => {
      const co = new CheckOut(pricingRules);
      co.scan('atv');
      co.scan('atv');
      co.scan('atv');
      co.scan('vga');
      expect(co.total().toFixed(2)).toBe('249.00');
    });
  
    it('should calculate total for scenario 2: atv, ipd, ipd, atv, ipd, ipd, ipd', () => {
      const co = new CheckOut(pricingRules);
      co.scan('atv');
      co.scan('ipd');
      co.scan('ipd');
      co.scan('atv');
      co.scan('ipd');
      co.scan('ipd');
      co.scan('ipd');
      expect(co.total().toFixed(2)).toBe('2718.95');
    });
  
    it('should calculate total for scenario 3: mbp, vga, ipd', () => {
      const co = new CheckOut(pricingRules);
      co.scan('mbp');
      co.scan('vga');
      co.scan('ipd');
      expect(co.total().toFixed(2)).toBe('1979.98');
    });
  
    it('should calculate total without discounts: vga, ipd', () => {
      const co = new CheckOut(pricingRules);
      co.scan('vga');
      co.scan('ipd');
      expect(co.total().toFixed(2)).toBe('579.99');
    });
  });