<template>
  <h1 class="page-title">詳細画面</h1>
  <div>
    <RelationList />
  </div>
</template>
<script>
import RelationList from "@/components/RelationList.vue"; // コンポーネントのインポート

export default {
  components: {
    RelationList,
  },
};
</script>
