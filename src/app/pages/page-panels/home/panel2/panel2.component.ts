import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-panel2',
  templateUrl: './panel2.component.html',
  styleUrls: ['./panel2.component.scss']
})
export class Panel2Component implements OnInit {
  @Input() content: []

  constructor() { }

  ngOnInit() {
  }

}
