import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-signup-panel',
  templateUrl: './signup-panel.component.html',
  styleUrls: ['./signup-panel.component.scss']
})
export class SignupPanelComponent implements OnInit {
  @Input() content: []

  constructor() { }

  ngOnInit() {
  }

}
