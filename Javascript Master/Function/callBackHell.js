function orderNow(order, Callback) {
  setTimeout(() => {
    console.log(`Order confiram? : ${order} your order prossing `);
    Callback(order);
  }, 2000);
}

function shippingNow(order, Callback) {
  setTimeout(() => {
    let shipping = `${order} is shpping`;
    console.log(`Your order Shipping proccsing ${order} `);
    Callback(shipping);
  }, 2000);
}

function DeliverNow(order, Callback) {
  setTimeout(() => {
    let myProduct = `${order}`;
    console.log(`Your order delviery proccsing ${order} `);
    Callback(myProduct);
  }, 2000);
}

orderNow("shirt", (order) => {
  console.log(`Yes your order is Confiram ${order}`);
  shippingNow(order, (shhipng) => {
    console.log(`Yes your order is shipping confiram ${shhipng}`);
    DeliverNow(order, (myProduct) => {
      console.log(`I got my product ${myProduct}`);
    });
  });
});
