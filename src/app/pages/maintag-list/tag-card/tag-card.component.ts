import { Component, Input, OnInit, Output } from '@angular/core';
import {Router} from '@angular/router'

import { NotesService } from '../../../services/note.service';
import { Note } from 'src/app/models/note.model';



@Component({
  selector: 'app-tag-card',
  templateUrl: './tag-card.component.html',
  styleUrls: ['./tag-card.component.scss']
})
export class TagCardComponent implements OnInit{

  @Input() byTag: {tag: string, array: Note[]}

  tagName: string 
  nbNote: number

  constructor(private notesService: NotesService, private router: Router){}
  
  ngOnInit(): void {

   this.tagName = this.byTag.tag
   this.nbNote = this.byTag.array.length
   
  }

  onClickTagCard(){

    if(this.tagName === 'to assign'){
      this.router.navigateByUrl(`notag`)
    }
    else{
      this.router.navigateByUrl(`${this.tagName}`)
    }
    

  }

  
}
