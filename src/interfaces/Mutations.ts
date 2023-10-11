import { IState } from "@/interfaces/State";
import { ITask } from "@/interfaces/Task";
import { IUser } from "@/interfaces/User";

export enum IMutationType {
  CreateItem = "CREATE_ITEM",
  SetItems = "SET_ITEMS",
  CompleteItem = "COMPLETE_ITEM",
  RemoveTask = "REMOVE_TASK",
  SetUser = "SET_USER",
}

export type Mutations = {
  [IMutationType.CreateItem](state: IState, item: ITask): void;
  [IMutationType.SetItems](state: IState, item: ITask[]): void;
  [IMutationType.CompleteItem](
    state: IState,
    item: Partial<ITask> & { id: string }
  ): void;
  [IMutationType.RemoveTask](
    state: IState,
    id: Partial<ITask> & { id: string }
  ): void;
  [IMutationType.SetUser](state: IState, user: IUser): void;
};
