import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Note } from 'src/app/models/note.model';
import { NotesService } from 'src/app/services/note.service';


@Component({
  selector: 'app-note-details',
  templateUrl: './note-details.component.html',
  styleUrls: ['./note-details.component.scss']
})


export class NoteDetailsComponent implements OnInit{

  date: Date = new Date()
  note: Note
  noteId : number
  isNew: boolean

  tagString: string

  constructor(private notesService:NotesService, private router: Router, private route: ActivatedRoute){}

  ngOnInit(): void {

    /**
     * controle si on accede au composant note-details par un ajout ou une modification d'une note deja existante
     */
    this.route.params.subscribe((params: Params)=> {
      this.note = new Note()

      if(params['id']){
        /** retourne les informations de la note selectionné 
         * converti le tableau de tag en string et les affiche dans le input tag
         */
        let getTag = this.notesService.getByIndex(params['id']).tag.join(' ')
        this.tagString = getTag
        this.note = this.notesService.getByIndex(params['id'])
        this.noteId = params['id']
        this.isNew = false

      } else {
        this.isNew = true

      }

    })

     
  }

  /**
   * @method onSubmit permet d'ajouter la note au tableau de toute les notes
   * @param form nouvelle note 
   */

  onSubmit(form: NgForm){
  /** convertis les caractere dans le input tag en tableau de caractere */
    let tag: Array<string> = this.notesService.tagsToArray(this.tagString)

    this.notesService.addNote(form.value, tag)
    
    if(this.isNew === true){
      this.router.navigateByUrl('/')
    }else{
      this.router.navigateByUrl('../')
    }
  }



  updateTag(tagString :string){

    let convertTag = this.notesService.tagsToArray(tagString)
    this.notesService.update(this.noteId, convertTag, this.note.content)

  }
}
