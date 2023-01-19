import { Component, EventEmitter, Input, Output } from "@angular/core";
import { NotesService } from "src/app/note/services/note.service";
import { Note } from "src/app/note/models/Note.model";

@Component({
  selector: "app-note-card",
  templateUrl: "./note-card.component.html",
  styleUrls: ["./note-card.component.scss"],
})
export class NoteCardComponent {
  constructor(
    private notesService: NotesService,
  ) {}

  /** recuperation de la note selectionné et la list par lql on a accedé a la note depuis
   * le composant note-list
   */
  @Input() note: Note;
  @Input() noteList?: Note[];
  noteIndex?: string;
 



  @Output() onDeleteNote: EventEmitter<Note> = new EventEmitter<Note>
  
  ngOnInit(){
    this.noteIndex = this.noteList?.indexOf(this.note).toString() 
  }

  /**
   * @method onClickDelete supprime la note selectionné, de la liste de toute les notes et de la noteList
   */

  onClickDelete() {
    let data = JSON.stringify(this.note);

    this.notesService.deleteNote(data).subscribe((note) => {
      console.log(note, "Note supprimée avec succés");
      this.onDeleteNote.emit(note)
    });
  }
}
