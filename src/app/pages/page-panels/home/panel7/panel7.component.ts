import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-panel7',
  templateUrl: './panel7.component.html',
  styleUrls: ['./panel7.component.scss']
})
export class Panel7Component implements OnInit {
  @Input() content: []

  constructor() { }

  ngOnInit() {
  }

}
