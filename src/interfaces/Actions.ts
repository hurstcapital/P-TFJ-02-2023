import { ActionContext } from "vuex";
import { IState } from "@/interfaces/State";
import { IUser } from "@/interfaces/User";
import { Mutations } from "@/interfaces/Mutations";

export enum IActionTypes {
  GetTodoItems = "GET_ITEMS",
  SetTaskItems = "SET_ITEMS",
  SetUser = "SET_USER",
}

type ActionAuguments = Omit<ActionContext<IState, IState>, "commit"> & {
  commit<K extends keyof Mutations>(
    key: K,
    payload: Parameters<Mutations[K]>[1]
  ): ReturnType<Mutations[K]>;
};

export type Actions = {
  [IActionTypes.SetTaskItems](context: ActionAuguments, payload: []): void;
  [IActionTypes.SetUser](context: ActionAuguments, payload: IUser): void;
};
