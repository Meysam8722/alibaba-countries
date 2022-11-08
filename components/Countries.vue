<template>
  <v-container fluid>
    <v-row class="ma-6">
      <v-col
        v-for="item in filteredCountries"
        :key="item.numericCode"
        cols="12"
        sm="6"
        md="3"
      >
        <v-card height="400" class="mx-4" @click="goToDetailsPage(item)">
          <v-img height="100" :src="item.flag" />
          <v-card-title>
            {{ item.name }}
          </v-card-title>
          <v-card-text>
            <div class="normal-size">
              <span
                ><strong>Population:</strong> {{ item.population }}<br
              /></span>
              <span><strong>Region:</strong> {{ item.region }}<br /></span>
              <span><strong>Capital:</strong> {{ item.capital }}<br /></span>
            </div>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
export default {
  name: "Countries",
  props: {
    search: {
      type: String,
      default: () => "",
    },
    region: {
      type: String,
      default: () => "",
    },
  },
  data() {
    return {
      items: [],
    };
  },
  async fetch() {
    const config = {
      method: "get",
      url: "https://restcountries.com/v2/all",
    };
    await this.$axios(config)
      .then((response) => {
        this.items = response.data;
        console.log(
          response.data.map((item) => {
            return item.alpha3Code;
          })
        );
      })
      .catch((error) => {
        console.log(error.response);
      });
  },
  computed: {
    filteredCountries() {
      if (this.region === "") {
        return this.items.filter((item) => {
          return item.name.toLowerCase().includes(this.search.toLowerCase());
        });
      } else {
        return this.items.filter((item) => {
          return (
            item.region.toLowerCase() === this.region.toLowerCase() &&
            item.name.toLowerCase().includes(this.search.toLowerCase())
          );
        });
      }
    },
  },

  methods: {
    goToDetailsPage(item) {
      this.$router.push("/details/" + item.name);
    },
  },
};
</script>
<style scoped>
.normal-size {
  font-size: 14px;
}
</style>
