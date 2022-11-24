import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { trigger, transition, style, animate, query, stagger } from '@angular/animations';

import { NotesService } from 'src/app/services/note.service';
import { Note } from 'src/app/models/note.model';

@Component({
  selector: 'app-note-list',
  templateUrl: './note-list.component.html',
  styleUrls: ['./note-list.component.scss'],
  animations: [
    trigger('itemAnim', [

      // animation d'apparition 
      transition('void=> *', [
        style({
          height: 0,
          opacity: 0,
          transform: 'scale(0.85)',
          'margin-bottom': 0,
          paddingTop: 0,
          paddingBottom: 0,
          paddingRight: 0,
          paddingLeft: 0,
        }),

        animate('50ms', style({
          height: '*',
          'margin-bottom': '*',
          paddingTop: '*',
          paddingBottom: '*',
          paddingRight: '*',
          paddingLeft: '*',
        })),
        animate(500)
      ]),

      //animation de suppression
      transition('*=>void', [
        animate(50, style({
          transform:'scale(1.05)'
        })),
        animate(50, style({
          transform: 'scale(1)',
          opacity: 0.75,
        })),
        animate('120ms ease-out', style({
          transform: 'scale(0.68)',
          opacity: 0,
        })),
        animate('150ms ease-out', style({
          height: 0,
          opacity: 0,
          'margin-bottom': 0,
          paddingTop: 0,
          paddingBottom: 0,
          paddingRight: 0,
          paddingLeft: 0,
        }))
      ])
    ]),

    trigger('listAnim',[
      transition('*=>*', [
        query(':enter', [
          style({
            opacity:0,
            height: 0
          }),
          stagger(150, [
            animate('0.3s ease-out')
          ])
        ], {
          optional: true
        })
      ])
    ])
  ]
})


export class NoteListComponent implements OnInit{

  noteList: Note[]

  constructor(private notesService: NotesService,  private route: ActivatedRoute, private router: Router){
    this.router.routeReuseStrategy.shouldReuseRoute = () => false;
  }

  ngOnInit(): void {

    const tag = this.route.snapshot.params['tag']
    if(tag === 'all'){
      this.noteList = this.notesService.getAllNotes()
    }else if (tag === 'notag'){
      this.noteList = this.notesService.getNoteWoTag()
      console.log(this.noteList)
    }else {
      this.noteList = this.notesService.getByTag(tag).array
      console.log(this.noteList)
    }

    
    
  }


}
