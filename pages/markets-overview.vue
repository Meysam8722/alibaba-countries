<template>
  <v-card class="coins-list px-2 pt-4 mb-2 mx-auto" rounded>
    <p v-if="$fetchState.pending">Fetching Coin List...</p>
    <p v-else-if="$fetchState.error">An error occurred :(</p>
    <v-container v-else class="direction">
      <v-text-field
          label="جستجوی نماد یا نام ارز"
      >
        <v-icon
            slot="prepend"
            color="#F0B90B"
        >
          mdi-magnify
        </v-icon>
      </v-text-field>
      <v-btn
          color="#F0B90B"
          class="ma-2"
      >
        <v-icon
            color="#ffffff"
            left
        >
          mdi-currency-usd
        </v-icon>
        <span class="button-text font-weight-bold text-center pr-2">
          بازار تتری
        </span>

      </v-btn>
      <v-btn
          class="ma-2"
          color="#F5F5F5"
      >
        <v-icon
            left
        >
          mdi-cash
        </v-icon>
        <span class="font-weight-bold text-center pr-2">
          بازار تومانی
        </span>
      </v-btn>
      <v-btn
          class="ma-2"
          color="#F5F5F5"
          to="/markets-overview"
      >
        <span class="font-weight-bold text-center pr-2">
          مشاهده تمام بازارها
        </span>
      </v-btn>
      <div1
          v-if="coins !== undefined">

        <v-data-table
            :headers="headers"
            :items="coins"
            :items-per-page="4"
            class="elevation-1"
        ></v-data-table>
      </div1>
    </v-container>
  </v-card>
</template>
<script>

export default {
  data() {
    return {
      info: [],
      middleware: 'authenticated',
      headers: [
        {
          text: 'نام',
          align: 'start',
          sortable: false,
          value : 'name',
        },
        { text: 'آخرین قیمت', value: 'current_price' },
        { text: 'تغییرات 24 ساعت اخیر', value: 'changes' },
        { text: '', value: 'buySell' },
      ],
      coins: [],

    }
  },

  async fetch() {
    await this.$axios.get('https://api.tabdeal.org:8443/r/plots/price_info/')
      .then(response => {
        this.coins = this.obtoray(response.data).map((item) => {
          return {
            name: item.symbol,
            current_price: item.current_price,
            changes: item.changes,
            buySell: item.symbol
          }
        })
      })
  },

  created() {
  },
  methods: {
    obtoray(object){
      return Object.values(object)
    },
    async fetchSomething() {
      const ip = await this.$axios.$get('https://api.tabdeal.org:8443/r/plots/price_info/')
      this.info = ip
    }
  }
}
</script>
<style scoped>
.coins-list {
  max-width: 1100px;
  direction: rtl;
}
</style>
