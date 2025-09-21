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


