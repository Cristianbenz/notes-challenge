import { Injectable } from "@angular/core";
import { ToDo } from "../models/todo";
import { BehaviorSubject, Observable } from "rxjs";

@Injectable({
    providedIn: "root"
})
export class ToDoService {
    private win = window;
    
    private toDosSubject : BehaviorSubject<Array<ToDo>>;
    public todos : Observable<Array<ToDo>>;

    public get toDos() {
        return this.toDosSubject.value;
    }

    constructor() {
        const storage = this.win.localStorage.getItem("todos") || "";
        const todos: Array<ToDo> = storage? JSON.parse(storage) : [];
        this.toDosSubject = new BehaviorSubject<Array<ToDo>>(todos);
        this.todos = this.toDosSubject.asObservable();
    }

    add(todo: ToDo) {
        const updatedToDos: Array<ToDo> = [todo, ...this.toDos]
        this.win.localStorage.setItem("todos", JSON.stringify(updatedToDos));
        this.toDosSubject.next(updatedToDos);
    }

    remove(id: string) {
        const updatedToDos = this.toDos.filter(t => t.id !== id);
        if(!updatedToDos.length) {
            this.win.localStorage.removeItem("todos")
        } else {
            this.win.localStorage.setItem("todos", JSON.stringify(updatedToDos));
        }
        this.toDosSubject.next(updatedToDos);
    }
}