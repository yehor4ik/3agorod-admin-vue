<template>
  <v-sheet width="500" class="mx-auto">
    <v-form fast-fail @submit.prevent="createCollection">
      <v-text-field  label="Collection name" v-model="name"/>

      <v-file-input
          accept="image/*"
          label="Background image"
          @change="uploadImage"
      />

      <v-btn type="submit" color="primary" block class="mt-2">Sign in</v-btn>

    </v-form>
  </v-sheet>
</template>

<script>
import Vue from 'vue';
import Component from 'vue-class-component';
import {apiImage} from "@/services/api/Image/ApiImage";
import {apiCollection} from "@/services/api/Collection/ApiCollection";
import {ROUTES_PATHS} from "@/router";

@Component
export default class CreateCollectionPage extends Vue {
  backgroundId = null;
  name = '';

  uploadImage(file) {
    apiImage.create(file)
        .then(res => {
          this.backgroundId = res.id;
        })
        .catch((e) => console.error(e))
  }
  createCollection() {
    apiCollection.create({backgroundId: this.backgroundId, name: this.name})
        .then(() => {
          this.$router.push(`/${ROUTES_PATHS.COLLECTION}`);
          this.backgroundId = null;
          this.name = '';
        })
        .catch(e => console.error(e))
  }
}

// export default {
//   name: 'CreateCollectionPage',
//   data: () => ({
//     backgroundId: null,
//     name: '',
//   }),
//   methods: {
//     uploadImage(file) {
//       apiImage.create(file)
//           .then(res => {
//             this.backgroundId = res.id;
//           })
//           .catch((e) => console.error(e))
//     },
//     createCollection() {
//       apiCollection.create({backgroundId: this.backgroundId, name: this.name})
//           .then(() => {
//             this.$router.push(`/${ROUTES_PATHS.COLLECTION}`)
//           })
//           .catch(e => console.error(e))
//     }
//   }
// }
</script>

<style lang="scss" scoped>

</style>