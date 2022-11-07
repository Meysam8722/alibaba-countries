<template>
  <v-app>
    <v-app-bar
      elevation="4"
      color="white"
      max-height="60px"
    >
      <div class="d-flex flex-row justify-space-between align-center full-width">
        <h3>Where in the world?</h3>
        <v-btn text>
          <v-icon left>
            mdi-weather-night
          </v-icon>
          <span>Dark Mode</span>
        </v-btn>
      </div>

    </v-app-bar>

    <v-main>
      <Nuxt />
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: 'DefaultLayout',
  data () {
    return {
      clipped: false,
      drawer: false,
      fixed: false,
      items: [
        {
          icon: 'mdi-apps',
          title: 'Welcome',
          to: '/'
        },
        {
          icon: 'mdi-chart-bubble',
          title: 'Inspire',
          to: '/inspire'
        }
      ],
      miniVariant: false,
      right: true,
      rightDrawer: false,
      title: 'Vuetify.js'
    }
  }
}
</script>
<style scoped>
  .full-width {
    width: 100% !important;
  }
</style>
