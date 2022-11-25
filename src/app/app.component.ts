import { Component, OnInit, Input, Output } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';

import { NotesService } from './services/note.service';

/**
 * @Component decorateur qui permet de construire un composent web 
 * composer de deux option: 
 * selector: correspond a la basise <app-root>
 * template: definis le code html associé au component (variente templateUrl)
 * style: definis le style associé au template du component (variente StyleUrls)
 */

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})


export class AppComponent implements OnInit {

  constructor(private notesService:NotesService, private router: Router, private route: ActivatedRoute){}


  ngOnInit(){
    
  }

  search(string: String){
  
    this.router.navigateByUrl(string.toLowerCase().trim())
    console.log(string)

  }

  redirect(){
    this.router.navigateByUrl('/')
  }
}
