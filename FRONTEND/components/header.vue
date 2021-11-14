<template>
  <div>
    <!-- // 全体的にボタンデザインにする。
// アクションとリンク分ける。 -->
    <!-- <NuxtLink to="/">Books</NuxtLink>
    <NuxtLink to="/">借りる</NuxtLink>
    <NuxtLink to="/request">要望</NuxtLink>
    <NuxtLink to="/user">ユーザー管理</NuxtLink>
    <NuxtLink to="/">返却</NuxtLink>
    <NuxtLink to="/login">ログイン</NuxtLink>
    <h1>header</h1> -->
    <v-btn depressed elevation="2" outlined to="/"> Books </v-btn>
    <v-btn depressed elevation="2" outlined to="/"> 借りる </v-btn>

    <v-btn depressed elevation="2" outlined to="/request"> 要望 </v-btn>
    <!-- 権限判断 -->
    <v-btn depressed elevation="2" outlined to="/user"> ユーザー管理 </v-btn>
    <div class="inline" @click="returnBooks">
      <v-btn depressed elevation="2" outlined> 返却 </v-btn>
    </div>
    <v-btn depressed elevation="2" outlined to="/login"> ログイン </v-btn>
  </div>
</template>

<script lang="ts">
export default {
  methods: {
    returnBooks() {
      alert("返したよ");
    },
  },
};
</script>
<style>
.inline {
  display: inline;
}
</style>