import products from "./products";

const productName: string = "fanny pack";
let shipping: number;
let taxPercent: number;
let taxTotal: number;
let total: number;
const shippingAddress: string = "sunshine street, New York";

const product: any = products.find((item) => item.name === productName);

console.log(product);

if (Boolean(product.preOrder) === true) {
  console.log(
    "Thanks for your purchase, we will let you know when the product is shipped"
  );
}

if (Number(product.price) > 25) {
  shipping = 0;
  console.log(`You get free shipping since your product cost above 25USD`);
} else {
  shipping = 5;
}

if (shippingAddress.match("New York")) {
  taxPercent = 0.1;
} else {
  taxPercent = 0.05;
}

taxTotal = Number(product.price) * taxPercent;
total = Number(product.price) + taxTotal + shipping;

console.log(`
-----RECEIPT OF PURCHASE -----
Product:  ${product.name}
Address:  ${shippingAddress}
Price:    $${product.price}
Tax:      $${taxTotal.toFixed(2)}
Shipping: $${shipping.toFixed(2)}
Total:    $${total.toFixed(2)}

Thanks for shopping with typeMart
`);
