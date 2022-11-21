import { Component, Input, OnInit } from '@angular/core';

import { NOTES } from '../note-list';
import { Note } from '../note';


@Component({
  selector: 'app-tag-card',
  templateUrl: './tag-card.component.html',
  styleUrls: ['./tag-card.component.scss']
})
export class TagCardComponent implements OnInit{

  @Input() note: Note 
  @Input() mainTag: Note[]

  tagName: string 

  ngOnInit(): void {

    this.tagName = this.mainTag[0].tag[0]
  }



  
}
