<template>
  <v-layout row wrap>
    <Stock v-for="stock in stocks" :key="stock.id" />
  </v-layout>
</template>

<script>
import Stock from "./Stock.vue";
export default {
  components: { Stock },
  data() {
    return {
      stocks: [
        { id: 1, name: "MBW", price: 1000 },
        { id: 2, name: "Google", price: 100 },
        { id: 3, name: "facebook", price: 200 },
        { id: 4, name: "Twitter", price: 800 },
      ],
    };
  },
};
</script>