import { MutationTree } from "vuex";
import { IState } from "@/interfaces/State";
import { IMutationType, Mutations } from "@/interfaces/Mutations";

export const mutations: MutationTree<IState> & Mutations = {
  [IMutationType.CreateItem](state, item) {
    state.tasks.push(item);
    localStorage.setItem("tasks", JSON.stringify(state.tasks));
  },
  [IMutationType.SetItems](state, items) {
    state.tasks = items;
  },
  [IMutationType.CompleteItem](state, newItem) {
    const item = state.tasks.findIndex((i) => i.id === newItem.id);
    if (item === -1) return;
    state.tasks[item] = { ...state.tasks[item], ...newItem };
    localStorage.setItem("tasks", JSON.stringify(state.tasks));
  },
  [IMutationType.RemoveTask](state, item) {
    const filtredTasks = state.tasks.filter((task) => task.id !== item.id);
    state.tasks = filtredTasks;
    localStorage.setItem("tasks", JSON.stringify(state.tasks));
  },
  [IMutationType.SetUser](state, user) {
    state.user = user;
    localStorage.setItem("user", JSON.stringify(state.user));
  },
};
