<template>
  <div>
    <Navbar />
    <router-view></router-view>
  </div>
</template>

<script>
import Vue from 'vue';
import Component from "vue-class-component";
import Navbar from "@/components/Navbar/Navbar.vue";

@Component({
  components: {
    Navbar
  }
})
export default class HomePage extends Vue {}
</script>

<style lang="scss" scoped>

</style>