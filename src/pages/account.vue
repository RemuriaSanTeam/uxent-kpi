<template>
  <h1 class="page-title">アカウント画面</h1>
  <v-img src="../assets/images/dummy.png" class="account-image"></v-img>
  <p class="account-name"></p>
  <p class="account-id"></p>
  <ul class="product-item w-full grid grid-cols-4 history-list">
    <li v-for="n in 20" :key="n" class="article col-span-1 history-item"></li>
  </ul>
</template>
