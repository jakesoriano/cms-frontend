import { Component, OnInit, ViewChild, Input } from "@angular/core";
import { SnackBarService, ContactUsService } from "../../_services";
import { first } from "rxjs/operators";
import { NgForm } from '@angular/forms';

@Component({
  selector: "app-message-form",
  templateUrl: "./message-form.component.html",
  styleUrls: ["./message-form.component.scss"]
})
export class MessageFormComponent implements OnInit {

  contactForm = this.contactUsService.init();

  loading = false;
  submitted = false;

  @ViewChild("contactFormDirective") private contactFormDirective: NgForm
  @Input() layout: string;

  constructor(
    private contactUsService: ContactUsService,
    private snackBarService: SnackBarService,
  ) {}

  ngOnInit() {
    //
  }

  // convenience getter for easy access to form fields
  get f() {
    return this.contactForm.controls;
  }

  async onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.contactForm.invalid) {
      return;
    }

    this.loading = true;

    this.contactUsService
      .send(this.contactForm.value)
      .pipe(first())
      .subscribe(
        res => {
          this.snackBarService.openSnackBar(res.message, "", null, "", "top")
          this.loading = false
          this.contactFormDirective.resetForm()
        },
        error => {
          console.log("error ", error)
          this.loading = false
        }
      )
  }

}
