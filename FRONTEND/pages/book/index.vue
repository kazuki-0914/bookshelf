<template>
  <div>
    <p>{{ bookDetail.title }}</p>
    <v-img :src="bookDetail.image" height="200" width="300" />
    <p>{{ bookDetail.stock }}</p>
    <div class="inline" v-for="owners in bookDetail.owners">
      <div class="inline">
        <p>{{ owners.name }}</p>
        <p>{{ owners.address }}</p>
        <p>{{ owners.start_date }}</p>
        <v-btn depressed elevation="2" outlined @click="rent"> 借りる </v-btn>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  async asyncData({ $axios }) {
        const bookDetail = await $axios.$get("/book-detail");
    return { bookDetail };
  },
  methods: {
    rent() {
      alert("借りたぜ");
    },
  },
});
</script>

<style>
.red {
  color: red;
}
.inline {
  display: inline;
}
</style>