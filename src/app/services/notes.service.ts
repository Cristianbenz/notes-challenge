import { Injectable, inject } from "@angular/core";
import { Note } from "../models/note";

@Injectable({
    providedIn: "root"
})
export class NotesService {
    private win = window;
    private storage = this.win.localStorage.getItem("notes") || "";
    addNote(note: Note) {
        const notes: Array<Note> = this.storage? JSON.parse(this.storage) : [];
        const updatedNotes: Array<Note> = [note, ...notes]
        this.win.localStorage.setItem("notes", JSON.stringify(updatedNotes));
    }

    getNotes() {
        const notes: Array<Note> = this.storage? JSON.parse(this.storage) : [];
        return notes
    }
}