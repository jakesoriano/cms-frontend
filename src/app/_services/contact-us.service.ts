import { Injectable } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { environment } from '../../environments/environment';

import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ContactUsService {

  private url = environment.APIEndpoint;

  constructor(private formBuilder: FormBuilder, private http: HttpClient) {}

  init() {
    return this.formBuilder.group(
      {
        name: ["", [Validators.required]],
        email: ["", [Validators.required, Validators.email]],
        phone_number: ["", [Validators.required, Validators.maxLength(12), Validators.pattern("^[0-9+]*$")]],
        message: ["", [Validators.required]],
      },
    );
  }

  send(data: object) {
    return this.http.post<any>(this.url + `/contact-us`, data);
  }

}
