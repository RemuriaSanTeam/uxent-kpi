<template>
  <h1 class="page-title">メインページ</h1>
  <ul class="flex flex-row justify-center">
    <li class="category_list">
      <button @click="category('mens')">メンズ</button>
    </li>
    <li class="category_list">
      <button @click="category('women')">レディース</button>
    </li>
    <li class="category_list">
      <button @click="category('unisex')">ユニセックス</button>
    </li>
    <li class="category_list">
      <button @click="category('boys')">ボーイズ</button>
    </li>
    <li class="category_list">
      <button @click="category('girls')">ガールズ</button>
    </li>
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
