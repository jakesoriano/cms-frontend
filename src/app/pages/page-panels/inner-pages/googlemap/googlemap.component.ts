import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-googlemap',
  templateUrl: './googlemap.component.html',
  styleUrls: ['./googlemap.component.scss']
  
})
export class GooglemapComponent implements OnInit {
  lat: number = 51.678418;
  lng: number = 7.809007;
  @Input() content: []
  constructor() { }

  ngOnInit() {
  }

}
