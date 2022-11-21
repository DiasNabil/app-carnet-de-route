import { Component, Input, OnInit } from '@angular/core';
import { NOTES } from 'src/app/note-list';
import { Note } from 'src/app/note';


@Component({
  selector: 'app-maintag-list',
  templateUrl: './maintag-list.component.html',
  styleUrls: ['./maintag-list.component.scss']
})


export class MainTagListComponent {

  noteList:Note[] = NOTES

  prog:Note[] = this.noteList.filter(note => note.tag[0] === 'prog')
  figure:Note[] = this.noteList.filter(note => note.tag[0] === 'figure')
  macro:Note[] = this.noteList.filter(note => note.tag[0] === 'macro')

  mainTag= [this.prog, this.figure, this.macro]

  

}
