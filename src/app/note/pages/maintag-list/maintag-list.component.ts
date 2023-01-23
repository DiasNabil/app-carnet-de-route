import { Component, OnInit } from "@angular/core";
import { NotesService } from "src/app/note/services/note.service";
import { ActivatedRoute } from "@angular/router";
import {
  trigger,
  transition,
  style,
  animate,
  query,
  stagger,
} from "@angular/animations";
import { Tag } from "../../models/Tag.model";
import { Note } from "../../models/Note.model";

@Component({
  selector: "app-maintag-list",
  templateUrl: "./maintag-list.component.html",
  styleUrls: ["./maintag-list.component.scss"],
  animations: [
    trigger("itemAnim", [
      // animation d'apparition
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
export class MainTagListComponent implements OnInit {
  path?: string;
  mainTag: Array<Tag>;
  allNotes: Array<Note>;
  main: Array<string>;

  constructor(
    private notesService: NotesService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.mainTag = [];
    this.path = this.route.routeConfig?.path;
    this.main = ["push", "pull", "legs", "figures"];

    if (this.path === "tags") {
      this.notesService.GetAllByTag().subscribe((tagList) => {
        this.mainTag = tagList;
      });
    } else {
      this.notesService.GetAllByTag().subscribe((tagList) => {
        tagList.forEach((Tag) => {
          if (this.main.includes(Tag.name)) {
            this.mainTag.push(Tag);
          }
        });
      });

      this.notesService.GetAllNotes().subscribe((noteList) => {
        if (Array.isArray(noteList)) {
          this.allNotes = noteList;
        } else {
          this.allNotes = [];
        }

        this.mainTag.push({ name: "all notes", notes: this.allNotes });
      });
    }
  }
}
