import * as cartService from "./services/cart.js";
import createItem from "./services/item.js";

const myCart = [];
const myWishList = [];

console.log("Welcome to your Shopee Cart!");

// Criando dois itens
const item1 = await createItem("Hotwhels Ferrari", 20.99, 1);
const item2 = await createItem("Hotwhels Lamborghini", 39.99, 3);

// Adicionando ao carrinho
await cartService.addItem(myCart, item1);
await cartService.addItem(myCart, item2);

// Removendo unidades do item
await cartService.removeItem(myCart, item2);

// Exibindo carrinho e total
await cartService.displayCart(myCart);
await cartService.calculateTotal(myCart);
