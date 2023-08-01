<template>
  <h1 class="page-title">メインページ</h1>
  <ul class="flex flex-row justify-center">
    <li class="category">メンズ</li>
    <li class="category">レディース</li>
    <li class="category">ユニセックス</li>
    <li class="category">ボーイズ</li>
    <li class="category">ガールズ</li>
  </ul>
  <CardItem />
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
