/**
 * Creation d'un module de fonctionnalité pour la gestion des notes
 * permet d'organiser l'architecture de l'application plutot que tout mettre dans le module racine, chaque fonctionnalité de l'application 
 * possedera son module 
 */

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainTagListComponent } from './pages/maintag-list/maintag-list.component';
import { TagCardComponent } from './pages/maintag-list/tag-card/tag-card.component';
import { NoteDetailsComponent } from './pages/note-details/note-details.component';
import { NoteCardComponent } from './pages/note-list/note-card.component';
import { NoteListComponent } from './pages/note-list/note-card/note-list.component';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from '../app-routing.module';
import { RouterModule, Routes } from '@angular/router';

/**
 * importation des route specifique aux notes 
 */
const noteRoutes: Routes = [
  {path:'tag', component: MainTagListComponent},
  {path: 'new', component: NoteDetailsComponent},
  {path: ':tag/:id', component: NoteDetailsComponent},
  {path: ':tag', component: NoteListComponent},
];

/** decorateur pour les modules (commme le module racine)
 * declarations: les classes de vues (composant, directive et pipes) qui appartiennent a note module 
 * exports: sous ensemble de classes de vues a exporter pour des composant d'autre module
 * imports: classes exporter depusi d'autre module necessaire au fonctionnement de note module 
 * providers: fournis les services et injection de dependance
 * bootstrap: ne concerne que le module racine, c'est le composant racine qui sera lancer au lancement de l'app
 */

 
@NgModule({
  declarations: [
    MainTagListComponent,
    TagCardComponent,
    NoteListComponent,
    NoteCardComponent,
    NoteDetailsComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    /**ajout des route importer plus tot dans le router module */
    RouterModule.forChild(noteRoutes)
  ]
})
export class NoteModule { }
