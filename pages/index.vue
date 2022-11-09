<template>
  <v-container fluid class="pa-0">
    <v-row class="justify-space-between pa-3 mx-10 mt-6 align-center">
      <v-col cols="12" sm="6">
        <div :class="$vuetify.breakpoint.smAndUp ? 'left-box' : ''">
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
            :background-color="darkMode ? 'darkBlue' : 'white'"
            :class="darkMode ? 'white--text' : 'ultraDarkBlue--text'"
            :color="darkMode ? 'white' : 'darkGrey'"
            class="new-font-text"
          ></v-text-field>
        </div>
      </v-col>
      <v-col cols="12" sm="6">
        <div :class="$vuetify.breakpoint.smAndUp ? 'right-box' : ''">
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
            class="ml-auto new-font-text light-text"
            style="font-weight: 600"
            :background-color="darkMode ? 'darkBlue' : 'white'"
            :color="darkMode ? 'white' : 'darkGrey'"
            :class="darkMode ? 'light-title' : 'dark-title'"
            @change="selectRegionHandler"
          ></v-select>
        </div>
      </v-col>
    </v-row>
    <Countries :search="search" :region="region.name" />
  </v-container>
</template>
<script>
import Countries from "~/components/Countries";

export default {
  name: "HomePage",
  components: {
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
  computed: {
    darkMode() {
      return this.$store.getters.getDarkMode;
    },
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
      this.$router.push({
        path: this.$route.path,
        query: { ...this.$route.query, region: this.region.name },
      });
    },
  },
};
</script>
<style scoped>
.new-font-text {
  font-family: NunitoSans;
}
>>> .v-input__slot {
  max-width: 250px !important;
}
.left-box >>> .v-input__control {
  flex-direction: row;
  justify-content: start;
}
.right-box >>> .v-input__control {
  flex-direction: row;
  justify-content: end;
}
.dark-title >>> .v-select .v-select__selections {
  color: #111517 !important;
}
.light-title >>> .v-select .v-select__selections {
  color: #ffffff !important;
}
</style>
