<template>
  <v-container fluid class="px-3 px-sm-10 py-6 py-sm-10">
    <v-btn
      class="ma-3 mb-10"
      :color="darkMode ? 'darkBlue' : 'white'"
      @click="$router.go(-1)"
    >
      <v-icon left>mdi-arrow-left</v-icon>
      <span class="new-font-text normal-size" style="font-weight: 600"
        >Back</span
      >
    </v-btn>
    <CountryDetails :selected-country="selectedCountry" />
  </v-container>
</template>
<script>
import CountryDetails from "~/components/CountryDetails";
export default {
  name: "CountryDetailsPage",
  components: {
    CountryDetails,
  },
  data() {
    return {
      selectedCountry: "",
    };
  },
  computed: {
    darkMode() {
      return this.$store.getters.getDarkMode;
    },
  },
  created() {
    this.selectedCountry = this.$route.params.country;
  },
};
</script>
<style scoped>
.new-font-text {
  font-family: NunitoSans;
}
.normal-size {
  font-size: 16px;
}
</style>
