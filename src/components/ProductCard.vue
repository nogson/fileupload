<script setup lang="ts">
import { ref } from "vue";
import type { Product } from "@/@types/common";

const props = defineProps<{
  productDetail: Product;
  index: number;
  disabledLeft: boolean;
  disabledRight: boolean;
}>();

const navShow = ref(false);

const emit = defineEmits<{
  (event: "changeOrder", { index, dir }: { index: number; dir: string }): void;
  (event: "deleteItem", index: number): void;
}>();

const toggleNav = (flag: boolean) => {
  navShow.value = flag;
};

const changeOrder = (dir: string) => {
  toggleNav(false);
  emit("changeOrder", { index: props.index, dir });
};

const deleteItem = () => {
  toggleNav(false);
  emit("deleteItem", props.index);
};
</script>

<template>
  <div class="product-card">
    <img alt="Vue logo" class="logo" :src="productDetail.thumbnail" />
    <button class="product-card-nav-button" @mouseover="toggleNav(true)">
      設定
    </button>
    <nav v-if="navShow" class="product-card-nav" @mouseleave="toggleNav(false)">
      <ul>
        <li>
          <button
            class="button-icon"
            :disabled="disabledLeft"
            @click="changeOrder('left')"
          >
            <mdicon name="arrow-left" :width="18" :height="18" />
            <span>左へ移動</span>
          </button>
        </li>
        <li>
          <button
            class="button-icon"
            :disabled="disabledRight"
            @click="changeOrder('right')"
          >
            <mdicon name="arrow-right" :width="18" :height="18" />右へ移動
          </button>
        </li>
        <li>
          <button class="button-icon delete-button" @click="deleteItem">
            <mdicon name="delete" :width="18" :height="18" />画像の削除
          </button>
        </li>
      </ul>
    </nav>
  </div>
</template>

<style scoped>
.product-card {
  position: relative;
  border: 1px solid var(--color-gray-thin);
  display: inline-block;
  padding: 8px;
  width: 180px;
}

.product-card img {
  width: 100%;
  vertical-align: top;
}

.product-card-nav-button {
  position: absolute;
  top: 4px;
  right: 4px;
  border: none;
  padding: 8px;
  border-radius: 4px;
  background: rgba(0, 0, 0, 0.5);
  color: #fff;
}

.product-card-nav {
  position: absolute;
  top: 4px;
  right: 4px;
}

.product-card-nav ul {
  list-style-type: none;
  background: #fff;
  padding: 0;
  font-size: 12px;
  border-radius: 4px;
  box-shadow: 0 1px 1px 1px var(--color-gray-thin);
}

.product-card-nav button {
  background: none;
  border: none;
  padding: 8px;
}

.product-card-nav li:not(:first-child) {
  border-top: 1px solid var(--color-gray-thin);
}

.delete-button {
  color: var(--color-red);
}
</style>
