import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { MainTagListComponent } from "./note/pages/maintag-list/maintag-list.component";
import { AuthGuard } from "./auth.guard";
import { LoginComponent } from "./login/login.component";

const routes: Routes = [
  { path: "", redirectTo: 'login', pathMatch: 'full' },
  { path: "login", component: LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
