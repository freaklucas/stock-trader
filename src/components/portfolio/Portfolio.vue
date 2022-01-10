<template>
  <div>
    <h1 class="text-no-wrap blue bold" style="width: 9rem">
      Venda ações quando valorizar :)
    </h1>
    <v-layout row wrap mt-2>
      <Stock v-for="stock in stocks" :key="stock.id" :stock="stock" />
    </v-layout>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import Stock from "./Stock.vue";

export default {
  components: { Stock },
  computed: {
    ...mapGetters({
      stocks: "stockPortfolio",
    }),
  },
};
</script>