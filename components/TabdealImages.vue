<template>
  <v-row class="mx-16 my-10">
    <v-col
        v-for="(image,index) in images"
        :key="index"
        cols="12"
        sm="3"
    >
      <v-img class="rounded" :src="image">
      </v-img>
    </v-col>
  </v-row>
</template>
<script>
  export default {
    data(){
      return{
        images: [
          "https://tabdeal.org/images/homepage/promo-banners/algotahlil-promo-banner.svg",
          "https://tabdeal.org/images/homepage/promo-banners/tutorial-promo-banner.svg",
          "https://tabdeal.org/images/homepage/promo-banners/invite-promo-banner.svg",
          "https://tabdeal.org/images/homepage/promo-banners/advice-promo-banner.svg",
        ]
      }
    }
  }
</script>
<style>

</style>