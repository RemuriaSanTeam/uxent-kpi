<template>
  <h1 class="page-title">メインページ</h1>
  <ul class="flex flex-row justify-center">
    <li class="category">甘ロリ</li>
    <li class="category">ゴスロリ</li>
    <li class="category">クラロリ</li>
    <li class="category">華ロリ</li>
    <li class="category">皇子ロリ</li>
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
