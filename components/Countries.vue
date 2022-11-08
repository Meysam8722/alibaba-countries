<template>
<v-container fluid>
  <v-row>
    <v-col v-for="item in searchedCountry" :key="item.numericCode" cols="12" sm="3">
      <v-card max-width="200" height="400" class="mx-0">
        <v-img
          height="100"
          :src="item.flag"
        />
        <v-card-title>
          {{item.name}}
        </v-card-title>
        <v-card-text>
          <div class="normal-size">
            <span><strong>Population:</strong> {{item.population}}<br></span>
            <span><strong>Region:</strong> {{item.region}}<br></span>
            <span><strong>Capital:</strong> {{item.capital}}<br></span>
          </div>
        </v-card-text>
      </v-card>
    </v-col>
  </v-row>
</v-container>
</template>
<script>
export default {
  name: 'Countries',
  props: {
    search: {
      type: String,
      default: () => '',
    },
  },
  data() {
    return {
      items: [],
    }
  },
  async fetch() {
    const config = {
      method: 'get',
      url: 'https://restcountries.com/v2/all',
    }
    await this.$axios(config)
    .then((response) => {
      console.log(response.data)
      this.items = response.data
    })
    .catch((error) => {
      console.log(error.response)
    })
  },
  computed: {
    searchedCountry() {
      if(this.search === ''){
        return this.items
      }else{
        return this.items.filter((item) => {
          return item.name.toLowerCase().includes(this.search.toLowerCase())
        })
      }

    },
  },
}
</script>
<style scoped>
.normal-size {
  font-size: 14px;
}
</style>
