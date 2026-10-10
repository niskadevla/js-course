function makePizza(callback) {
  console.log('Пицца готовиться...');
  callback();
}

function callCustomer() {
  console.log('📞 Пицца готова!');
}

makePizza(callCustomer);

