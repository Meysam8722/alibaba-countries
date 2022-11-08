<template>
  <v-container fluid class="pa-0">
    <div class="d-flex flex-row justify-space-between align-center">
      <v-text-field
        v-model="search"
        placeholder="Search for a country..."
        prepend-inner-icon="mdi-magnify"
        loading="false"
      ></v-text-field>
    </div>
    <Countries :search="search"/>
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
  import Countries from '~/components/Countries'

  export default {
    name: 'HomePage',
    data() {
      return{
        search: '',
      }
    },
    components: {
      TabdealSlider,
      CoinList,
      TabdealImages,
      TabdealFamily,
      WhyTabdeal,
      TabdealAvailablity,
      Countries,
    }
  }
</script>
<style scoped>

</style>
