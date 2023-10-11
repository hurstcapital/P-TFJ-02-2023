import { GetterTree } from "vuex";
import { IState } from "@/interfaces/State";
import { IGetters } from "@/interfaces/Getters";

export const getters: GetterTree<IState, IState> & IGetters = {
  completedCount(state) {
    return state.tasks.filter((i) => i.isComplete).length;
  },
  totalCount(state) {
    return state.tasks.length;
  },
};
