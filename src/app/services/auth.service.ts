import { Injectable } from '@angular/core';
import { User } from '../models/user';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
    providedIn: "root"
}) 
export class AuthService {
    private win = window;
    private userSubject : BehaviorSubject<User | null> = new BehaviorSubject<User | null>(null);
    public user : Observable<User | null>;

    constructor() {
        this.user = this.userSubject.asObservable();
    }

    public get getUser() {
        return this.userSubject.value
    }

    signIn(username: string) {
        const user = this.win.localStorage.getItem(username);
        if(user) {
            this.userSubject.next(JSON.parse(user));
            return true
        } else {
            return false;
        }
    }

    signUp(username: string) {
        const user = this.win.localStorage.getItem(username);
        if(user) {
            return false
        } else {
            const newUser = {
                username: username,
                toDos: []
            }
            this.win.localStorage.setItem(username, JSON.stringify(user));
            this.userSubject.next(newUser);
            return true;
        }
    }
}