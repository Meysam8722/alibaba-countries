<template>
  <v-app>
    <v-app-bar
      elevation="4"
      color="#111214"
      max-height="60px"
    >
      <div class="d-flex flex-row justify-space-between align-center full-width">
        <div class="d-flex flex-row">
          <v-btn
            plain
            color="#ffffff"
          >
            <v-icon
              color="#ffffff"
              left
            >
              mdi-chevron-down
            </v-icon>
            <v-icon
              color="#ffffff"
              left
            >
              mdi-phone
            </v-icon>
            <span class="font-weight-bold text-center">
            پشتیبانی
          </span>
          </v-btn>
          <v-btn
            color="#F0B90B"
            to="/register"
          >
          <span class="font-weight-bold text-center">
            ثبت نام
          </span>
          </v-btn>
          <v-btn
            plain
            color="#F0B90B"
            to="/login"
          >
          <span class="font-weight-bold text-center">
            ورود
          </span>
          </v-btn>
        </div>
        <v-spacer></v-spacer>
        <div class="d-flex flex-row">
          <v-btn
            text
            color="#fff"
          >
          <span class="font-weight-bold text-center">
            دعوت از دوستان
          </span>
          </v-btn>
          <v-btn
            text
            color="#fff"
          >
          <span class="font-weight-bold text-center">
            راهنمای گام به گام
          </span>
          </v-btn>
          <v-btn
            class="mx-2"
            outlined
            color="#F0B90B"
          >
          <span class="font-weight-bold text-center">
            خرید آسان
          </span>
          </v-btn>
          <v-btn
            class="mx-2"
            outlined
            color="#ffffff"
          >
            <v-icon
              color="#ffffff"
              left
            >
              mdi-chevron-down
            </v-icon>
            <span class="font-weight-bold text-center">
            خرید و فروش
          </span>
          </v-btn>
          <v-img
            lazy-src="https://tabdeal.org/tabdeal_panel_logo.png"
            max-height="40"
            max-width="136"
            src="https://tabdeal.org/tabdeal_panel_logo.png"
          ></v-img>
        </div>
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
