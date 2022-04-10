<template>
  <div class="aside_box">
    <div class="formCategory">
      <input
        v-model="newCategory"
        type="text"
        placeholder="Введите новую категорию..."
        class="newCategory"
        v-on:keyup.enter="addCategory(this.newCategory)"
      />
      <button
        @click="addCategory(this.newCategory)"
        class="addCategory"
        type="button"
      ></button>
    </div>
    <asideCategoryBlock
      v-for="(arrCategoryItem, index) in arrTasks"
      :key="arrCategoryItem"
      :indexCategory="index"
      :itemId="arrCategoryItem.name + index"
      >{{ arrCategoryItem.name }}</asideCategoryBlock
    >
  </div>
</template>
<script>
import { mapState } from "vuex";
import AsideCategoryBlock from "@/components/UI/Category";
export default {
  components: {
    AsideCategoryBlock,
  },
  name: "AsideBlock",
  data() {
    return {
      newCategory: "",
    };
  },
  methods: {
    addCategory(index) {
      this.$store.commit("addCategory", index);
      this.newCategory = "";
    },
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
@media (max-width: 767px) {
  .aside_box {
    width: 100%;
  }
}

@media (min-width: 768px) {
  .aside_box {
    min-width: 270px;
  }
}

.aside_box {
  min-height: 100px;
  border-radius: 5px;
  background-color: #feffff;
  box-shadow: 2px 2px 5px gray;
  padding: 15px;
  margin-bottom: auto;
}

.formCategory {
  display: flex;
}

.newCategory {
  height: 40px;
  width: calc(100% - 40px);
  border: 1px solid #17252a;
  padding: 6px 15px;
  background-color: #def2f1;
  font-family: opensans_regular;
  color: #17252a;
  font-size: 1.4rem;
}

.newCategory::placeholder {
  font-family: opensans_regular;
  color: #3AAFA9;
  font-size: 1.4rem;
}

.addCategory {
  width: 40px;
  height: 40px;
  background: url("https://img.icons8.com/external-tanah-basah-glyph-tanah-basah/120/FEFFFF/external-plus-user-interface-tanah-basah-glyph-tanah-basah-2.png");
  background-size: 35px 35px;
  background-repeat: no-repeat;
  background-position: center;
  cursor: pointer;
  background-color: #3aafa9;
  border: 0px;
}
</style>