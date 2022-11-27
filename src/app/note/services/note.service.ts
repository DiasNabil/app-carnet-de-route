import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of, tap, catchError } from 'rxjs';
import { Note } from 'src/app/note/models/note.model';
import { NOTES } from '../mock-notes-list';


@Injectable({

    providedIn: 'root'
    
})

export class NotesService{

    constructor(private http: HttpClient){}

    /**
     * affiche en console les données retourné apres une requete 
     * @param response 
     */
    private log(response: Note[]|Note|undefined){
        console.table(response)
    }

    private handleErr(error: Error , errorValue: any){
        console.error(error)
        return of(errorValue)
    }

    /**
     * 
     * @returns le tableau de toute les notes
     */
    /** obsOnNoteList(): Observable<Note[]> {
        
         * requete get avec .http => on recoit un observable qui contient une liste de note, en param c'est l'url a qui on fait la demande
         * tap : equivalent de console.log pour observable, il interragit pas avec le flux de donné
         * catchError pour capturer l'erreur et qui retourne un tableau vide pour ne pas crasher l'app 
        

        return this.http.get<Note[]>('api/notes').pipe(
            tap(noteList => this.log(noteList)),
            catchError((error)=>this.handleErr(error, []))
        )

        ne retourne pas le tableau debut de solution : https://stackoverflow.com/questions/46769042/subscribe-to-observable-is-returning-undefined
    }*/

    getAllNotes():Note[]{
        let array: Note[]=[]
        //console.log(this.obsOnNoteList().subscribe(noteList => noteList = array))
        console.log(array)
        return NOTES
    }

    /**
     * 
     * @returns un tableau de toute les notes qui n'ont pas de tag
     */
    getNoteWoTag(){
        
       return  this.getAllNotes().filter(note => note.tag.length === 0)

    }

    /**
     * 
     * @param tag 
     * @returns un objet {nom du tag, array des notes ayant ce tag}
     */
    getByTag(tag: string){
        
        let notesBytag: Note[] = this.getAllNotes().filter(note => note.tag.find(elem => elem === tag))
        
        notesBytag.forEach(note=>note.tag.sort((a,b)=>{
                            if(b===tag){return 1}else return -1
        }))
        
        return {tag: tag, array: notesBytag}
    }

    /**
     * 
     * @param index de la note recherché
     * @returns la note correspondant a l'index
     */
    getByIndex(index :number){
        return this.getAllNotes()[index]
    }
    
    /**
     * 
     * @param note 
     * @returns retourne l'index de la note passé en param
     */
    getIndexOfNote(note: Note){
        return this.getAllNotes().indexOf(note)
    }


    /**
     * 
     * @param note qu'on souhaite ajouter a la liste de toute les notes
     * @param tag suite de caractere pris dans le input converti en tableau
     * @returns id de la note
     */
    addNote(note: Note, tag:Array<string>){

        /** 
         * title et tag sont assignés dès l'ajout le reste se fera a l'update
         */
        note.title = new Date()
        note.tag = tag
        
        /** la fonction push return la longueur du tableau apres avoir ajouter note */
        let newLength = this.getAllNotes().push(note)

        /** -1 car l'index demarre de 0 et id = index */
        let id = newLength - 1

        note.id = id
        return id 
    }

    /**
     * 
     * @param id de la note a maj
     * @param tag suite de caractere pris de le input tag converti en tableau
     * @param content suite de caractere pris dans le input content
     */
    update(id:number, tag: Array<string>, content: string){
        let note = this.getAllNotes()[id];

        note.content = content
        note.tag = tag
    }

    /**
     * 
     * @param id de la note a supprimer
     */
    delete(id: number){
        this.getAllNotes().splice(id, 1)
        this.getAllNotes().forEach(note => note.id = this.getIndexOfNote(note))
    }

    /**
   * 
   * @param tag chaine de caractere pris dans le input tag
   * @returns un tableau des caractere 
   * 
  */
    tagsToArray(tag: string){

        let arrTag: Set<string> = new Set()
        tag.toLowerCase().split(' ').filter(e => e !== '').forEach(tag=> arrTag.add(tag))

        return Array.from(arrTag)
    }

    /**
     * 
     * @returns un tableau de tout les tag existant
     */
    getArrOfAllTag(){
        let allTag:string[] = []

        this.getAllNotes().forEach(note=>allTag= allTag.concat(note.tag))
        allTag.sort((a,b)=>a.localeCompare(b,'fr'))

        

        let sansDouble:Set<string> = new Set()
        /**l'objet set stock des valeurs uniques
         * donc on sort un objet set avec tout les tag sans doublons
         * puis on le converti en tableau pour pouvoir le manipuler
          */
        allTag.forEach(tag => sansDouble.add(tag))


        return Array.from(sansDouble)
    }

    /**
     * 
     * @returns un tableau d'objet qui regroupe toute les notes par tag [...{tag, [notes avec ce tag]}]
     */
    getAllNotesByTag(){
        let allTag:{tag: string, array: Note[]}[]=[]

        let arrTag: string[] = this.getArrOfAllTag()
        arrTag.forEach(tag => allTag.push(this.getByTag(tag)))
        
        return allTag
    }
}


    

