<template>
  <div>
    <h1 class="display-3 font-weight-light mb-4">
      Negocie e Consulte suas Ações
    </h1>
    <v-sheet :elevation="12" color="primary" class="pa-3">
      <v-icon dark right class="mr-5 mb-1"> mdi-checkbox-marked-circle</v-icon>
      <span class="headline white--text font-weight-light"
        >Você pode Salvar & Carregar os Dados
      </span>
    </v-sheet>
    <v-sheet :elevation="12" color="success" class="pa-3 group mt-3 darken-1">
      <v-icon dark right class="mr-5 mb-1"> mdi-checkbox-marked-circle </v-icon>
      <span class="headline white--text font-weight-light"
        >Clique em 'Finalizar Dia' para iniciar um novo dia!
      </span>
    </v-sheet>
    <v-divider class="my-4" />
    <p class="display-1"><strong>Seu Saldo:</strong>{{ credit | currency }}</p>
  </div>
</template>

<script>
export default {
  computed: {
    credit() {
      return this.$store.getters.credit;
    },
  },
};
</script>