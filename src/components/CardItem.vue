<template>
  <div class="product-item mx-9 grid grid-cols-3 border border-indigo-600">
    <div v-for="n in 20" :key="n" class="article col-span-1">
      <div class="card-item">
        <h1 class="text-violet-400">商品名 {{ n }}</h1>
        <img src="images/dummy.png" />
        <p>商品の詳細</p>
      </div>
    </div>
  </div>
</template>
<script setup>
const yahoo_api = await useFetch("/api/yahoo", {});
const rakuten_api = await useFetch("/api/rakuten", {});
</script>
