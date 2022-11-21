import { Injectable } from '@angular/core';
import { Note } from 'src/app/models/note.model';

@Injectable({

    providedIn: 'root'
})

export class NotesService{

    arrayNotes: Note[] = [
        {
            id:1,
            title: new Date(),
            tag: ['prog', 'ring'],
            content: "ce que j'ai fait ce jour ",
        },
    
        {
            id:2,
            title: new Date(),
            tag: ['prog', 'ring'],
            content: "ce que j'ai fait ce jour",
        },
    
        {
            id:3,
            title: new Date(),
            tag: ['prog', 'legs'],
            content: "ce que j'ai fait ce jour",
        },
    
        {
            id:4,
            title: new Date(),
            tag: ['prog', 'ring'],
            content: "ce que j'ai fait ce jour",
        },
    
        {
            id:5,
            title: new Date(),
            tag: ['figure', 'plank'],
            content: "j'ai fait plank ce jour",
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
            tag: ['figure', 'handstand'],
            content: "j'ai fait handstand ce jour",
        },
    
        {
            id:8,
            title: new Date(),
            tag: ['figure', 'l-sit'],
            content: "j'ai fait l-sit ce jour",
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
    ]

    arrayMainTag:{tag: string, array: Note[]}[]= [
        {
            tag: 'prog',
            array: this.getByTag('prog')
        },
        {
            tag:'figure',
            array: this.getByTag('figure')
        },
        {
            tag:'macro',
            array: this.getByTag('macro')
        },
    ]

    getAllNotes(){
        return this.arrayNotes
    }



    getByTag(tag: string){
        
        const notesBytag = this.arrayNotes.filter(note => note.tag.find(elem => elem === tag))


        return notesBytag
    }
    
} 
