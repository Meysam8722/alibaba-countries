<template>
  <v-container fluid>
    <v-row>
      <v-col cols="12" sm="6" class="pr-3 pr-sm-16">
        <v-img :src="country.flag" aspect-ratio="4/3" max-height="300"></v-img>
      </v-col>
      <v-col cols="12" sm="6">
        <v-row :class="darkMode ? 'white--text' : 'ultraDarkBlue--text'">
          <v-col cols="12" sm="6">
            <span
              ><strong>Native Name:</strong> {{ country.nativeName }}<br
            /></span>
            <span
              ><strong>Population:</strong> {{ country.population }}<br
            /></span>
            <span><strong>Region:</strong> {{ country.region }}<br /></span>
            <span
              ><strong>Sub Region:</strong> {{ country.subregion }}<br
            /></span>
            <span><strong>Capital:</strong> {{ country.capital }}<br /></span>
          </v-col>
          <v-col cols="12" sm="6" class="pl-3 pl-sm-16">
            <span
              ><strong>Top Level domain:</strong>
              {{ country.topLevelDomain && country.topLevelDomain[0] }}<br
            /></span>
            <span class="font-weight-bold">Currencies:</span>
            <span
              v-for="(subItem, index) in country.currencies"
              :key="subItem['code']"
              >{{
                subItem.name +
                (index === country.currencies.length - 1 ? "" : ", ")
              }}</span
            >
            <br />
            <span class="font-weight-bold">Languages:</span>
            <span
              v-for="(subItem, index) in country.languages"
              :key="subItem['iso639_1']"
              >{{
                subItem.name +
                (index === country.languages.length - 1 ? "" : ", ")
              }}
            </span>
          </v-col>
        </v-row>
        <div class="d-flex flex-column mt-6">
          <span
            class="font-weight-bold"
            :class="darkMode ? 'white--text' : 'ultraDarkBlue--text'"
            >Border Countries:</span
          >
          <div class="d-flex flex-row mt-3 flex-wrap">
            <v-btn
              v-for="(item, index) in borderCountries"
              :key="index"
              class="ma-3 ml-0 new-font-text"
              :class="darkMode ? 'white--text' : 'ultraDarkBlue--text'"
              :color="darkMode ? 'darkBlue' : 'white'"
              style="font-weight: 600"
              @click="goToBorderCountry(item)"
            >
              {{ item.name }}
            </v-btn>
          </div>
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
export default {
  name: "CountryDetails",
  props: {
    selectedCountry: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      country: [],
      alphaCodes: "",
      borderCountries: [],
    };
  },
  computed: {
    darkMode() {
      return this.$store.getters.getDarkMode;
    },
  },
  async fetch() {
    const config = {
      method: "get",
      url: `https://restcountries.com/v2/alpha/${this.selectedCountry.toLowerCase()}`,
    };
    await this.$axios(config)
      .then((response) => {
        this.country = response.data;
        this.makeBorderCountriesString();
      })
      .catch((error) => {
        console.log(error.response);
      });
  },
  methods: {
    makeBorderCountriesString() {
      let alpha = "";
      let i;
      for (i = 0; i < this.country.borders.length; i++) {
        alpha = alpha + this.country.borders[i].toLowerCase();
        if (i !== this.country.borders.length - 1) {
          alpha = alpha + ",";
        }
      }
      this.alphaCodes = alpha;
      this.getBorderCountries();
    },
    async getBorderCountries() {
      const config = {
        method: "get",
        url: `https://restcountries.com/v2/alpha?codes=${this.alphaCodes}`,
      };
      await this.$axios(config)
        .then((response) => {
          this.borderCountries = response.data;
        })
        .catch((error) => {
          console.log(error.response.data);
        });
    },
    goToBorderCountry(item) {
      this.$router.push("/details/" + item.alpha3Code);
    },
  },
};
</script>
<style scoped>
.new-font-text {
  font-family: NunitoSans;
}
span {
  font-family: NunitoSans;
  font-size: 16px;
}
</style>
