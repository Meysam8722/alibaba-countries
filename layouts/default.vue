<template>
  <v-app>
    <v-app-bar
      elevation="2"
      :color="darkMode ? 'darkBlue' : 'white'"
      max-height="60px"
    >
      <div
        class="d-flex flex-row justify-space-between align-center full-width mx-0 mx-sm-10"
      >
        <h3 :class="darkMode ? 'white--text' : 'ultraDarkBlue--text'">
          Where in the world?
        </h3>
        <v-btn
          text
          :class="darkMode ? 'white--text' : 'ultraDarkBlue--text'"
          class="mr-n3 mr-sm-n4"
          @click="$store.commit('setDarkMode', !darkMode)"
        >
          <v-icon left> mdi-weather-night </v-icon>
          <span style="font-weight: 600">Dark Mode</span>
        </v-btn>
      </div>
    </v-app-bar>

    <v-main :class="darkMode ? 'main-dark-container' : 'main-light-container'">
      <Nuxt />
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: "DefaultLayout",
  data() {
    return {
      clipped: false,
      drawer: false,
      fixed: false,
      items: [
        {
          icon: "mdi-apps",
          title: "Welcome",
          to: "/",
        },
        {
          icon: "mdi-chart-bubble",
          title: "Inspire",
          to: "/inspire",
        },
      ],
      miniVariant: false,
      right: true,
      rightDrawer: false,
      title: "Vuetify.js",
    };
  },
  computed: {
    darkMode() {
      return this.$store.getters.getDarkMode;
    },
  },
};
</script>
<style scoped>
.full-width {
  width: 100% !important;
}
.main-light-container {
  background-color: #fafafa;
}
.main-dark-container {
  background-color: #202c37;
}
h3 {
  font-family: NunitoSans;
  font-weight: 900;
}
span {
  font-family: NunitoSans;
}
@media only screen and (max-width: 600px) {
  h3 {
    font-size: 14px;
  }
  span {
    font-size: 12px;
  }
}
.v-btn {
  text-transform: unset !important;
}
</style>
