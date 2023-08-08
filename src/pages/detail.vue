<template>
  <h1 class="page-title">詳細画面</h1>
  <div>
    <div class="item-conteiner my-14">
      <h2 class="item-name">商品の名称</h2>
      <img src="../images/item_image.png" alt="商品画像" class="" />
      <p class="description">名称の説明</p>
    </div>
  </div>
  <div class="price-diff my-14">
    <ul class="price-list">
      <li class="item-list">
        <ul class="item-detail-list flex flex-row">
          <li class="item-element">順位</li>
          <li class="item-element">サイトアイコン</li>
          <li class="item-element">販売店</li>
          <li class="item-element">価格</li>
          <li class="item-element">送料</li>
          <li class="item-element">商品情報</li>
        </ul>
      </li>
      <li class="item-list">
        <ul class="item-detail-list flex flex-row">
          <li class="item-element">順位</li>
          <li class="item-element">サイトアイコン</li>
          <li class="item-element">販売店</li>
          <li class="item-element">価格</li>
          <li class="item-element">送料</li>
          <li class="item-element">商品情報</li>
        </ul>
      </li>
      <li class="item-list">
        <ul class="item-detail-list flex flex-row">
          <li class="item-element">順位</li>
          <li class="item-element">サイトアイコン</li>
          <li class="item-element">販売店</li>
          <li class="item-element">価格</li>
          <li class="item-element">送料</li>
          <li class="item-element">商品情報</li>
        </ul>
      </li>
      <li class="item-list">
        <ul class="item-detail-list flex flex-row">
          <li class="item-element">順位</li>
          <li class="item-element">サイトアイコン</li>
          <li class="item-element">販売店</li>
          <li class="item-element">価格</li>
          <li class="item-element">送料</li>
          <li class="item-element">商品情報</li>
        </ul>
      </li>
      <li class="item-list">
        <ul class="item-detail-list flex flex-row">
          <li class="item-element">順位</li>
          <li class="item-element">サイトアイコン</li>
          <li class="item-element">販売店</li>
          <li class="item-element">価格</li>
          <li class="item-element">送料</li>
          <li class="item-element">商品情報</li>
        </ul>
      </li>
    </ul>
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
