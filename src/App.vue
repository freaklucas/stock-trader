<template>
  <v-app>
    <Header />
    <v-main class="grey lighten-2">
      <v-container>
        <router-view></router-view>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import Header from "./components/Header.vue";

export default {
  name: "App",
  components: {
    Header,
  },
  created() {
    this.$store.dispatch("initStocks");
  },
};
</script>
