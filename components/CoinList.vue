<template>
  <v-card class="coins-list px-2 pt-4 mb-2 mx-auto" rounded>
    <v-container>
      <v-card-title class="tabdeal-title">
        خرید و فروش بیش از 70 ارز دیجیتال
      </v-card-title>
      <v-card-subtitle class="tabdeal-subtitle my-1">
        شما در تبدیل فقط چند کلیک با خرید و فروش ارز‌های دیجیتال دلخواه خود فاصله دارید.
      </v-card-subtitle>
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
      <div
          v-if="coins !== undefined">

        <v-data-table
            :headers="headers"
            :items="coins"
            :items-per-page="4"
            class="elevation-1"
        ></v-data-table>
      </div>
    </v-container>
  </v-card>
</template>
<script>
import axios from 'axios';

  export default {
    data() {
    return {
      info: null,
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
    created() {
      axios.get('https://api.tabdeal.org:8443/r/plots/price_info/')
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
    methods: {
       obtoray(object){
          return Object.values(object)
       }
    }
  }
</script>
<style scoped>
  .coins-list {
    margin-top: -90px;
    max-width: 1000px;
    direction: rtl;
  }

  .tabdeal-title {
    font-size: 32px;
    font-weight: bold;
  }

  .tabdeal-subtitle {
    font-size: 15px;
  }

  .button-text {
    color: #ffffff;
  }

</style>