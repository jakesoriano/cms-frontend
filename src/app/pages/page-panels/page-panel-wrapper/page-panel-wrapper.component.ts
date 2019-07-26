import { NgModule, OnInit, Component, Compiler, ViewContainerRef, ViewChild, Input, ComponentRef, ComponentFactory, ComponentFactoryResolver, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-page-panel-wrapper',
  templateUrl: './page-panel-wrapper.component.html',
  styleUrls: ['./page-panel-wrapper.component.scss']
})
export class PagePanelWrapperComponent implements OnInit {
  @ViewChild('panelWrapper', { read: ViewContainerRef }) panelWrapper;
  @Input() panel;
  cmpRef: ComponentRef<any>;
  private isViewInitialized: boolean = false;

  constructor(
    private componentFactoryResolver: ComponentFactoryResolver,
    private compiler: Compiler,
    private cdRef: ChangeDetectorRef
    ) { }

  ngOnInit() {
  }
  
  updateComponent() {
    if (!this.isViewInitialized) {
      return;
    }
    if (this.cmpRef) {
      this.cmpRef.destroy();
    }

    let factory = this.componentFactoryResolver.resolveComponentFactory(this.panel['key']);
    this.cmpRef = this.panelWrapper.createComponent(factory)
    // to access the created instance use
    if(this.panel.hasOwnProperty('content')) {
      this.cmpRef.instance.content = this.panel['content']
    }
    this.cdRef.detectChanges();
  }

  ngOnChanges() {
    this.updateComponent();
  }

  ngAfterViewInit() {
    this.isViewInitialized = true;
    this.updateComponent();
  }

  ngOnDestroy() {
    if (this.cmpRef) {
      this.cmpRef.destroy();
    }
  }
}
