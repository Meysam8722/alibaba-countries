<template>
  <v-container class="d-flex flex-row">
    <v-img
        lazy-src="https://tabdeal.org/images/homepage/new-content/phone-mockup-opt.png"
        src="https://tabdeal.org/images/homepage/new-content/phone-mockup-opt.png"
    ></v-img>
    <div class="d-flex flex-column tabdeal-family mx-auto">
      <h1 class="family-title mt-16">
        همین امروز به خانواده بزرگ تبدیل بپیوندید
      </h1>
      <v-img
          lazy-src="https://tabdeal.org/images/homepage/new-content/spacer.svg"
          max-width="72px"
          max-height="16px"
          src="https://tabdeal.org/images/homepage/new-content/spacer.svg"
          class="my-3"
      ></v-img>
      <p class="text">
        با هر سطحی از دانش در سریع‌ترین زمان با آموزش گام به گام سرمایه گذاری را تجربه کنید.
      </p>
    </div>
  </v-container>
</template>
<script>

</script>
<style scoped>
  .tabdeal-family {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    background-color: #212224;
    width: 100% !important;
    height: 700px;
  }

  .family-title {
    font-size: 42px !important;
  }

  .text {
    direction: rtl;
  }
</style>