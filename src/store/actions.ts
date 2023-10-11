import { ActionTree } from "vuex";
import { IState } from "@/interfaces/State";
import { IMutationType } from "@/interfaces/Mutations";
import { IActionTypes, Actions } from "@/interfaces/Actions";

export const actions: ActionTree<IState, IState> & Actions = {
  async [IActionTypes.SetTaskItems]({ commit }, payload) {
    if (payload.length) {
      commit(IMutationType.SetItems, payload);
    }
  },

  async [IActionTypes.SetUser]({ commit }, payload) {
    commit(IMutationType.SetUser, payload);
  },
};
