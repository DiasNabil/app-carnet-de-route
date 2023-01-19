import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Params, Router } from "@angular/router";
import { NotesService } from "src/app/note/services/note.service";
import { Exercise } from "../../models/Exercise.model";
import { Note } from "../../models/Note.model";

@Component({
  selector: "app-note-details",
  templateUrl: "./note-details.component.html",
  styleUrls: ["./note-details.component.scss"],
})
export class NoteDetailsComponent implements OnInit {
  date: Date = new Date();
  noteId: number;
  isNew: boolean;

  note: Note;
  tagString: string;
  exercises: Exercise[];
  exercise: Exercise;

  constructor(
    private notesService: NotesService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    /**
     * controle si on accede au composant note-details par un ajout ou une modification d'une note deja existante
     */

    this.route.params.subscribe((params: Params) => {
      if (params["id"]) {
        /** retourne les informations de la note selectionné
         * converti le tableau de tag en string et les affiche dans le input tag
         */
        this.isNew = false;
        if (params["tag"] === "all") {
          this.notesService.GetAllNotes().subscribe((noteList) => {
            this.notesService
              .GetNoteById(noteList[params["id"]]["id"])
              .subscribe((note) => {
                this.note = note;
                this.tagString = this.note.tag.join(" ");
                this.exercises = this.note.exercises;
              });
          });
        } else {
          this.notesService.GetByTag(params["tag"]).subscribe((noteList) => {
            this.notesService
              .GetNoteById(noteList[0].notes[params["id"]]["id"])
              .subscribe((note) => {
                this.note = note;
                this.tagString = this.note.tag.join(" ");
                this.exercises = this.note.exercises;
              });
          });
        }
      } else {
        this.isNew = true;
        this.note = new Note();
        this.exercises = [];
        this.exercise = new Exercise();
        this.exercises.push(this.exercise);
        this.note.exercises = this.exercises;
      }
    });
  }

  /**
   * @method onSubmit permet d'ajouter la note au tableau de toute les notes
   * @param form nouvelle note
   */

  onSubmit() {
    let data: any = this.note;

    if (this.isNew === true) {
      data.tag = this.tagString;
      data = JSON.stringify(data);

      this.notesService.createNote(data).subscribe((note) => {
        console.log(note, "note ajoutée avec succés");
      });

      this.router.navigateByUrl("/");
    } else {
      data.tag = data.tag.join(" ");
      data = JSON.stringify(data);
      this.notesService.updateNote(data).subscribe((note) => {
        console.log(note, "note modifiée avec succés");
      });

      this.router.navigateByUrl("/");
    }
  }

  trackByIndex(index: number, obj: any): any {
    return index;
  }

  addEx() {
    let ex = new Exercise();
    this.exercises.push(ex);
  }
}
