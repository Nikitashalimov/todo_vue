<template>
  <div class="task_block" :class="{ task_block_finished: taskStatus }">
    <div class="task_content">
      <input
        class="task_checkbox"
        type="checkbox"
        v-model="taskStatus"
        @change="changeStatus(this.indexTask)"
      />
      <div class="text_content" :class="{ task_finished: taskStatus }">
        <slot></slot>
      </div>
    </div>
    <button class="delete_Task" @click="taskDelete(this.indexTask)"></button>
  </div>
</template>

<script>
import { mapState, mapMutations } from "vuex";
export default {
  props: ["indexTask"],
  name: "TaskBlock",
  methods: {
    ...mapMutations(["taskDelete", "changeStatus"]),
  },
  computed: {
    ...mapState({
      arrTasks: (state) => state.arrTask.arrTasks,
      activeCategory: (state) => state.arrTask.activeCategory,
    }),
    taskStatus: {
      get() {
        return this.arrTasks[this.activeCategory].arr[this.indexTask]
          .taskStatus;
      },
    },
  },
};
</script>

<style scoped>
.task_block {
  width: 100%;
  min-height: 50px;
  border: 1px solid #17252a;
  border-radius: 5px;
  background-color: #3aafa9;
  box-shadow: 1px 1px 2px #17252a;
  padding: 2px 5px;
  margin-top: 2px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.task_content {
  width: 100%;
  display: flex;
  align-items: center;
}

.text_content {
  font-family: opensans_regular;
  color: #feffff;
  font-size: 1.6rem;
  padding: 2px 10px 0 0;
  width: calc(100% - 33px);
  word-break: break-all;
}

.task_block_finished {
  background-color: #def2f1;
}

.task_finished {
  font-family: opensans_light;
  color: #17252a;
  font-size: 1.6rem;
}

.task_checkbox {
  -webkit-appearance: none;
  -moz-appearance: none;
  display: inline-block;
  width: 22px;
  height: 22px;
  margin-right: 10px;
  padding: 0;
  vertical-align: top;
  outline: none;
  transition: background 0.3s ease;
  background: url("https://img.icons8.com/ios-filled/22/FEFFFF/unchecked-checkbox.png")
    0 0 no-repeat;
  cursor: pointer;
}

.task_checkbox:checked {
  background-image: url("https://img.icons8.com/fluency/22/000000/checked-2.png");
  padding: 0;
}

.task_checkbox:hover {
  filter: brightness(110%);
}

.task_checkbox:active {
  filter: brightness(80%);
}

.task_checkbox:disabled {
  color: #666;
  cursor: default;
  filter: grayscale(100%);
  opacity: 0.6;
}

.delete_Task {
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