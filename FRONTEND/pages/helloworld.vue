<template>
  <div>
    <h1>Hello world!</h1>
    <NuxtLink to="/">Home page</NuxtLink>
    <p>{{ ip }}</p>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  async asyncData({ $axios }) {
    const ip = await $axios.$get("http://icanhazip.com");
    return { ip };
  },
});
</script>