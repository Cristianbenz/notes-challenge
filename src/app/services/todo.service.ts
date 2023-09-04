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
        /* 
            Return the list of to dos that exist when is called.
        */
        return this._toDosSubject.value;
    }

    add(todo: ToDo) {
        /* 
            Receive a to do from params, insert it into the list of to dos
            and update the record of the user in localstorage.
        */
        const updatedToDos: Array<ToDo> = [todo, ...this.toDos]
        const user = this._authService.getUser;
        this.win.localStorage.setItem(String(user?.username), JSON.stringify({
            username: user?.username,
            toDos: updatedToDos
        }));
        this._toDosSubject.next(updatedToDos);
    }

    remove(id: string) {
        /* 
            Receive an to do id from params, create a new array with the existent to dos that
            don't have the received id and update the record of the user in localstorage with
            the new array of to dos.
        */
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