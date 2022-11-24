import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {registerLocaleData} from '@angular/common'
import * as fr from '@angular/common/locales/fr'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


/** formulaire angular avec directive propre au fomulaire, permet de convertir les <form> en {formulaire} angular */
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainTagListComponent } from './pages/maintag-list/maintag-list.component';
import { TagCardComponent } from './pages/maintag-list/tag-card/tag-card.component';
import { NoteListComponent } from './pages/note-list/note-list.component';
import { NoteCardComponent } from './pages/note-list/note-card/note-card.component';
import { NoteDetailsComponent } from './pages/note-details/note-details.component';



@NgModule({
  declarations: [
    AppComponent,
    MainTagListComponent,
    TagCardComponent,
    NoteListComponent,
    NoteCardComponent,
    NoteDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
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
