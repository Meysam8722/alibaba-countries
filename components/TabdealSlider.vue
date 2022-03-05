<template>
  <v-container fluid>
    <v-row justify="center">
      <div class="d-flex flex-column tabdeal-slider slider-height">
        <div class="tabdeal-slider">
          <v-img
              lazy-src="https://tabdeal.org/images/homepage/tabdeal-typo-logo-white.svg"
              height="44"
              max-width="107.08"
              src="https://tabdeal.org/images/homepage/tabdeal-typo-logo-white.svg"
          ></v-img>
          <h1 class="tabdeal-banner">
            صرافی ارز دیجیتال
          </h1>
        </div>
        <div class="tabdeal-slider">
          <p class="tabdeal-subtitle pt-5">
            خرید و فروش امن و آسان به روز ترین ارزهای دیجیتال جهان
          </p>
        </div>
        <div class="tabdeal-slider constraint d-flex flex-row">
          <v-btn class="d-flex flex-grow-1 col-sm-5 mr-5 ml-5" color="#F0B90B">
            <span class="button-text text-center pa-10">
              همین حالا ثبت نام کنید
            </span>
          </v-btn>
          <v-text-field
              class="tabdeal-input d-flex col-sm-7 mx-5 mb-5"
              label="شماره همراه خود را وارد کنید"
          >
          </v-text-field>
        </div>
      </div>

    </v-row>
  </v-container>

</template>
<script>

</script>
<style scoped>
  .tabdeal-slider {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    background-color: #1a1c1f;
    width: 100% !important;
  }

  .slider-height {
    height: 400px;
  }

  .tabdeal-banner {
    color: white;
    font-size: 42px !important;
    font-weight: 500 !important;
    padding-left: 10px;
  }

  .tabdeal-input {
    background-color: white;
    border-radius: 5px;
  }

  .tabdeal-subtitle {
    font-size: 23px;
    color: #cacccf;
  }

  .button-text {
    font-weight: normal;
    font-size: 20px;
  }

  .constraint {
    max-width: 540px;
  }

</style>

