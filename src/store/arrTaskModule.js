export const ArrTaskModule = {
  state: {
    // массив категорий, с задачами и статусом их выполнения
    arrTasks: [
      {
        name: "Срочные",
        arr: [
          { task: "Уборка", taskStatus: false },
          { task: "Стирка", taskStatus: false }
        ]
      },
      {
        name: "Обычные",
        arr: [
          { task: "Закупить продукты", taskStatus: false },
          { task: "Погулять", taskStatus: false }
        ]
      },
      {
        name: "Ежедневные",
        arr: [
          { task: "Сделать зарядку", taskStatus: false },
          { task: "Почитать книгу", taskStatus: false },
          { task: "Убраться", taskStatus: false }
        ]
      }
    ],
    // индекс активной категории
    activeCategory: 0
  },
  getters: {
    // количество задач всего
    sumAllTasks(state) {
      let count = 0;
      state.arrTasks.forEach((item) => {
        count += item.arr.length;
      });
      return count;
    },
    // количество выполненых задач
    sumFinishedTasks(state) {
      let taskStatusTrue = 0;
      state.arrTasks.forEach((item) => {
        item.arr.forEach((task) => {
          if (task.taskStatus === true) {
            taskStatusTrue++;
          }
        });
      });
      return taskStatusTrue;
    }
  },
  mutations: {
    // добавить новую категорию задач
    addCategory(state, newCategory) {
      if (newCategory) {
        state.arrTasks.push({ name: newCategory, arr: [] });
      }
    },
    // удаление категории задач
    categoryDelete(state, index) {
      state.arrTasks.splice(index, 1);
      if (state.arrTasks.length === state.activeCategory) {
        state.activeCategory = state.activeCategory - 1;
        return state.activeCategory;
      }
    },
    // добавление заданий в категорию
    addTask(state, form) {
      let objectItem = state.arrTasks.find(
        (arrCategoryItem) => arrCategoryItem.name === form.id
      ).arr;
      if (form.textarea) {
        objectItem.push({ task: form.textarea, taskStatus: false });
        form.textarea = "";
      }
    },
    // удаление задачи, в активной категории
    taskDelete(state, index) {
      state.arrTasks[state.activeCategory].arr.splice(index, 1);
    },
    // смена статуса задачи
    changeStatus(state, index) {
      let task = state.arrTasks[state.activeCategory].arr[index];
      if (task.taskStatus) {
        task.taskStatus = false;
      } else {
        task.taskStatus = true;
      }
    },
    // смена активной категории
    changeActiveCategory(state, index) {
      state.activeCategory = index;
    },
  },
  actions: {}
};
