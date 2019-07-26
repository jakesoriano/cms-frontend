import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-panel5',
  templateUrl: './panel5.component.html',
  styleUrls: ['./panel5.component.scss']
})
export class Panel5Component implements OnInit {
  @Input() content: []

  constructor() { }

  ngOnInit() {
  }

}
