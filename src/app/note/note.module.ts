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


const noteRoutes: Routes = [
  {path:'tag', component: MainTagListComponent},
  {path: 'new', component: NoteDetailsComponent},
  {path: ':tag/:id', component: NoteDetailsComponent},
  {path: ':tag', component: NoteListComponent},

  
];


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
    RouterModule.forChild(noteRoutes)
  ]
})
export class NoteModule { }
