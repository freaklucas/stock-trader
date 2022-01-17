<template>
  <v-flex class="pr-3 pb-3" xs12 md6 lg4>
    <v-card class="blue darken-3 white--text">
      <v-card-title class="headline">
        <strong>
          {{ stock.name }}
          <small>
            (Preço: {{ stock.price }} | Qtde: {{ stock.quantity }} )
          </small>
        </strong>
      </v-card-title>
    </v-card>
    <v-card class="white--text">
      <v-container fill-height>
        <v-text-field
          :error="insufficientQuantity || !Number.isInteger(quantity)"
          label="Quantidade"
          type="number"
          v-model.number="quantity"
        />
        <v-btn
          class="blue darken-3 white--text ml-4"
          :disabled="
            insufficientQuantity || quantity <= 0 || !Number.isInteger(quantity)
          "
          @click="sellStock"
        >
          {{
            insufficientQuantity ? "Quantidade Insuficiente" : "Venda sua ação"
          }}
        </v-btn>
      </v-container>
    </v-card>
  </v-flex>
</template>

<script>
import { mapActions } from "vuex";

export default {
  props: ["stock"],
  data() {
    return {
      quantity: 0,
    };
  },
  computed: {
    insufficientQuantity() {
      return this.quantity > this.stock.quantity;
    },
  },
  methods: {
    ...mapActions({ sellStockAction: "sellStock" }),
    sellStock() {
      const order = {
        stockId: this.stock.id,
        stockPrice: this.stock.price,
        quantity: this.quantity,
      };
      this.sellStockAction(order);
      // this.$store.dispatch("buyStock", order);
      this.quantity = 0;
    },
  },
};
</script>