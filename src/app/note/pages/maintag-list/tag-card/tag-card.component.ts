import { Component, Input, OnInit } from "@angular/core";
import { Router } from "@angular/router";

import { NotesService } from "../../../services/note.service";

@Component({
  selector: "app-tag-card",
  templateUrl: "./tag-card.component.html",
  styleUrls: ["./tag-card.component.scss"],
})
export class TagCardComponent implements OnInit {
  @Input() byTag: any;

  tagName: string;
  nbNote: number;

  constructor(private notesService: NotesService, private router: Router) {}

  ngOnInit(): void {
    this.tagName = this.byTag.name;
    this.nbNote = this.byTag.notes.length;
  }

  onClickTagCard() {
    if (this.tagName === "all notes") {
      this.router.navigateByUrl(`all`);
    } else {
      this.router.navigateByUrl(`${this.tagName}`);
    }
  }
}
