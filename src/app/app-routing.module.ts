import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainLayoutComponent } from './pages/main-layout/main-layout.component';
import { MainTagListComponent } from './pages/maintag-list/maintag-list.component';

const routes: Routes = [
  {path: '', component: MainLayoutComponent, children: [{path:'', component: MainTagListComponent}]},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
