<template>
  <div class="product-item w-full flex flex-nowrap">
    <div v-for="n in 4" :key="n" class="article">
      <div class="detail-list col-span-1">
        <img src="images/dummy.png" />
        <p class="text-violet-400">商品名 {{ n }}</p>
        <p>商品の詳細</p>
      </div>
    </div>
  </div>
</template>
