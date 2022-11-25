import { Component, Input } from '@angular/core';
import { Note } from '../../../note/models/note.model';
import { NotesService } from 'src/app/note/services/note.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-note-card',
  templateUrl: './note-card.component.html',
  styleUrls: ['./note-card.component.scss']
})
export class NoteCardComponent {

  constructor (private notesService : NotesService, private router : Router, private route : ActivatedRoute){}

/** recuperation de la note selectionné et la list par lql on a accedé a la note depuis 
 * le composant note-list
 */
@Input() note:Note
@Input() noteList:Note[]


/**
 * @method onClickDelete supprime la note selectionné, de la liste de toute les notes et de la noteList
 */

onClickDelete(){
if(this.route.snapshot.params['tag']==='all'){
  this.notesService.delete(this.noteList.indexOf(this.note))
  console.log(this.notesService.arrayNotes)

}else{
  this.notesService.delete(this.notesService.arrayNotes.indexOf(this.note))
  this.noteList.splice(this.noteList.indexOf(this.note),1)
  console.log(this.notesService.arrayNotes)

}
}


}
