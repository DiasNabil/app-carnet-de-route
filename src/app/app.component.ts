import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { debounceTime, distinctUntilChanged, Subject, switchMap } from "rxjs";
import { AuthService } from "./auth.service";

/**
 * @Component decorateur qui permet de construire un composent web
 * composer de deux option:
 * selector: correspond a la basise <app-root>
 * template: definis le code html associé au component (variente templateUrl)
 * style: definis le style associé au template du component (variente StyleUrls)
 */

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent implements OnInit {
  auth: AuthService

  constructor(
    private router: Router,
    private authService: AuthService
  ) {}

  ngOnInit() {
    this.auth = this.authService
  }

  search(string: String) {
    let word = string.toLowerCase().trim()
    if (word == '') {
      this.router.navigateByUrl('home')
    }else {
      this.router.navigateByUrl(word)
    }
  }

  redirect() {
    this.router.navigateByUrl("/home");
  }
}
