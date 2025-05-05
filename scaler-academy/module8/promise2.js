//  Q1
function coffeeShop(order) {
  return new Promise((resolve, reject) => {
    if (order === "coffee") {
      resolve("Order Accepted!");
    } else {
      reject("Sorry, your order cannot be processed!");
    }
  });
}

function processOrder(order) {
  return new Promise((resolve) => {
    console.log(`Order is being processed`);

    resolve(`${order} and  served`);
  });
}

/*
coffeeShop("coffee")
  .then((result) => {
    console.log(result);
    return processOrder(result);
  })
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.log(error);
  });
*/
// <========= Using Async Await  =========>

async function getOrderData() {
  try {
    let acceptOrder = await coffeeShop("coffee");
    console.log(`${acceptOrder}`);
    let orderPlaced = await processOrder(acceptOrder);
    console.log(`${orderPlaced}`);
  } catch (error) {
    console.log(error);
  }
}

getOrderData();
