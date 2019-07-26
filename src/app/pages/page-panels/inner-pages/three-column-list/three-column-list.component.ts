import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-three-column-list',
  templateUrl: './three-column-list.component.html',
  styleUrls: ['./three-column-list.component.scss']
})
export class ThreeColumnListComponent implements OnInit {

  @Input() content: []
  constructor() { }

  ngOnInit() {
  }

}
