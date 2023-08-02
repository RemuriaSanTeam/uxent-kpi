<template>
  <div class="product-item w-full grid grid-cols-3">
    <div v-for="n in 20" :key="n" class="article col-span-1">
      <div class="card-item">
        <h1 class="text-violet-400">商品名 {{ n }}</h1>
        <img src="images/dummy.png" />
        <p>商品の詳細</p>
      </div>
    </div>
  </div>
</template>
