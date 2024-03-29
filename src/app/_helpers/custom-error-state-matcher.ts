import { ErrorStateMatcher } from "@angular/material/core";
import { FormGroupDirective, NgForm, FormControl } from '@angular/forms';

export class CustomErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(
    control: FormControl | null,
    form: FormGroupDirective | NgForm | null
  ): boolean {
    const invalidCtrl = !!(control && control.invalid && control.parent.dirty);
    const invalidParent = !!(
      control &&
      control.parent &&
      control.parent.hasError("notSame") &&
      control.parent.dirty
    );

    return invalidCtrl || invalidParent;
  }
}
