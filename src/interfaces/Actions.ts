import { ActionContext } from "vuex";
import { IState } from "@/interfaces/State";
import { Mutations } from "@/interfaces/Mutations";

export enum IActionTypes {
  GetTodoItems = "GET_ITEMS",
  SetTaskItems = "SET_ITEMS",
}

type ActionAuguments = Omit<ActionContext<IState, IState>, "commit"> & {
  commit<K extends keyof Mutations>(
    key: K,
    payload: Parameters<Mutations[K]>[1]
  ): ReturnType<Mutations[K]>;
};

export type Actions = {
  [IActionTypes.GetTodoItems](context: ActionAuguments): void;
  [IActionTypes.SetTaskItems](context: ActionAuguments, payload: []): void;
};
