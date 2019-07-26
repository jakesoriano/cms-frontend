import { Component, OnInit, Input } from '@angular/core';


@Component({
  selector: 'app-image-with-desciption',
  templateUrl: './image-with-description.component.html',
  styleUrls: ['./image-with-description.component.scss']
})
export class ImageWithDescriptionComponent implements OnInit {
  @Input() content: []

  constructor() { }

  ngOnInit() {
  }

}
