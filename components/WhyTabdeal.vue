<template>
  <v-container fluid>
    <div class="d-flex flex-column tabdeal-family mx-auto">
      <h1 class="family-title mt-16">
        چرا تبدیل؟
      </h1>
      <v-img
          lazy-src="https://tabdeal.org/images/homepage/new-content/spacer.svg"
          max-width="72px"
          max-height="16px"
          src="https://tabdeal.org/images/homepage/new-content/spacer.svg"
          class="my-3"
      ></v-img>
      <p class="text">
        چرا تبدیل را برای خرید و فروش ارزهای دیجیتال به شما پیشنهاد می‌کنیم؟
      </p>
    </div>
    <v-row >
      <v-col
        cols="12"
        md="3"
        v-for="(item, index) in whyTabdeal"
        :key="index"
      >
        <div class="d-flex flex-column">
          <v-img
              :src="item.icon"
              :lazy-src="item.icon"
              height="100px"
              width="100px"
              contain
          ></v-img>
          <h3>{{item.title}}</h3>
          <p>{{item.text}}</p>

        </div>
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
  export default {
    data() {
      return{
        whyTabdeal: [
          {
            icon: "https://tabdeal.org/images/homepage/new-content/whyus-many-crypto-icon.svg",
            title: "بیشترین تنوع ارزی",
            text: "در صرافی ارز دیجیتال تبدیل، بیشترین تنوع ارزی در بین بازار‌های معاملاتی ایران را با بازار‌های تومانی و تتری متنوع تجربه کنید."
          },
          {
            icon: "https://tabdeal.org/images/homepage/new-content/whyus-easy-as-pie-icon.svg",
            title: "حداقل فاصله خرید و فروش",
            text: "ربات‌های بازارگردان تبدیل با نظارت 24 ساعته بر قیمت‌های جهانی، کمترین میزان گپ خرید و فروش را برای کاربران ایجاد می‌نماید."
          },
          {
            icon: "https://tabdeal.org/images/homepage/new-content/whyus-invitation-icon.svg",
            title: "کسب درآمد",
            text: "با دعوت از دوستان خود به تبدیل، درآمد کسب نمایید. اطلاعات بیشتر را در صفحهٔ دعوت از دوستان ببینید."
          },
          {
            icon: "https://tabdeal.org/images/homepage/new-content/whyus-24h-auth-icon.svg",
            title: "احراز هویت سریع",
            text: "با ثبت نام و انجام فرایند سریع و آسان احراز هویت در تبدیل، فقط چند کلیک با شروع معامله فاصله دارید."
          }
        ]
      }
    }
  }
</script>
<style scoped>
  .tabdeal-family {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    background-color: #ffffff;
    width: 100% !important;
    height: 400px;
  }

  .family-title {
    font-size: 42px !important;
  }

  .text {
    direction: rtl;
  }
</style>