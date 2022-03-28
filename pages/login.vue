<template>
  <v-card max-width="50%" class="mx-auto mt-16">
    <v-container>
      <v-row>
        <v-col cols="12" class="register-box px-10 py-5">
          <h2 class="mb-5">
            به تبدیل خوش آمدید!
          </h2>
          <h4 class="mb-5">
            ورود
          </h4>
          <v-form id="register" @submit.prevent>
            <span v-if="wrongInput" class="wrong-password-message">
              لطفاً نام کاربری و رمز عبور را به درستی وارد نمایید
            </span>
            <v-text-field
              outlined
              filled
              color="#F0B90B"
              dense
              v-model="enteredUsername"
              placeholder="نام کاربری"
              name="username"
              type="username"
              @change="usernameChangeHandler"
            ></v-text-field>
            <span v-if="wrongUsername" class="wrong-password-message">
              این نام کاربری قبلاً ثبت نشده است
            </span>
            <v-text-field
              outlined
              filled
              color="#F0B90B"
              dense
              v-model="enteredPassword"
              placeholder="رمز عبور"
              name="password"
              type="password"
            ></v-text-field>
            <span v-if="wrongPassword" class="wrong-password-message">
              رمز عبور نادرست است
            </span>
            <v-btn
              color="#F0B90B"
              class="ma-2"
              type="submit"
              @click="submitHandler"
            >
            <span
              class="button-text font-weight-bold text-center pr-2"
            >
              ورود
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
  name: 'LoginPage',
  data() {
    return {
      usernames: [],
      passwords: [],
      enteredUsername: null,
      enteredPassword: null,
      wrongUsername: false,
      wrongPassword: false,
      wrongInput: false
    }
  },
  mounted() {
    this.wrongUsername = false
    this.wrongPassword = false
    this.wrongInput = false
    if (localStorage.getItem('usernames')) {
      try {
        this.usernames = JSON.parse(localStorage.getItem('usernames'));
      } catch(e) {
        localStorage.removeItem('usernames');
      }
    }

    if (localStorage.getItem('passwords')) {
      try {
        this.passwords = JSON.parse(localStorage.getItem('passwords'));
      } catch(e) {
        localStorage.removeItem('passwords');
      }
    }
  },
  methods: {
    submitHandler() {
      this.wrongUsername = false
      this.wrongPassword = false
      this.wrongInput = false
      if(this.enteredUsername && this.enteredPassword){
        console.log('user & pass entered')
        if(this.usernames.includes(this.enteredUsername)){
          console.log('username exists')
          if(this.passwords[this.usernames.indexOf(this.enteredUsername)] === this.enteredPassword){
            console.log('password is correct')
            localStorage.setItem('isLogined',true);
            setTimeout(() => {
              this.$router.push(
                `/`
              )
            }, 500)
          }else{
            this.wrongPassword = true
          }
        }else{
          this.wrongUsername = true
        }
      }else {
        this.wrongInput = true
      }
    }
  }
}
</script>
<style>
.register-box {
  direction: rtl;
}

.wrong-password-message {
  color: red;
}
</style>
