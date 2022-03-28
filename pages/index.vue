<template>
  <v-container fluid class="pa-0">
    <TabdealSlider/>
    <CoinList/>
    <TabdealImages/>
    <TabdealFamily/>
    <WhyTabdeal/>
    <TabdealAvailablity/>
  </v-container>
</template>
<script>
  import TabdealSlider from "@/components/TabdealSlider";
  import CoinList from "@/components/CoinList";
  import TabdealImages from "@/components/TabdealImages";
  import TabdealFamily from "@/components/TabdealFamily";
  import WhyTabdeal from "@/components/WhyTabdeal";
  import TabdealAvailablity from "@/components/TabdealAvailablity";

  export default {
    name: 'HomePage',
    data() {
      return{

      }
    },
    components: {
      TabdealSlider,
      CoinList,
      TabdealImages,
      TabdealFamily,
      WhyTabdeal,
      TabdealAvailablity
    }
  }
</script>
<style scoped>

</style>
