import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {registerLocaleData} from '@angular/common'
import * as fr from '@angular/common/locales/fr'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainTagListComponent } from './pages/maintag-list/maintag-list.component';
import { TagCardComponent } from './tag-card/tag-card.component';
import { NoteListComponent } from './pages/note-list/note-list.component';
import { NoteCardComponent } from './note-card/note-card.component';



@NgModule({
  declarations: [
    AppComponent,
    MainTagListComponent,
    TagCardComponent,
    NoteListComponent,
    NoteCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    { provide: LOCALE_ID, useValue: 'fr-FR'}
  ],
  bootstrap: [AppComponent]
})

/**
 * @AppModule Module racine du projet, regroupe tout les composants du projet 
 * et tout les modules dont aura besoin le projet pour fonctionner 
 */

export class AppModule {

  constructor(){
    registerLocaleData(fr.default)
  }
 }
