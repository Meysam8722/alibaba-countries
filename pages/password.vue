<template>
  <v-card max-width="50%" class="mx-auto mt-16">
    <v-container>
      <v-row>
        <v-col cols="12" class="register-box px-10 py-5">
          <h4 class="mb-5">
            رمز عبور
          </h4>
          <v-form id="password" @submit.prevent>
            <v-text-field
              outlined
              filled
              color="#F0B90B"
              dense
              v-model="nextPassword"
              placeholder="یک رمز عبور برای خود انتخاب کنید"
              name="password"
              autocomplete="password"
              type="password"
            ></v-text-field>
            <v-btn
              color="#F0B90B"
              class="ma-2"
              type="submit"
              @click="onSubmitPassword"
            >
            <span
              class="button-text font-weight-bold text-center pr-2"
            >
              ثبت نام
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
  name: 'PasswordPage',
  data() {
    return {
      passwords: [],
      nextPassword: null,
      wrongPassword: true,
    }
  },
  mounted() {
    if (localStorage.getItem('passwords')) {
      try {
        this.passwords = JSON.parse(localStorage.getItem('passwords'));
      } catch(e) {
        localStorage.removeItem('passwords');
      }
    }
  },
  methods: {
    onSubmitPassword() {
      if(!this.nextPassword){
        return;
      }
      this.passwords.push(this.nextPassword);
      localStorage.setItem('passwords',JSON.stringify(this.passwords));
      this.nextPassword = null;
      this.savePasswords();
      setTimeout(() => {
        this.$router.push(
          `/login`
        )
      }, 500)
    },

    savePasswords() {
      const parsed = JSON.stringify(this.passwords);
      localStorage.setItem('passwords', parsed);
    }
  }
}
</script>
<style>
.register-box {
  direction: rtl;
}
</style>
