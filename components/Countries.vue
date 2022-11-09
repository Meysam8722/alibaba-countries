<template>
  <v-container fluid class="px-0 px-sm-3">
    <v-row class="my-6 mx-0 mx-sm-6">
      <v-col
        v-for="item in filteredCountries"
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
          <v-img :src="item.flag" aspect-ratio="4/3" height="150"></v-img>
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
      })
      .catch((error) => {
        console.log(error.response);
      });
  },
  computed: {
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
