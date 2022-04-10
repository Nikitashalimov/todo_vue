<template>
  <div class="main_box">
    <taskBlock
      v-for="(task, index) in arrTasks[activeCategory].arr"
      :key="task"
      :indexTask="index"
      >{{ task.task }}</taskBlock
    >
  </div>
</template>

<script>
import { mapState } from "vuex";
import TaskBlock from "@/components/UI/Task";
export default {
  components: {
    TaskBlock,
  },
  name: "MainBlock",
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
  .main_box {
    width: 100%;
    margin-top: 25px;
  }
}

@media (min-width: 768px) {
  .main_box {
    width: 100%;
    margin-top: 30px;
  }
}

.main_box {
  padding: 15px;
  border-radius: 5px;
  background-color: #feffff;
  box-shadow: 2px 2px 5px gray;
  margin-bottom: auto;
}
</style>