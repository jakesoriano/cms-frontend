import { NgModule } from "@angular/core"
import { CommonModule, Location, LocationStrategy, PathLocationStrategy } from "@angular/common"
import { PageComponent } from "./page.component"
import { MessageFormComponent } from "../../_components/message-form/message-form.component"
import { PagePanelsComponent } from "../page-panels/page-panels.component"
import { PagePanelWrapperComponent } from "../page-panels/page-panel-wrapper/page-panel-wrapper.component"
import { AgmCoreModule } from "@agm/core"
import { FormsModule, ReactiveFormsModule } from "@angular/forms"
import { StepsComponent } from "../page-panels/steps/steps.component"
// Import pampaganda//
import { SharedModule } from "../../shared/shared/shared.module"
import { Panel2Component } from "../page-panels/home/panel2/panel2.component"
import { Panel3Component } from "../page-panels/home/panel3/panel3.component"
import { ScrollToModule } from "@nicky-lenaers/ngx-scroll-to"
// HTML COMPONENTS
import { BannerComponent as BannerInnerComponent } from "../page-panels/inner-pages/banner/banner.component"
import { BannerComponent } from "../page-panels/home/banner/banner.component"
import { Panel5Component } from "../page-panels/home/panel5/panel5.component"
import { Panel6Component } from "../page-panels/home/panel6/panel6.component"
import { Panel7Component } from "../page-panels/home/panel7/panel7.component"
import { Panel8Component } from "../page-panels/home/panel8/panel8.component"
import { ContactFormComponent } from "../page-panels/contact-form/contact-form.component"
import { ThreeColumnIconsComponent } from "../page-panels/inner-pages/three-column-icons/three-column-icons.component"
import { ImageWithDescriptionComponent } from "../page-panels/home/image-with-description/image-with-description.component"
import { SignupPanelComponent } from "../page-panels/home/signup-panel/signup-panel.component"
import { ParagraphsComponent } from "../page-panels/inner-pages/paragraphs/paragraphs.component"
import { ThreeColumnListComponent } from "../page-panels/inner-pages/three-column-list/three-column-list.component"
import { TwoColumnsWithImageAndAlternateListComponent } from "../page-panels/inner-pages/two-columns-with-image-and-alternate-list/two-columns-with-image-and-alternate-list.component"
import { GooglemapComponent } from "../page-panels/inner-pages/googlemap/googlemap.component"
import { MessageformWithContactdetailsComponent } from "../page-panels/inner-pages/messageform-with-contactdetails/messageform-with-contactdetails.component"
import { BannerPopupSignupComponent } from "../page-panels/inner-pages/banner-popup-signup/banner-popup-signup.component"
import { TwoColumnsComponent } from "../page-panels/accounting/two-columns/two-columns.component";
import { PageUnknownComponent } from '../page-panels/page-unknown/page-unknown.component'

@NgModule({
  imports: [
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    SharedModule,
    ScrollToModule,
    AgmCoreModule.forRoot({
      apiKey: "AIzaSyA772B9MXSAPE6whMxGvE71W3bXqqxsUWY"
    })
  ],
  declarations: [
    PageComponent,
    PagePanelsComponent,
    PagePanelWrapperComponent,
    BannerInnerComponent,
    StepsComponent,
    Panel2Component,
    Panel3Component,
    BannerComponent,
    Panel5Component,
    Panel6Component,
    Panel7Component,
    Panel8Component,
    ContactFormComponent,
    ThreeColumnIconsComponent,
    ImageWithDescriptionComponent,
    SignupPanelComponent,
    ParagraphsComponent,
    ThreeColumnListComponent,
    TwoColumnsWithImageAndAlternateListComponent,
    GooglemapComponent,
    MessageFormComponent,
    MessageformWithContactdetailsComponent,
    BannerPopupSignupComponent,
    TwoColumnsComponent,
    PageUnknownComponent
  ],
  providers: [Location, { provide: LocationStrategy, useClass: PathLocationStrategy }],
  entryComponents: [
    BannerComponent,
    BannerInnerComponent,
    StepsComponent,
    Panel2Component,
    Panel3Component,
    Panel5Component,
    Panel6Component,
    Panel7Component,
    Panel8Component,
    ContactFormComponent,
    ThreeColumnIconsComponent,
    ImageWithDescriptionComponent,
    SignupPanelComponent,
    ParagraphsComponent,
    ThreeColumnListComponent,
    TwoColumnsWithImageAndAlternateListComponent,
    GooglemapComponent,
    MessageformWithContactdetailsComponent,
    MessageformWithContactdetailsComponent,
    BannerPopupSignupComponent,
    TwoColumnsComponent,
    PageUnknownComponent
  ]
})
export class PageModule {}
