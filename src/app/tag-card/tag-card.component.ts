import { Component, Input, OnInit } from '@angular/core';

import { NotesService } from '../services/note.service';
import { Note } from 'src/app/models/note.model';



@Component({
  selector: 'app-tag-card',
  templateUrl: './tag-card.component.html',
  styleUrls: ['./tag-card.component.scss']
})
export class TagCardComponent implements OnInit{

  @Input() note: Note 
  @Input() byTag: {tag: string, array: Note[]}

  tagName: string 
  nbNote: number

  constructor(private notesService: NotesService){}
  
  ngOnInit(): void {

   this.tagName = this.byTag.tag
   this.nbNote = this.notesService.getByTag(this.tagName).length
   
  }



  
}
