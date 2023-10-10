import { ActionTree } from "vuex";
import { IState } from "@/interfaces/State";
import { IMutationType } from "@/interfaces/Mutations";
import { IActionTypes, Actions } from "@/interfaces/Actions";

import { v4 as uuidv4 } from "uuid";

export const actions: ActionTree<IState, IState> & Actions = {
  async [IActionTypes.GetTodoItems]({ commit }) {
    commit(IMutationType.SetItems, [
      {
        id: uuidv4(),
        description: "Create awesome Vue 3 with Vuex 4 video!",
        isComplete: false,
      },
    ]);
  },

  async [IActionTypes.SetTaskItems]({ commit }, payload) {
    if (payload.length) {
      commit(IMutationType.SetItems, payload);
    }
  },
};
