<template>
  <h1 class="page-title">詳細画面</h1>
  <div>
    <ItemDetail />
  </div>
  <div>
    <RelationList />
  </div>
</template>
<script>
import ItemDetail from "@/components/ItemDetail.vue";
import RelationList from "@/components/RelationList.vue"; // コンポーネントのインポート

export default {
  components: {
    RelationList,
    ItemDetail,
  },
};
</script>
