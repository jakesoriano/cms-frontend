import { Injectable } from "@angular/core";

import {
  MatSnackBar,
} from "@angular/material";

@Injectable({
  providedIn: "root"
})
export class SnackBarService {
  constructor(public snackBar: MatSnackBar) {}

  openSnackBar(
    message: string,
    action?: string,
    duration?: number,
    hposition?: any,
    vposition?: any
  ) {
    action = defaultFor(action, "");
    duration = defaultFor(duration, 5000);
    hposition = defaultFor(hposition, "center");
    vposition = defaultFor(vposition, "bottom");

    this.snackBar.open(message, action, {
      duration: duration,
      horizontalPosition: hposition,
      verticalPosition: vposition,
      panelClass: ['dark-snackbar']
    });
  }
}

function defaultFor(arg, val) {
  return (typeof arg !== "undefined" && arg !== '' && arg !== null) ? arg : val;
}
