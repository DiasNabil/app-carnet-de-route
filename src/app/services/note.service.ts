import { Injectable } from '@angular/core';
import { Note } from 'src/app/models/note.model';

@Injectable({

    providedIn: 'root'
})

export class NotesService{

    /**
     * @prop arrayNotes tableau de toute les notes
     */
    arrayNotes: Note[] = [
        {
            id:0,
            title: new Date(),
            tag: ['prog', 'ring'],
            content: "ce que j'ai fait ce jour ",
        },
    
        {
            id:1,
            title: new Date(),
            tag: ['prog', 'ring'],
            content: "ce que j'ai fait ce jour",
        },
    
        {
            id:2,
            title: new Date(),
            tag: ['prog', 'legs'],
            content: "ce que j'ai fait ce jour",
        },
    
        {
            id:3,
            title: new Date(),
            tag: ['prog', 'ring'],
            content: "ce que j'ai fait ce jour",
        },
    
        {
            id:4,
            title: new Date(),
            tag: ['figure', 'plank'],
            content: "j'ai fait plank ce jour",
        },
    
        {
            id:5,
            title: new Date(),
            tag: ['figure', 'handstand'],
            content: "j'ai fait handstand ce jour",
        },
    
        {
            id:6,
            title: new Date(),
            tag: ['figure', 'handstand'],
            content: "j'ai fait handstand ce jour",
        },
    
        {
            id:7,
            title: new Date(),
            tag: [],
            content: "j'ai fait l-sit ce jour",
        },
    
        {
            id:8,
            title: new Date(),
            tag: ['macro'],
            content: "ce que j'ai mangé ce jour",
        },
    
        {
            id:9,
            title: new Date(),
            tag: [],
            content: "ce que j'ai mangé ce jour",
        },
    
        {
            id:10,
            title: new Date(),
            tag: ['macro'],
            content: "ce que j'ai mangé ce jour",
        },
    
        {
            id:11,
            title: new Date(),
            tag: [],
            content: "ce que j'ai mangé ce jour",
        },

        {
            id:12,
            title: new Date(),
            tag: [],
            content: "ce que j'ai mangé ce jour",
        },

        {
            id:13,
            title: new Date(),
            tag: ['macro'],
            content: "ce que j'ai mangé ce jour",
        },

        {
            id:14,
            title: new Date(),
            tag: ['macro'],
            content: "ce que j'ai mangé ce jour",
        },
    ]

    /**
     * 
     * @returns le tableau de toute les notes
     */
    getAllNotes(){
        return this.arrayNotes
    }

    /**
     * 
     * @returns un tableau de toute les notes qui n'ont pas de tag
     */
    getNoteWoTag(){
        return this.getAllNotes().filter(note => note.tag.length === 0)
    }

    /**
     * 
     * @param tag 
     * @returns un objet {nom du tag, array des notes ayant ce tag}
     */
    getByTag(tag: string){
        
        let notesBytag: Note[] = this.arrayNotes.filter(note => note.tag.find(elem => elem === tag))
        
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
        return this.arrayNotes[index]
    }
    
    /**
     * 
     * @param note 
     * @returns retourne l'index de la note passé en param
     */
    getIndexOfNote(note: Note){
        return this.arrayNotes.indexOf(note)
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
        let newLength = this.arrayNotes.push(note)

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
        let note = this.arrayNotes[id];

        note.content = content
        note.tag = tag
    }

    /**
     * 
     * @param id de la note a supprimer
     */
    delete(id: number){
        this.arrayNotes.splice(id, 1)
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

        this.arrayNotes.forEach(note=>allTag= allTag.concat(note.tag))
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


    

