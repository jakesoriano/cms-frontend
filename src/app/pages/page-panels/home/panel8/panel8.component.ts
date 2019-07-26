import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-panel8',
  templateUrl: './panel8.component.html',
  styleUrls: ['./panel8.component.scss']
})
export class Panel8Component implements OnInit {
  @Input() content: []

  constructor() { }

  ngOnInit() {
  }

}
