import { createStore } from "vuex";
import { ArrTaskModule } from "@/store/arrTaskModule";

export default createStore({
  state: {},
  modules: {
    arrTask: ArrTaskModule
  }
});
