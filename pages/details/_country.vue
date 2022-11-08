<template>
  <div>
    <v-btn @click="$router.go(-1)">
      <v-icon right>mdi-arrow-left</v-icon>
      <span>Back</span>
    </v-btn>
    <CountryDetails :selected-country="selectedCountry" />
  </div>
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
  created() {
    this.selectedCountry = this.$route.params.country;
  },
};
</script>
<style scoped></style>
