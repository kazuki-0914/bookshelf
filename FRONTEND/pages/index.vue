<template>
  <div>
    <div class="inline" v-for="tag in bookList.tags">
      <div class="inline" @click="filterTags()">
        <v-btn depressed elevation="2" outlined> {{ tag }} </v-btn>
      </div>
    </div>
    <div>
      <div class="inline" v-for="book in bookList.books">
        <div class="inline" @click="move()">
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
import bookList from "@/assets/books-list.json";

export default {
  asyncData() {
    console.log(bookList);
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
};
</script>

<style>
.red {
  color: red;
}
.inline {
  display: inline;
}
</style>