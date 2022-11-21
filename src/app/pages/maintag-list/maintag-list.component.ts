import { Component, Input, OnInit } from '@angular/core';
import { NotesService } from 'src/app/services/note.service';
import { Note } from 'src/app/models/note.model';


@Component({
  selector: 'app-maintag-list',
  templateUrl: './maintag-list.component.html',
  styleUrls: ['./maintag-list.component.scss']
})


export class MainTagListComponent implements OnInit{

  mainTag: {tag: string, array: Note[]}[]


  constructor(private notesService: NotesService){}

  ngOnInit(): void {
 
    this.mainTag = this.notesService.arrayMainTag
  }

}
