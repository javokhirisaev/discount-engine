// Step 2
let products = [
  { name: "Smartphone", category: "electronics", price: 800, inventory: 5 },
  { name: "Jeans", category: "apparel", price: 40, inventory: 12 },
  { name: "Milk", category: "groceries", price: 3, inventory: 15 },
  { name: "Paper Towels", category: "household", price: 6, inventory: 10 },
  { name: "Novel", category: "other", price: 18, inventory: 7 }
];

// Step 3
for (let product of products) {
  let discount = 0;
  switch (product.category) {
    case "electronics":
      discount = 0.20; 
      break;
    case "apparel":
      discount = 0.15; 
      break;
    case "groceries":
    case "household":
      discount = 0.10; 
      break;
    default:
      discount = 0; 
  }
  product.promoPrice = +(product.price * (1 - discount)).toFixed(2);
}

//Step 4
let customerTypes = ["regular", "student", "senior"];

for (let customerType of customerTypes) {
  let extraDiscount = 0; 

  if (customerType === "student") {
    extraDiscount = 0.05; 
  } else if (customerType === "senior") {
    extraDiscount = 0.07; 
  } else {
    extraDiscount = 0; 
  }

// Step 5
  let subtotal = 0;

  for (let product of products) {
    if (product.inventory > 0) {
      subtotal += product.promoPrice;
      product.inventory -= 1;
    }
  }

  let finalTotal = subtotal * (1 - extraDiscount);

  console.log(`Customer (${customerType})`);
  console.log(`Subtotal: $${subtotal.toFixed(2)}`);
  console.log(`Final Total after discount: $${finalTotal.toFixed(2)}`);
}

// Step 6
console.log("\nSample discounted price a product:");
let sample = products[0];
for (let key in sample) {
  console.log(`${key}: ${sample[key]}`);
}