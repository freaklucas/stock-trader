import Vue from "vue";

export default {
  loadData({ commit }) {
    Vue.prototype.$http("data.json").then((resp) => {
      const data = resp.data;
      if (data) {
        commit("setStocks", data.stocks);
        commit("setPortfolio", {
          credit: data.credit,
          stockPortfolio: data.portfolio,
        });
      }
    });
  },
};
