import { Component, OnInit } from "@angular/core"
import { environment } from "../environments/environment"
import * as AOS from "aos"
import { NavigationStart, NavigationEnd, NavigationCancel, NavigationError, Router, Event } from '@angular/router';
import { PreLoaderService } from './_services';

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent implements OnInit {

  constructor(private _router: Router, private preLoaderService: PreLoaderService) {}

  ngOnInit() {
    AOS.init({
      duration: 700
    })
  }

  navbarOpen = false
  onActivate(event) {
    window.scroll(0, 0)
  }
  toggleNavbar() {
    this.navbarOpen = !this.navbarOpen
  }
}
