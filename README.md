# Checkout System

## Overview

This project implements a checkout system for a computer store. The system scans items and calculates the total price based on specific pricing rules. The initial product catalog includes items such as Super iPad, MacBook Pro, Apple TV, and VGA adapter. Special opening day offers include a 3-for-2 deal on Apple TVs and a bulk discount for Super iPads when purchasing more than 4.

## Product Catalog

| SKU  | Name        | Price   |
|------|-------------|---------|
| ipd  | Super iPad  | $549.99 |
| mbp  | MacBook Pro | $1399.99|
| atv  | Apple TV    | $109.50 |
| vga  | VGA adapter | $30.00  |

## Pricing Rules

- **3-for-2 deal on Apple TVs**: Buy 3 Apple TVs for the price of 2.
- **Bulk discount on Super iPads**: The price drops to $499.99 each if you buy more than 4.

## Example Scenarios

1. **SKUs Scanned: atv, atv, atv, vga**
   - **Total expected**: $249.00

2. **SKUs Scanned: atv, ipd, ipd, atv, ipd, ipd, ipd**
   - **Total expected**: $2718.95

## Installation

To get started with the app on local system, follow these steps:

1. **Clone the repository**:
   ```bash
   $ git clone https://github.com/anjanavitthal/checkout-system.git
   $ cd checkout-system
   ```

2. **Install dependencies**:
   ```bash
   $ npm install
   ```

3. **Execute script**:
   ```bash
   $ npm start
   ```

## Test with Jest

```bash
$ npm test
```


## Further Improvements

- Can add or remove product pricing rule dynamically.
- A user-friendly interface that is easy to navigate can help in better way.
- Improve reporting and analytics using better logging.


## License

Code Scanner is [MIT licensed](LICENSE).