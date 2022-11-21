import { Component } from '@angular/core';
import { NotesService } from 'src/app/services/note.service';
import { Note } from 'src/app/models/note.model';

@Component({
  selector: 'app-note-list',
  templateUrl: './note-list.component.html',
  styleUrls: ['./note-list.component.scss']
})


export class NoteListComponent {

  constructor(private notesService: NotesService){}

  noteList:Note[] = this.notesService.getAllNotes()

  diplayedNotes:Note[] = this.noteList.filter(note => note.tag[0] === 'prog')

}
