<template>
  <div>
    <div class="main_page_block">
      <asideBlock></asideBlock>
      <div class="task_box">
        <addTaskBlock></addTaskBlock>
        <mainBlock></mainBlock>
      </div>
    </div>
  </div>
</template>

<script>
import AsideBlock from "@/components/AsideBlock";
import MainBlock from "@/components/MainBlock";
import AddTaskBlock from "@/components/AddTaskBlock";

export default {
  components: {
    AsideBlock,
    MainBlock,
    AddTaskBlock,
  },
};
</script>

<style scoped>
@media (max-width: 767px) {
  .main_page_block {
    flex-wrap: wrap;
    margin-top: 25px;
    padding: 0 20px;
  }

  .task_box {
    width: 100%;
    margin-top: 25px;
  }
}

@media (min-width: 768px) {
  .main_page_block {
    margin-top: 30px;
    max-width: 900px;
    padding: 0 25px;
  }

  .task_box {
    margin-left: 50px;
    width: 100%;
  }
}

.main_page_block {
  max-width: 900px;
  margin-left: auto;
  margin-right: auto;
}

.main_page_block {
  display: flex;
}
</style>