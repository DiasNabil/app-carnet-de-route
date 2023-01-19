import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import {
  trigger,
  transition,
  style,
  animate,
  query,
  stagger,
} from "@angular/animations";

import { NotesService } from "src/app/note/services/note.service";
import { Note } from "../../models/Note.model";

@Component({
  selector: "app-note-list",
  templateUrl: "./note-list.component.html",
  styleUrls: ["./note-list.component.scss"],
  animations: [
    // animation d'apparition
    trigger("itemAnim", [
      transition("void=> *", [
        style({
          height: 0,
          opacity: 0,
          transform: "scale(0.85)",
          "margin-bottom": 0,
          paddingTop: 0,
          paddingBottom: 0,
          paddingRight: 0,
          paddingLeft: 0,
        }),

        animate(
          "50ms",
          style({
            height: "*",
            "margin-bottom": "*",
            paddingTop: "*",
            paddingBottom: "*",
            paddingRight: "*",
            paddingLeft: "*",
          })
        ),
        animate(500),
      ]),

      //animation de suppression
      transition("*=>void", [
        animate(
          50,
          style({
            transform: "scale(1.05)",
          })
        ),
        animate(
          50,
          style({
            transform: "scale(1)",
            opacity: 0.75,
          })
        ),
        animate(
          "120ms ease-out",
          style({
            transform: "scale(0.68)",
            opacity: 0,
          })
        ),
        animate(
          "150ms ease-out",
          style({
            height: 0,
            opacity: 0,
            "margin-bottom": 0,
            paddingTop: 0,
            paddingBottom: 0,
            paddingRight: 0,
            paddingLeft: 0,
          })
        ),
      ]),
    ]),

    trigger("listAnim", [
      transition("*=>*", [
        query(
          ":enter",
          [
            style({
              opacity: 0,
              height: 0,
            }),
            stagger(150, [animate("0.3s ease-out")]),
          ],
          {
            optional: true,
          }
        ),
      ]),
    ]),
  ],
})
export class NoteListComponent implements OnInit {
  /**
   * @property noteList liste des notes à afficher selon le tag selectionné
   */
  noteList: Note[] | undefined;

  constructor(
    private notesService: NotesService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    /**fix bug search bar: permet d'enchainer les recherche sans actualiser la page
     * par contre pas compris comment fonctionne la fct shouldReuseRoute
     */
    this.router.routeReuseStrategy.shouldReuseRoute = () => false;
  }

  ngOnInit(): void {
    const tag = this.route.snapshot.params["tag"];

    if (tag === "all") {
      this.notesService.GetAllNotes().subscribe((noteList) => {
        this.noteList = noteList;
      });
    } else {
      this.notesService.GetAllByTag().subscribe((Tags) => {
        if (Tags.find((Tag) => Tag.name === tag)) {
          this.noteList = Tags.find((Tag) => Tag.name === tag)?.notes;
        } else {
          this.noteList = [];
          console.log("pas de tag");
        }
      });
    }
  }

  deletedNote(note: Note) {
    const tag = this.route.snapshot.params["tag"];

    if (tag === "all") {
      this.notesService.GetAllNotes().subscribe((noteList) => {
        this.noteList = noteList;
        console.log(this.noteList);
      });
    } else {
      this.notesService.GetAllByTag().subscribe((Tags) => {
        if (Tags.find((Tag) => Tag.name === tag)) {
          this.noteList = Tags.find((Tag) => Tag.name === tag)?.notes;
          console.log(this.noteList);
        } else {
          this.noteList = [];
          console.log("pas de tag");
        }
      });
    }
  }

  // faire des fonction pour factoriser ce composant
}
