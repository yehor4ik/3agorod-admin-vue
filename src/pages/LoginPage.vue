<template>
  <div class="d-flex align-center justify-center" style="height: 100vh">
    <v-sheet width="400" class="mx-auto">
      <v-form fast-fail @submit.prevent="login">
        <v-text-field v-model="email" label="Email"></v-text-field>

        <v-text-field v-model="password" label="Password" type="password"></v-text-field>

        <v-btn type="submit" color="primary" block class="mt-2">Sign in</v-btn>

      </v-form>
    </v-sheet>
  </div>
</template>

<script>
import {apiAuth} from "@/services/api/Auth/ApiAuth";
import {ROUTES_PATHS} from "@/router";
import Vue from 'vue'
import Component from 'vue-class-component'

@Component
export default class LoginPage extends Vue {
  email = '';
  password = '';

  login() {
      apiAuth.login({email: this.email, password: this.password}).then(() => {
        this.email = '';
        this.password = '';
        this.$router.push(ROUTES_PATHS.HOME)
      }).catch(e => console.error(e))
    }
}
</script>

<style lang="scss" scoped>

</style>