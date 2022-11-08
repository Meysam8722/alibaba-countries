<template>
  <v-container fluid>
    <v-row>
      <v-col cols="12" sm="6">
        <v-img height="100" :src="country.flag" />
      </v-col>
      <v-col cols="12" sm="6">
        <div class="normal-size">
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
          <br />
        </div>
        <div class="d-flex flex-row justify-space-between align-center">
          <span class="font-weight-bold">Border Countries:</span>
          <div class="d-flex flex-row">
            <v-btn
              v-for="(subItem, index) in country.borders"
              :key="index"
              :loading="borderCountriesLoading[index]"
              @click="getBorderCountry(subItem.toLowerCase(), index)"
            >
              {{ subItem }}
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
      selectedBorderCountry: "",
      borderCountriesLoading: [],
    };
  },
  async fetch() {
    const config = {
      method: "get",
      url: `https://restcountries.com/v2/name/${this.selectedCountry.toLowerCase()}`,
    };
    await this.$axios(config)
      .then((response) => {
        this.country = response.data[0];
        this.makeBorderCountriesLoading();
      })
      .catch((error) => {
        console.log(error.response);
      });
  },
  methods: {
    makeBorderCountriesLoading() {
      let i;
      for (i = 0; i < this.country.borders.length; i++) {
        this.borderCountriesLoading[i] = false;
      }
    },
    async getBorderCountry(alphaCode, index) {
      this.borderCountriesLoading[index] = true;
      const config = {
        method: "get",
        url: `https://restcountries.com/v2/alpha/${alphaCode}`,
      };
      await this.$axios(config)
        .then((response) => {
          setTimeout(() => {
            this.borderCountriesLoading[index] = false;
          }, 1000);
          this.selectedBorderCountry = response.data.name;
          this.$router.push(`/details/${this.selectedBorderCountry}`);
        })
        .catch((error) => {
          setTimeout(() => {
            this.borderCountriesLoading[index] = false;
          }, 1000);
          console.log(error.response.data);
        });
    },
  },
};
</script>
<style scoped>
.normal-size {
  font-size: 14px;
}
</style>
