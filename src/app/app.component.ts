import { Component, OnInit, Input } from '@angular/core';
import { NOTES } from './note-list';
import { Note } from './note';

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


  ngOnInit(){}
}
