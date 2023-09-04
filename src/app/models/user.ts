import { ToDo } from "./todo";

export interface User {
    username: string;
    toDos: Array<ToDo>;
}