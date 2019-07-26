import { Component, OnInit, Input } from '@angular/core'
import { PagePanelWrapperComponent } from './page-panel-wrapper/page-panel-wrapper.component';

@Component({
  selector: 'app-page-panels',
  templateUrl: './page-panels.component.html',
  styleUrls: ['./page-panels.component.scss']
})
export class PagePanelsComponent implements OnInit {
  @Input() panels;
  ngOnInit() {
    console.log('this.panels')
    console.log(this.panels)
  }
}
