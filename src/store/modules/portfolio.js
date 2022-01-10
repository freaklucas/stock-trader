export default {
  state: {
    credit: 1000,
    stocks: [],
  },
  mutations: {
    buyStock(state, { stockId, quantity, stockPrice }) {
      const record = state.stocks.find((element) => element.id === stockId);
      if (record) {
        record.quantity += quantity;
      } else {
        state.stocks.push({
          id: stockId,
          quantity: quantity,
        });
      }
      state.credit -= stockPrice * quantity;
    },
    sellStock(state, { stockId, quantity, stockPrice }) {
      const record = state.stocks.find((element) => element.id == stockId);

      if (record.quantity > quantity) {
        record.quantity -= quantity;
      } else {
        state.stocks.splice(state.stocks.indexOf(record), 1);
      }
      state.credit += stockPrice * quantity;
    },
  },
};
