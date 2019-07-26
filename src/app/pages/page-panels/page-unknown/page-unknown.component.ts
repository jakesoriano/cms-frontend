import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-page-unknown',
  templateUrl: './page-unknown.component.html',
  styleUrls: ['./page-unknown.component.scss']
})
export class PageUnknownComponent implements OnInit {
  
  @Input() content: []
  constructor() { }

  ngOnInit() {
  }

}
