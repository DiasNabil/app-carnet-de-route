import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { NotesService } from 'src/app/services/note.service';
import { Note } from 'src/app/models/note.model';

@Component({
  selector: 'app-note-list',
  templateUrl: './note-list.component.html',
  styleUrls: ['./note-list.component.scss']
})


export class NoteListComponent implements OnInit{

  noteList: Note[]

  constructor(private notesService: NotesService,  private route: ActivatedRoute){}

  ngOnInit(): void {

    const tag = this.route.snapshot.params['tag']
    if(tag === 'all'){
      this.noteList = this.notesService.getAllNotes()
    }else if (tag === 'notag'){
      this.noteList = this.notesService.getNoteWoTag()
      console.log(this.noteList)
    }else {
      this.noteList = this.notesService.getByTag(tag).array
    }
    
  }


}
