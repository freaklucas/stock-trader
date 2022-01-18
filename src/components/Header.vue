<template>
  <v-app-bar app>
    <v-toolbar-title class="headline text-uppercase mr-2">
      <span>Stock</span>
      <span class="font-weight-light">Trader</span>
    </v-toolbar-title>
    <v-toolbar-items>
      <v-btn text to="/">Início</v-btn>
      <v-btn text to="/portfolio">Portfólio</v-btn>
      <v-btn text to="/stocks">Ações</v-btn>
    </v-toolbar-items>

    <v-spacer></v-spacer>

    <v-toolbar-items>
      <v-btn text @click="endDay">Finalizar Dia</v-btn>
      <v-menu offset-y>
        <template v-slot:activator="{ on }">
          <v-btn text v-on="on">Salvar & Carregar</v-btn>
        </template>
        <v-list>
          <v-list-item>
            <v-list-item-title @click="saveData"
              >Salvar Dados</v-list-item-title
            >
          </v-list-item>
          <v-list-item>
            <v-list-item-title>Carregar Dados</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
      <v-layout align-center>
        <span class="text-uppercase grey--text text--darken-2">
          Saldo: {{ credit | currency }}
        </span>
      </v-layout>
    </v-toolbar-items>
  </v-app-bar>
</template>

<script>
import { mapActions } from "vuex";

export default {
  computed: {
    credit() {
      return this.$store.getters.credit;
    },
  },
  methods: {
    ...mapActions(["randomizeStocks"]),
    endDay() {
      this.randomizeStocks();
    },
    saveData() {
      const { credit, stockPortfolio, stocks } = this.$store.getters;
      this.$http.put("data.json", { credit, stockPortfolio, stocks });
    },
  },
};
</script>