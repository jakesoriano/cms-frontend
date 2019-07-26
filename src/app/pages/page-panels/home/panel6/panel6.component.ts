import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-panel6',
  templateUrl: './panel6.component.html',
  styleUrls: ['./panel6.component.scss']
})
export class Panel6Component implements OnInit {
  @Input() content: []

  constructor() { }

  ngOnInit() {
  }

}
