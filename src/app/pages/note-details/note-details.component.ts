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

  onSubmit(form: NgForm){
  
    let tag: Array<string> = this.arrTag(this.tagString)

    this.notesService.addNote(form.value, tag)
    
    if(this.isNew === true){
      this.router.navigateByUrl('/')
    }else{
      this.router.navigateByUrl('../')
    }
  }


  /**
   * 
   * @param tag chaine de caractere pris dans le input tag
   * @returns un tableau des caractere 
   * 
  */
  arrTag(tag: string){
    return tag.toLowerCase().split(' ').filter(e => e !== '')
  }

  updateTag(tagString :string){

    let convertTag = this.arrTag(tagString)
    this.notesService.update(this.noteId, convertTag, this.note.content)

  }
}
