<template>
  <div class="block_Category">
    <input
      class="input_Category"
      type="radio"
      name="category"
      :id="itemId"
      @change="changeActiveCategory(indexCategory)"
      :checked="this.indexCategory == this.activeCategory"
    />
    <label class="label_Category" :for="itemId">
      <slot></slot>
      <button
        @click="categoryDelete(indexCategory)"
        class="delete_Category"
        type="button"
      ></button>
    </label>
  </div>
</template>

<script>
import { mapState, mapMutations } from "vuex";
export default {
  props: ["indexCategory", "itemId"],
  name: "AsideCategoryBlock",
  methods: {
    ...mapMutations(["changeActiveCategory", "categoryDelete"]),
  },
  computed: {
    ...mapState({
      arrTasks: (state) => state.arrTask.arrTasks,
      activeCategory: (state) => state.arrTask.activeCategory,
    }),
  },
};
</script>

<style scoped>
.block_Category {
  display: flex;
  height: 50px;
}

.input_Category {
  display: none;
}

.label_Category {
  cursor: pointer;
  padding: auto;
  width: 100%;
  display: flex;
  padding: 5px 15px;
  align-items: center;
  justify-content: space-between;
  background-color: #3aafa9;
  font-family: opensans_regular;
  color: #feffff;
  font-size: 1.4rem;
}

.input_Category:checked + .label_Category {
  background-color: #2b7a78;
  font-family: opensans_bold;
  font-weight: bold;
  color: #feffff;
  font-size: 1.8rem;
  letter-spacing: 0.02rem;
}

.delete_Category {
  width: 30px;
  height: 30px;
  background: url("https://img.icons8.com/ios-glyphs/120/FEFFFF/filled-trash.png");
  background-size: 30px 30px;
  background-repeat: no-repeat;
  background-position: center;
  background-color: inherit;
  cursor: pointer;
  border: 0px;
}
</style>