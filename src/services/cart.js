// -> adicionar item no carrinho
async function addItem(userCart, item) {
  const index = userCart.findIndex((i) => i.name === item.name);

  if (index !== -1) {
    userCart[index].quantity += item.quantity;
  } else {
    userCart.push(item);
  }
}

// -> calcular o total
async function calculateTotal(userCart) {
  console.log("\nShopee Cart TOTAL IS");

  const result = userCart.reduce((total, item) => total + item.subtotal(), 0);
  console.log(`🎁 Total: R$ ${result.toFixed(2)}`);
}

// -> deletar item do carrinho por nome
async function deleteItem(userCart, name) {
  const index = userCart.findIndex((item) => item.name === name);
  if (index !== -1) {
    userCart.splice(index, 1);
  }
}

// -> remover uma unidade de um item
async function removeItem(userCart, item) {
  const index = userCart.findIndex((p) => p.name === item.name);

  if (index === -1) {
    console.log("Item não encontrado");
    return;
  }

  if (userCart[index].quantity > 1) {
    userCart[index].quantity -= 1;
  } else {
    userCart.splice(index, 1);
  }
}

// -> exibir o carrinho
async function displayCart(userCart) {
  console.log("\nShopee Cart List");

  userCart.forEach((item, index) => {
    console.log(
      `${index + 1}. ${item.name} - R$ ${item.price} | ${
        item.quantity
      }x | Subtotal = ${item.subtotal().toFixed(2)}`
    );
  });
}

export { addItem, calculateTotal, deleteItem, removeItem, displayCart };
