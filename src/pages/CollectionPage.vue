<template>
  <v-container>
    <router-link :to="getCreatePath">Create</router-link>
    <v-data-table
        :headers="headers"
        :items="desserts"
    >
      <template v-slot:item="row">
        <tr>
          <td>
            <img :src="row.item.backgroundImage.url" alt="background image" />
          </td>
          <td>{{row.item.name}}</td>
          <td>
            <v-btn>
              Action
            </v-btn>
          </td>
        </tr>
      </template>
    </v-data-table>
  </v-container>
</template>

<script>
import Vue from 'vue';
import Component from "vue-class-component";
import {apiCollection} from "@/services/api/Collection/ApiCollection";
import {ROUTES_PATHS} from "@/router";

@Component
export default class CollectionPage extends Vue {
  headers = [
    {
      text: 'Background Image',
      value: 'backgroundImage',
    },
    { text: 'Name', value: 'name' },
    { text: 'Action', value: 'action' },
  ];
  desserts = [];

  mounted() {
    this.fetchCollection();
  }
  fetchCollection() {
    apiCollection.fetch()
        .then(res => {
          this.desserts = res
        })
        .catch(e => console.error(e));
  }

  get getCreatePath() {
    return `/${ROUTES_PATHS.COLLECTION}/${ROUTES_PATHS.CREATE}`;
  }
}
</script>

<style lang="scss" scoped>

</style>