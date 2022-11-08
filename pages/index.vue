<template>
  <v-container fluid class="pa-0">
    <div
      class="d-flex flex-row justify-space-between align-center pa-4 full-width"
    >
      <v-text-field
        v-model="search"
        placeholder="Search for a country..."
        prepend-inner-icon="mdi-magnify"
        loading="false"
        single-line
        solo
        dense
        hide-details
        max-width="100px"
      ></v-text-field>
      <v-select
        v-model="region"
        :items="menuItems"
        item-text="name"
        item-value="id"
        placeholder="Filter by Region"
        :menu-props="{ bottom: true, offsetY: true }"
        persistent-hint
        return-object
        solo
        dense
        single-line
        hide-details
        @change="selectRegionHandler"
      ></v-select>
    </div>
    <Countries :search="search" :region="region.name" />
    <TabdealSlider />
    <CoinList />
    <TabdealImages />
    <TabdealFamily />
    <WhyTabdeal />
    <TabdealAvailablity />
  </v-container>
</template>
<script>
import TabdealSlider from "@/components/TabdealSlider";
import CoinList from "@/components/CoinList";
import TabdealImages from "@/components/TabdealImages";
import TabdealFamily from "@/components/TabdealFamily";
import WhyTabdeal from "@/components/WhyTabdeal";
import TabdealAvailablity from "@/components/TabdealAvailablity";
import Countries from "~/components/Countries";

export default {
  name: "HomePage",
  components: {
    TabdealSlider,
    CoinList,
    TabdealImages,
    TabdealFamily,
    WhyTabdeal,
    TabdealAvailablity,
    Countries,
  },
  data() {
    return {
      search: "",
      region: "",
      menuItems: [
        {
          id: 1,
          name: "Africa",
        },
        {
          id: 2,
          name: "Americas",
        },
        {
          id: 3,
          name: "Asia",
        },
        {
          id: 4,
          name: "Europe",
        },
        {
          id: 5,
          name: "Oceania",
        },
      ],
    };
  },
  created() {
    this.$router.push({
      path: this.$route.path,
      query: { ...this.$route.query, region: undefined },
    });
  },
  // beforeRouteLeave(to, from, next) {
  //   to.query = { ...to.$route.query, region: undefined };
  //   next();
  // },
  methods: {
    selectRegionHandler() {
      console.log(this.region);
      this.$router.push({
        path: this.$route.path,
        query: { ...this.$route.query, region: this.region.name },
      });
    },
  },
};
</script>
<style scoped>
>>> .v-input__slot {
  max-width: 250px !important;
}
</style>
