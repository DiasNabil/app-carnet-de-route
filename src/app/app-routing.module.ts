import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainTagListComponent } from './pages/maintag-list/maintag-list.component';
import { NoteListComponent } from './pages/note-list/note-list.component';

const routes: Routes = [
  {path:'', component: MainTagListComponent},
  {path: ':tag', component: NoteListComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
