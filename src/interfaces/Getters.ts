import { IState } from "@/interfaces/State";

export type IGetters = {
  completedCount(state: IState): number;
  totalCount(state: IState): number;
};
