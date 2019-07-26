import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-messageform-with-contactdetails',
  templateUrl: './messageform-with-contactdetails.component.html',
  styleUrls: ['./messageform-with-contactdetails.component.scss']
})
export class MessageformWithContactdetailsComponent implements OnInit {
  @Input() content: []

  constructor() { }

  ngOnInit() {
  }

}
