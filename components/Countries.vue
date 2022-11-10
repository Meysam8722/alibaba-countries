<template>
  <v-container fluid class="px-0 px-sm-3">
    <v-row class="my-6 mx-0 mx-sm-6">
      <v-col
        v-for="item in sortedCountries"
        :key="item.numericCode"
        cols="12"
        sm="6"
        md="3"
      >
        <v-card
          height="400"
          class="mx-4"
          :color="darkMode ? 'darkBlue' : 'white'"
          @click="goToDetailsPage(item)"
        >
          <v-img :src="item.flag" aspect-ratio="4/3" height="150">
            <template v-slot:placeholder>
              <v-row class="fill-height ma-0" align="center" justify="center">
                <v-progress-circular
                  indeterminate
                  color="grey lighten-5"
                ></v-progress-circular>
              </v-row>
            </template>
          </v-img>
          <v-card-title
            class="new-font-text font-weight-bold"
            :class="darkMode ? 'white--text' : 'ultraDarkBlue--text'"
          >
            {{ item.name }}
          </v-card-title>
          <v-card-text
            class="new-font-text"
            :class="darkMode ? 'white--text' : 'ultraDarkBlue--text'"
          >
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
    sortPopulations: {
      type: Number,
      default: () => null,
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
        this.sortByPopulationDescending();
      })
      .catch((error) => {
        console.log(error.response);
      });
  },
  computed: {
    orderOfPopulations() {
      switch (this.sortPopulations) {
        case 0:
          return "None";
        case 1:
          return "Ascending";
        case 2:
          return "Descending";
        default:
          return "None";
      }
    },
    darkMode() {
      return this.$store.getters.getDarkMode;
    },
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
    sortedCountries() {
      let countries = [];
      Array.prototype.push.apply(countries, this.filteredCountries);
      if (this.orderOfPopulations === "None") {
        return this.filteredCountries;
      }
      if (this.orderOfPopulations === "Ascending") {
        countries.sort(function compare(a, b) {
          if (a.population < b.population) {
            return -1;
          }
          if (a.population > b.population) {
            return 1;
          }
          return 0;
        });
      } else if (this.orderOfPopulations === "Descending") {
        countries.sort(function compare(a, b) {
          if (a.population < b.population) {
            return 1;
          }
          if (a.population > b.population) {
            return -1;
          }
          return 0;
        });
      }
      return countries;
    },
  },
  methods: {
    goToDetailsPage(item) {
      this.$router.push("/details/" + item.alpha3Code);
    },
  },
};
</script>
<style scoped>
.new-font-text {
  font-family: NunitoSans;
}
.normal-size {
  font-size: 14px;
}
</style>
