import { HttpClient} from "@angular/common/http";
import { Injectable } from "@angular/core";
import {
  Observable,
  of,
  tap,
  catchError,
} from "rxjs";

import { Tag } from "../models/Tag.model";

import { Note } from "../models/Note.model";

@Injectable({
  providedIn: "root",
})
export class NotesService {
  constructor(private http: HttpClient) {}

  /**
   * affiche en console les données retourné apres une requete
   * @param response
   */
  private log(response: Note[] | Tag[] | any) {
    console.table(response);
  }

  private handleErr(error: Error, errorValue: any) {
    console.error(error);

    /**of() permet de transformer le parametre en un flux(observable)*/
    return of(errorValue);
  }

  /**
   *
   * @returns le tableau de toute les notes
   */
  GetAllNotes(): Observable<Note[]> {
    /* requete get avec .http => on recoit un observable qui contient une liste de note, en param c'est l'url a qui on fait la demande
     * tap : equivalent de console.log pour observable, il interragit pas avec le flux de donné
     * catchError pour capturer l'erreur et qui retourne un tableau vide pour ne pas crasher l'app
     */

    return this.http
      .get<Note[]>("https://db-app-notes.000webhostapp.com/notes")
      .pipe(
        tap(noteList => this.log(noteList)),
        catchError((error) => this.handleErr(error, []))
      );
  }

  GetNoteById(id: number): Observable<Note> {
    return this.http
      .get<Note[]>(`https://db-app-notes.000webhostapp.com/notes/${id}`)
      .pipe(
        tap(note => this.log(note)),
        catchError((error) => this.handleErr(error, []))
      );
  }

  /**
   *
   * @param tag
   * @returns un objet {nom du tag, array des notes ayant ce tag}
   */
  GetByTag(tag: string): Observable<Tag[]> {
    return this.http
      .get<Tag[]>(`https://db-app-notes.000webhostapp.com/notes/bytags/${tag}`)
      .pipe(
        tap(tag => this.log(tag)),
        catchError((error) => this.handleErr(error, []))
      );
  }

  GetAllByTag(): Observable<Tag[]> {
    return this.http
      .get<Tag[]>(`https://db-app-notes.000webhostapp.com/notes/bytags`)
      .pipe(
        tap(tags => this.log(tags)),
        catchError((error) => this.handleErr(error, []))
      );
  }

  updateNote(note: any): Observable<any> {
    
    return this.http
      .post(`https://db-app-notes.000webhostapp.com/notes/update` , note)
      .pipe(
        tap(res => this.log(res)),
        catchError((error) => this.handleErr(error, []))
      );
  }

  deleteNote(note: any): Observable<any> {
  
    return this.http
      .post(`https://db-app-notes.000webhostapp.com/notes/delete` , note)
      .pipe(
        tap(res => this.log(res)),
        catchError((error) => this.handleErr(error, []))
      );
  }

  createNote(note: any): Observable<any> {
  
    return this.http
      .post(`https://db-app-notes.000webhostapp.com/notes/add` , note)
      .pipe(
        tap(res => this.log(res)),
        catchError((error) => this.handleErr(error, []))
      );
  }

}