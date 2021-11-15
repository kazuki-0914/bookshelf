<template>
  <div>
    <div class="inline" v-for="tag in bookList.tags">
      <div class="inline" @click="filterTags()">
        <v-btn depressed elevation="2" outlined> {{ tag }} </v-btn>
      </div>
    </div>
    <div>
      <div class="inline" v-for="book in bookList.books">
        <div class="inline">
          <NuxtLink to="/book">
            <v-img :src="book.image" height="200" width="300" />
            <p>{{ book.title }}</p>
          </NuxtLink>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  async asyncData({ $axios }) {
        const bookList = await $axios.$get("/book-list");
    return { bookList };
  },
  methods: {
    filterTags() {
      alert("フィルター");
    },
    move() {
      alert("詳細へ");
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