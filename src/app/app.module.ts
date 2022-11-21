import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {registerLocaleData} from '@angular/common'
import * as fr from '@angular/common/locales/fr'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NotesListComponent } from './pages/notes-list/notes-list.component';
import { MainLayoutComponent } from './pages/main-layout/main-layout.component';
import { NoteCardComponent } from './note-card/note-card.component';



@NgModule({
  declarations: [
    AppComponent,
    NotesListComponent,
    MainLayoutComponent,
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
