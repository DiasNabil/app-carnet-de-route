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
  /**
   * 
   * @param tag chaine de caractere pris dans le input tag
   * @returns un tableau des caractere 
   * 
   */
   let arrTag = (tag: string)=>{
      return tag.toLowerCase().split(' ').filter(e => e !== '')
    }
  
    let tag: Array<string> = arrTag(this.tagString)

    if(this.isNew){

    this.notesService.addNote(form.value, tag)
    
  }else{
    this.notesService.update(this.noteId, tag, form.value.content)
    
  }

  this.router.navigateByUrl('/')
  console.log(this.notesService.arrayNotes)

  }
}
