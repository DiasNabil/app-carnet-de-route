import { Injectable } from '@angular/core';
import { Note } from 'src/app/models/note.model';

@Injectable({

    providedIn: 'root'
})

export class NotesService{

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
            tag: ['figure', 'l-sit'],
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
            tag: ['macro'],
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
            tag: ['macro'],
            content: "ce que j'ai mangé ce jour",
        },

        {
            id:12,
            title: new Date(),
            tag: ['macro'],
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

    getAllNotes(){
        return this.arrayNotes
    }


    getByTag(tag: string){
        
        let notesBytag: Note[] = this.arrayNotes.filter(note => note.tag.find(elem => elem === tag))
        
        notesBytag.forEach(note=>note.tag.sort((a,b)=>{
                            if(b===tag){return 1}else return -1
        }))
        
        return {tag: tag, array: notesBytag}
    }

    getByIndex(index :number){
        return this.arrayNotes[index]
    }

    getIndexOfNote(note: Note){
        return this.arrayNotes.indexOf(note)
    }

    addNote(note: Note, tag:Array<string>){
        /** ajouter une note dans le arrayNotes et retourner l'id de la note
         * en sachant que id = index
         * 
         * title et tag sont assignés dès l'ajout le reste se fera a l'update
         */
        note.title = new Date()
        note.tag = tag
        

        let newLength = this.arrayNotes.push(note)
        /** la fonction push return la longueur du tableau apres avoir ajouter note */

        /** -1 car l'index demarre de 0 et id = index */
        let id = newLength - 1

        note.id = id
        return id 
    }

    update(id:number, tag: Array<string>, content: string){
        let note = this.arrayNotes[id];

        note.content = content
        note.tag = tag
        
    }

    delete(id: number){
        this.arrayNotes.splice(id, 1)
    }
    
} 
