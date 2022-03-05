<template>
  <v-container fluid>
    <v-row>
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
        <v-row>
          <v-col class="d-flex flex-column" cols="12" md="6">
            <div class="d-flex flex-row">
              <div class="d-flex flex-column text">
                <h3>
                  ابزار حرفه‌ای معامله
                </h3>
                <p>
                  با ابزار‌های حرفه‌ای خرید و فروش از جمله حدضرر (stop loss) و OCO ریسک معاملات خود را در هر زمان و هر شرایطی مدیریت کنید.
                </p>
              </div>
              <div class="circle d-flex flex-row justify-center align-center elevation-3">
                <v-img
                    src="https://tabdeal.org/images/homepage/new-content/start-pro-tools-icon.svg"
                    lazy-src="https://tabdeal.org/images/homepage/new-content/start-pro-tools-icon.svg"
                    max-width="64px"
                    max-height="64px"
                ></v-img>
              </div>
            </div>

            <div class="d-flex flex-row">
              <div class="d-flex flex-column text">
                <h3>
                  کیف پول اختصاصی امن
                </h3>
                <p>
                  ارز‌های دیجیتال خود را می‌توانید روی کیف پول امن خود در تبدیل نگهداری کنید و در صورت نیاز روی انواع شبکه‌ها به کیف پول‌های دیگر انتقال دهید.
                </p>
              </div>
              <div class="circle d-flex flex-row justify-center align-center elevation-3">
                <v-img
                    src="https://tabdeal.org/images/homepage/new-content/start-wallet-security-icon.svg"
                    lazy-src="https://tabdeal.org/images/homepage/new-content/start-wallet-security-icon.svg"
                    max-width="64px"
                    max-height="64px"
                ></v-img>
              </div>
            </div>

            <div class="d-flex flex-row">
              <div class="d-flex flex-column text">
                <h3>
                  پشتیبانی سریع
                </h3>
                <p>
                  تیم پشتیبانی تبدیل در تمامی شرایط از طریق چت آنلاین و تلفن، همراه شما هستند و راهنمایی‌های لازم جهت استفاده از سایت را به شما می‌رسانند.
                </p>
              </div>
              <div class="circle d-flex flex-row justify-center align-center elevation-3">
                <v-img
                    src="https://tabdeal.org/images/homepage/new-content/start-support-icon.svg"
                    lazy-src="https://tabdeal.org/images/homepage/new-content/start-support-icon.svg"
                    max-width="64px"
                    max-height="64px"
                ></v-img>
              </div>
            </div>


          </v-col>
          <v-col class="d-flex flex-row flex-grow-1 full-width" cols="12" sm="6" >
            <v-img
                lazy-src="https://tabdeal.org/images/homepage/new-content/panel-mockup-mobile.png"
                src="https://tabdeal.org/images/homepage/new-content/panel-mockup-mobile.png"
                max-height="450px"
                class="d-flex flex-row"
            ></v-img>
          </v-col>
        </v-row>

      </div>
    </v-row>
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
    background-color: #f6f7fa;
    width: 100% !important;
    height: 700px;
  }

  .family-title {
    font-size: 42px !important;
  }

  .text {
    direction: rtl;
  }

  .circle {
    width: 100px !important;
    height: 100px !important;
    background-color: #ffffff;
    border-radius: 50%;
  }

  .full-width {
    width: 100% !important;
  }

</style>