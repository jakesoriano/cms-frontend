import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-paragraphs',
  templateUrl: './paragraphs.component.html',
  styleUrls: ['./paragraphs.component.scss']
})
export class ParagraphsComponent implements OnInit {
  @Input() content: []

  constructor() { }

  ngOnInit() {
  }

}
