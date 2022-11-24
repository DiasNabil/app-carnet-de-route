import { Component, Input } from '@angular/core';
import { Note } from '../../../models/note.model';
import { NotesService } from 'src/app/services/note.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-note-card',
  templateUrl: './note-card.component.html',
  styleUrls: ['./note-card.component.scss']
})
export class NoteCardComponent {

  constructor (private notesService : NotesService, private router : Router, private route : ActivatedRoute){}

@Input() note:Note
@Input() noteList:Note[]


onClickDelete(){
/** ca supprime par deux dans /all? */

if(this.route.snapshot.params['tag']==='all'){
  this.notesService.delete(this.noteList.indexOf(this.note))
}else{
  this.notesService.delete(this.notesService.arrayNotes.indexOf(this.note))
  this.noteList.splice(this.noteList.indexOf(this.note),1)

}
}


}
