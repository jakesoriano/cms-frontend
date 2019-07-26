import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-three-column-icons',
  templateUrl: './three-column-icons.component.html',
  styleUrls: ['./three-column-icons.component.scss']
})
export class ThreeColumnIconsComponent implements OnInit {
  @Input() content: []

  constructor() { }

  ngOnInit() {
  }

}
