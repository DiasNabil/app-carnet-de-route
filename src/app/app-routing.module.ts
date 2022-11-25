import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainTagListComponent } from './note/pages/maintag-list/maintag-list.component';

const routes: Routes = [
  {path:'', component: MainTagListComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
