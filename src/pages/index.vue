<template>
  <h1 class="page-title">メインページ</h1>
  <div class="product-item w-full grid gap-x-8 grid-cols-3">
    <CardItem />
  </div>
</template>
<style scoped>
.article {
  margin: 8px;
}
</style>

<script>
import CardItem from "@/components/CardItem.vue"; // コンポーネントのインポート

export default {
  components: {
    CardItem,
  },
};
</script>
