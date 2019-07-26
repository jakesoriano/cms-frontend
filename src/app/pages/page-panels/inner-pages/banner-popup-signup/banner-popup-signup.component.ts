import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-banner-popup-signup',
  templateUrl: './banner-popup-signup.component.html',
  styleUrls: ['./banner-popup-signup.component.scss']
})
export class BannerPopupSignupComponent implements OnInit {
  @Input() content: []

  constructor() { }

  ngOnInit() {
  }

}
