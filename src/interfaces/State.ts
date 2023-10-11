import { ITask } from "@/interfaces/Task";
import { IUser } from "@/interfaces/User";

export type IState = {
  tasks: ITask[];
  user: IUser;
};
