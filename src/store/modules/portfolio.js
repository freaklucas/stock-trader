export default {
  state: {
    credit: 5000,
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
    setPortfolio(state, portfolio) {
      state.credit = portfolio.credit;
      state.stocks = portfolio.stockPortfolio ? portfolio.stockPortfolio : [];
    },
  },
  actions: {
    sellStock({ commit }, order) {
      commit("sellStock", order);
    },
  },
  getters: {
    stockPortfolio(state, getters) {
      return state.stocks.map((stock) => {
        const record = getters.stocks.find((element) => element.id == stock.id);
        return {
          id: stock.id,
          quantity: stock.quantity,
          name: record.name,
          price: record.price,
        };
      });
    },
    credit(state) {
      return state.credit;
    },
  },
};
