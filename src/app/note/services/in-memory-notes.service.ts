import { Injectable } from '@angular/core';
import { InMemoryDbService, RequestInfo } from 'angular-in-memory-web-api'
import { Observable } from 'rxjs';
import { NOTES } from '../mock-notes-list';

@Injectable({
  providedIn: 'root'
})

/**
 * @class simule une base de donnée avec tout ses features (CRUD)
 */
export class InMemoryNotesService implements InMemoryDbService{

  /**
   * @method createDb crée une base de donnée 
   * @return un object de toute les notes
   */
  createDb(){
    const notes = NOTES
    return { notes }
  }


}
