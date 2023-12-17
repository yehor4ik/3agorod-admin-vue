<template>
  <v-container fluid>
    <v-app-bar
        color="orange"
        dark
        class="d-flex justify-space-around"
    >
        <router-link :to="getPath.HOME" class="mx-3">Home</router-link>
        <router-link :to="`/${getPath.PRODUCT}`" class="mx-3">Product</router-link>
        <router-link :to="`/${getPath.COLLECTION}`" class="mx-3">Collection</router-link>
    </v-app-bar>
  </v-container>
</template>

<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component';
import {ROUTES_PATHS} from "@/router";

@Component
export default class Navbar extends Vue {
  get getPath(): { [key: string]: string } {
    return ROUTES_PATHS
  }
}
</script>

<style lang="scss" scoped>
</style>