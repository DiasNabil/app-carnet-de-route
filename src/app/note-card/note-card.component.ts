import { Component, Input, OnInit } from '@angular/core';

import { NOTES } from '../note-list';
import { Note } from '../note';


@Component({
  selector: 'app-note-card',
  templateUrl: './note-card.component.html',
  styleUrls: ['./note-card.component.scss']
})
export class NoteCardComponent implements OnInit{

  @Input() note: Note 
  @Input() mainTag: Note[]

  tagName: string 

  ngOnInit(): void {

    this.tagName = this.mainTag[0].tag[0]
  }



  
}
