<template>
  <div class="product-item my-12 w-full flex flex-nowrap justify-around">
    <div v-for="n in 4" :key="n" class="article">
      <div class="detail-list col-span-1">
        <v-img src="images/dummy.png" />
        <p class="text-violet-400">商品名 {{ n }}</p>
        <p>商品の詳細</p>
      </div>
    </div>
  </div>
</template>

<script></script>
