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


onClickDelete(){
/** faire attention a bien recuperer l'id de arrayNotes et pas array du maintag */
}


}
