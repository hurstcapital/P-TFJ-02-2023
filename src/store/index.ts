import {
  createStore,
  createLogger,
  Store as VuexStore,
  CommitOptions,
  DispatchOptions,
} from "vuex";

import { IGetters } from "@/interfaces/Getters";
import { IState } from "@/interfaces/State";
import { Mutations } from "@/interfaces/Mutations";
import { Actions } from "@/interfaces/Actions";

import { state } from "./state";
import { actions } from "./actions";
import { mutations } from "./mutations";
import { getters } from "./getters";

export const store = createStore<IState>({
  state: state,
  actions: actions,
  mutations: mutations,
  getters: getters,
  plugins: process.env.NODE_ENV === "development" ? [createLogger()] : [],
});

export function useStore() {
  return store as Store;
}
export type Store = Omit<
  VuexStore<IState>,
  "getters" | "commit" | "dispath"
> & {
  commit<K extends keyof Mutations, P extends Parameters<Mutations[K]>[1]>(
    key: K,
    payload: P,
    option?: CommitOptions
  ): ReturnType<Mutations[K]>;
} & {
  dispatch<K extends keyof Actions>(
    key: K,
    payload: Parameters<Actions[K]>[1],
    options?: DispatchOptions
  ): ReturnType<Actions[K]>;
} & {
  getters: {
    [K in keyof IGetters]: ReturnType<IGetters[K]>;
  };
};
