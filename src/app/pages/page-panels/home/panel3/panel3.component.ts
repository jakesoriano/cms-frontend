import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-panel3',
  templateUrl: './panel3.component.html',
  styleUrls: ['./panel3.component.scss']
})
export class Panel3Component implements OnInit {
  @Input() content: []

  constructor() { }

  ngOnInit() {
  }

}
