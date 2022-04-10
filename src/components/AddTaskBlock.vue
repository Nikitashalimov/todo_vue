<template>
  <div class="add_task_form">
    <select
      name="CategoryItems"
      v-model="select"
      class="select_Category"
      @change="changeCategory"
    >
      <option disabled selected value="" class="select_Option select_Unused">
        Выберите категорию...
      </option>
      <option
        v-for="arrCategoryItem in arrTasks"
        :key="arrCategoryItem"
        :value="arrCategoryItem.name"
        class="select_Option"
      >
        {{ arrCategoryItem.name }}
      </option>
    </select>
    <textarea
      name="newTask"
      id="newTask"
      placeholder="Введите новую задачу..."
      v-on:keyup.enter="addTask(this.form)"
      v-model="form.textarea"
      class="textarea"
    >
    </textarea>
    <button class="add_Task" @click="addTask(this.form)"></button>
  </div>
</template>

<script>
import { mapState, mapMutations } from "vuex";
export default {
  name: "AddTaskBlock",
  data() {
    return {
      select: "",
      form: {
        textarea: "",
        id: "",
      },
    };
  },
  methods: {
    ...mapMutations(["addTask"]),
    changeCategory(e) {
      const id = e.target.value;
      this.form.id = id;
    },
  },
  computed: {
    ...mapState({
      arrTasks: (state) => state.arrTask.arrTasks,
    }),
  },
};
</script>

<style scoped>
@media (max-width: 768px) {
  .add_task_form {
    width: 100%;
  }
}

@media (min-width: 769px) {
}

.add_task_form {
  padding: 15px;
  min-height: 100px;
  border: 5px solid #feffff;
  border-radius: 5px;
  background-color: #feffff;
  box-shadow: 2px 2px 5px gray;
  display: flex;
  flex-direction: column;
}

.select_Category {
  -webkit-appearance: none;
  -moz-appearance: none;
  -ms-appearance: none;
  appearance: none;
  position: relative;
  display: flex;
  height: 40px;
  background-color: #feffff;
  background-image: url("https://img.icons8.com/ios-glyphs/15/2B7A78/sort-down.png");
  background-repeat: no-repeat;
  background-position: right 10px center;
  padding: 2px 15px;
  border: 1px solid #17252a;
  color: #17252a;
  font-family: opensans_regular;
  color: #3aafa9;
  font-size: 1.4rem;
}

.select_Option {
  background-color: #def2f1;
  font-family: opensans_regular;
  color: #3aafa9;
  font-size: 1.6rem;
}

.textarea {
  height: 60px;
  border: 1px solid #17252a;
  padding: 10px 15px;
  background-color: #def2f1;
  resize: none;
}

.textarea::placeholder {
  background-color: #def2f1;
  font-family: opensans_regular;
  color: #3aafa9;
  font-size: 1.4rem;
}

.add_Task {
  height: 50px;
  background: url("https://img.icons8.com/ios-filled/100/ffffff/add-property.png");
  background-size: 30px 30px;
  background-repeat: no-repeat;
  background-position: center;
  background-color: #3aafa9;
  cursor: pointer;
  border: 0px;
  border: 1px solid #17252a;
}
</style>