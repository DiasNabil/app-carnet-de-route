import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { MainTagListComponent } from "./pages/maintag-list/maintag-list.component";
import { TagCardComponent } from "./pages/maintag-list/tag-card/tag-card.component";
import { NoteDetailsComponent } from "./pages/note-details/note-details.component";
import { NoteCardComponent } from "./pages/note-list/note-card/note-card.component";
import { NoteListComponent } from "./pages/note-list/note-list.component";
import { FormsModule } from "@angular/forms";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AppRoutingModule } from "../app-routing.module";
import { RouterModule, Routes } from "@angular/router";
import { AuthGuard } from "../auth.guard";

const noteRoutes: Routes = [
  { path: "home", component: MainTagListComponent, canActivate: [AuthGuard] },
  { path: "tags", component: MainTagListComponent,canActivate: [AuthGuard]},
  { path: "new", component: NoteDetailsComponent, canActivate: [AuthGuard]},
  { path: ":tag/:id", component: NoteDetailsComponent, canActivate: [AuthGuard]},
  { path: ":tag", component: NoteListComponent, canActivate: [AuthGuard]},
];

@NgModule({
  declarations: [
    MainTagListComponent,
    TagCardComponent,
    NoteListComponent,
    NoteCardComponent,
    NoteDetailsComponent,
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    RouterModule.forChild(noteRoutes),
  ],
})
export class NoteModule {}
