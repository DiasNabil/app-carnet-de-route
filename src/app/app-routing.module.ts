import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainTagListComponent } from './pages/maintag-list/maintag-list.component';
import { NoteDetailsComponent } from './pages/note-details/note-details.component';
import { NoteListComponent } from './pages/note-list/note-list.component';

const routes: Routes = [
  {path:'', component: MainTagListComponent},
  {path:'alltag', component: MainTagListComponent},
  {path: 'new', component: NoteDetailsComponent},
  {path: ':tag', component: NoteListComponent},
  {path: ':tag/:id', component: NoteDetailsComponent}

  
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
