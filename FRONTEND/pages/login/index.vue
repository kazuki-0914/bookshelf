<template>
  <div>
    <h1 class="red">login</h1>
    <NuxtLink to="/">TOPへ</NuxtLink>


  <form>
    <div class="form-group">
      <label for="exampleInputEmail1">メールアドレス</label>
      <input v-model="form.email" type="email" class="form-control" id="exampleInputEmail1" placeholder="メールアドレス">
      <small v-bind:class="{'is-hide':validation.email}" class="form-text text-info">{{ errorMessage.email }}</small>
    </div>
    <div class="form-group">
      <label for="exampleInputPassword">パスワード</label>
      <input v-model="form.email" type="password" class="form-control" id="exampleInputPassword" placeholder="パスワード">
      <small v-bind:class="{'is-hide':validation.password}" class="form-text text-info">{{ errorMessage.password }}</small>
    </div>
    <div class="btn-container"><button type="submit" v-bind:disabled="!isValid" class="btn btn-primary">送信</button></div>
    
  </form>

  </div>
</template>

<script>
  export default {
    head() {
      // Set Meta Tags for this Page
    }
    // ...
  }
</script>

<style>
  .red {
    color: red;
  }
</style>