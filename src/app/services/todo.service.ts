import { Injectable } from "@angular/core";
import { ToDo } from "../models/todo";

@Injectable({
    providedIn: "root"
})
export class ToDoService {
    private win = window;
    private storage = this.win.localStorage.getItem("todos") || "";

    addNote(todo: ToDo) {
        const todos: Array<ToDo> = this.storage? JSON.parse(this.storage) : [];
        const updatedToDos: Array<ToDo> = [todo, ...todos]
        this.win.localStorage.setItem("todos", JSON.stringify(updatedToDos));
    }

    getNotes() {
        const todos: Array<ToDo> = this.storage? JSON.parse(this.storage) : [];
        return todos
    }

    remove(id: string) {
        const todos: Array<ToDo> = this.storage? JSON.parse(this.storage) : [];
        const updatedToDos = todos.filter(t => t.id !== id);
        if(!updatedToDos.length) {
            this.win.localStorage.removeItem("todos")
        } else {
            this.win.localStorage.setItem("todos", JSON.stringify(updatedToDos));
        }
    }
}