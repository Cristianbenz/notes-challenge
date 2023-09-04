import { Injectable, inject } from "@angular/core";
import { ToDo } from "../models/todo";
import { BehaviorSubject, Observable } from "rxjs";
import { AuthService } from "./auth.service";

@Injectable({
    providedIn: "root"
})
export class ToDoService {
    private win = window;
    private _toDosSubject : BehaviorSubject<Array<ToDo>>;
    public todos : Observable<Array<ToDo>>;
    private _authService: AuthService = inject(AuthService);

    constructor() {
        this._toDosSubject = new BehaviorSubject<Array<ToDo>>([]);
        this.todos = this._toDosSubject.asObservable();
        this._authService.user.subscribe(user => {
            if(user) this._toDosSubject.next(user.toDos);
        });
    }
    
    

    public get toDos() {
        return this._toDosSubject.value;
    }

    add(todo: ToDo) {
        const updatedToDos: Array<ToDo> = [todo, ...this.toDos]
        const user = this._authService.getUser;
        this.win.localStorage.setItem(String(user?.username), JSON.stringify({
            username: user?.username,
            toDos: updatedToDos
        }));
        this._toDosSubject.next(updatedToDos);
    }

    remove(id: string) {
        const updatedToDos = this.toDos.filter(t => t.id !== id);
        const user = this._authService.getUser;
        if(!updatedToDos.length) {
            this.win.localStorage.setItem(String(user?.username), JSON.stringify({
                username: user?.username,
                toDos: []
            }))
        } else {
            this.win.localStorage.setItem(String(user?.username), JSON.stringify({
                username: user?.username,
                toDos: updatedToDos
            }));
        }
        this._toDosSubject.next(updatedToDos);
    }
}