<template>
  <div class="product-item w-full grid gap-x-8 grid-cols-3">
    <div v-for="n in 20" :key="n" class="article">
      <div class="card-item col-span-1">
        <h1 class="text-violet-400">商品名 {{ n }}</h1>
        <img src="images/dummy.png" />
        <p>商品の詳細</p>
      </div>
    </div>
  </div>
</template>
