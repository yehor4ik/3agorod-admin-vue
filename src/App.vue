<template>
  <div id="app">
    <v-app id="inspire">
      <router-view></router-view>
    </v-app>
  </div>
</template>

<script lang="ts">
import { Vue } from 'vue-property-decorator';

export default class App extends Vue {}
</script>

