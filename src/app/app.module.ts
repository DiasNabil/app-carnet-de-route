import { LOCALE_ID, NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { registerLocaleData } from "@angular/common";
import * as fr from "@angular/common/locales/fr";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { HttpClientModule } from "@angular/common/http";

/** formulaire angular avec directive propre au fomulaire, permet de convertir les <form> en {formulaire} angular */
import { FormsModule } from "@angular/forms";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { NoteModule } from "./note/note.module";

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    /** module permettant de faire des requetes a des serveurs distant */
    HttpClientModule,
    BrowserAnimationsModule,
    NoteModule,
  ],
  providers: [{ provide: LOCALE_ID, useValue: "fr-FR" }],
  bootstrap: [AppComponent],
})

/**
 * @AppModule Module racine du projet, regroupe tout les composants du projet
 * et tout les modules dont aura besoin le projet pour fonctionner
 */
export class AppModule {
  constructor() {
    registerLocaleData(fr.default);
  }
}
