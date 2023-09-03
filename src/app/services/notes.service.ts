import { Injectable, inject } from "@angular/core";
import { Note } from "../models/note";

@Injectable({
    providedIn: "root"
})
export class NotesService {
    private win = window;

    addNote(note: Note) {
        const storage = this.win.localStorage.getItem("notes") || "";
        const notes: Array<Note> = storage? JSON.parse(storage) : [];
        const updatedNotes: Array<Note> = [note, ...notes]
        this.win.localStorage.setItem("notes", JSON.stringify(updatedNotes));
    }
}