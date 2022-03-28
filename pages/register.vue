<template>
  <v-card max-width="50%" class="mx-auto mt-16">
    <v-container>
      <v-row>
        <v-col cols="12" class="register-box px-10 py-5">
          <h2 class="mb-5">
            به تبدیل خوش آمدید!
          </h2>
          <h4 class="mb-5">
            ثبت نام
          </h4>
          <v-form id="register" @submit.prevent>
            <v-text-field
              outlined
              filled
              color="#F0B90B"
              dense
              v-model="nextUsername"
              placeholder="شماره همراه یا ایمیل خود را وارد کنید"
              name="username"
              type="username"
              @change="usernameChangeHandler"
            ></v-text-field>
            <v-btn
              color="#F0B90B"
              class="ma-2"
              type="submit"
              @click="onSubmitUsername"
            >
            <span
              class="button-text font-weight-bold text-center pr-2"
            >
              ادامه فرایند ثبت نام
            </span>
            </v-btn>
          </v-form>
        </v-col>
      </v-row>
    </v-container>
  </v-card>
</template>
<script>
export default {
  name: 'RegisterPage',
  data() {
    return {
      usernames: [],
      nextUsername: null,
      wrongUsername: true,
    }
  },
  watch: {
    username() {
      let number = this.username
      const persianNumbers = [
        /۰/g,
        /۱/g,
        /۲/g,
        /۳/g,
        /۴/g,
        /۵/g,
        /۶/g,
        /۷/g,
        /۸/g,
        /۹/g,
      ]
      const arabicNumbers = [
        /٠/g,
        /١/g,
        /٢/g,
        /٣/g,
        /٤/g,
        /٥/g,
        /٦/g,
        /٧/g,
        /٨/g,
        /٩/g,
      ]
      for (let i = 0; i < 10; i++) {
        number = number
          .replace(persianNumbers[i], i)
          .replace(arabicNumbers[i], i)
      }
      this.username = number
    },
  },
  mounted() {
    if (localStorage.getItem('usernames')) {
      try {
        this.usernames = JSON.parse(localStorage.getItem('usernames'));
      } catch(e) {
        localStorage.removeItem('usernames');
      }
    }
  },
  methods: {
    // validationMessage() {
    //   const mailFormat = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+\s*$/
    //   const numberFormat = /^([0-9]{10})$|^([0-9]{11})$/
    //
    //   if (this.username) {
    //     if (
    //       !this.username.match(mailFormat) &&
    //       !this.username.match(numberFormat)
    //     ) {
    //       this.wrongUsername = true
    //       return 'لطفا شماره تلفن را به صورت صحیح وارد کنید'
    //     } else {
    //       this.wrongUsername = false
    //     }
    //   } else {
    //     this.wrongUsername = false
    //   }
    // },
    usernameChangeHandler($event) {
      this.username = $event.replace(/\s/g, '')
    },
    onSubmitUsername() {
      if(!this.nextUsername){
        return;
      }
      this.usernames.push(this.nextUsername);
      localStorage.setItem('usernames',JSON.stringify(this.usernames));
      this.nextUsername = null;
      this.saveUsernames();
      setTimeout(() => {
        this.$router.push(
          `/password`
        )
      }, 500)
    },

    saveUsernames() {
      const parsed = JSON.stringify(this.usernames);
      localStorage.setItem('usernames', parsed);
    }
  }
}
</script>
<style>
  .register-box {
    direction: rtl;
  }
</style>
