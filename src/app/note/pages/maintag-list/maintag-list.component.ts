import { Component, Input, OnInit } from '@angular/core';
import { NotesService } from 'src/app/note/services/note.service';
import { Note } from 'src/app/note/models/note.model';
import { ActivatedRoute, Router, RouterState } from '@angular/router'; 
import { trigger, transition, style, animate, query, stagger } from '@angular/animations'


@Component({
  selector: 'app-maintag-list',
  templateUrl: './maintag-list.component.html',
  styleUrls: ['./maintag-list.component.scss'],
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
    ]),
  ]
})


export class MainTagListComponent implements OnInit{

  mainTag: {tag: string, array: Note[]}[]

  path: any
  
  
  constructor(private notesService: NotesService, private router: Router, private route: ActivatedRoute){}


  ngOnInit(): void {
    this.mainTag = []  
    this.path = this.route.routeConfig?.path
      
      if(this.path === 'tag'){
        this.mainTag = this.notesService.getAllNotesByTag()
      }else{
        this.mainTag.push({tag:'to assign', array: this.notesService.getNoteWoTag()})
        this.getMainTag('prog')
        this.getMainTag('figure')
        this.getMainTag('macro')
        this.mainTag.push({tag:'all notes', array: this.notesService.getAllNotes()})
      }
  }

  getMainTag(tag: string){

    let arrayOfTag = this.notesService.getByTag(tag)
    this.mainTag.push(arrayOfTag)
  }

}
