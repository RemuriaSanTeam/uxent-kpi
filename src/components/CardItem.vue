<template>
  <div class="product-item w-full grid grid-cols-3">
    <div v-for="post in posts" :key="post.id" class="article col-span-1">
      <div class="card-item">
        <h1 class="text-violet-400">商品名 {{ post.title }}</h1>
        <v-img src="images/dummy.png" />
        <p>商品の詳細</p>
      </div>
    </div>
  </div>
</template>

<script>
import { useFetch } from "@nuxtjs/composition-api";

export default {
  setup() {
    const { data, error } = useFetch(
      "https://shopping.yahooapis.jp/ShoppingWebService/V3/itemSearch"
    );

    if (error.value) {
      console.error(error.value);
    }

    return { posts: data.value };
  },
};
</script>
