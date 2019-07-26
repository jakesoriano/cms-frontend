import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-two-columns-with-image-and-alternate-list',
  templateUrl: './two-columns-with-image-and-alternate-list.component.html',
  styleUrls: ['./two-columns-with-image-and-alternate-list.component.scss']
})
export class TwoColumnsWithImageAndAlternateListComponent implements OnInit {
  @Input() content: []

  constructor() { }

  ngOnInit() {
  }

}
