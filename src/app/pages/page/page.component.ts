import { Component, OnInit } from "@angular/core"
import { Location } from "@angular/common"
import { WebViewsService as HttpService } from "../../_api/service/"
import { StepsComponent } from "../page-panels/steps/steps.component"
import { Panel2Component } from "../page-panels/home/panel2/panel2.component"
import { Panel3Component } from "../page-panels/home/panel3/panel3.component"
import { Panel5Component } from "../page-panels/home/panel5/panel5.component"
import { Panel6Component } from "../page-panels/home/panel6/panel6.component"
import { Panel7Component } from "../page-panels/home/panel7/panel7.component"
import { Panel8Component } from "../page-panels/home/panel8/panel8.component"
import { BannerComponent as BannerInnerComponent } from "../page-panels/inner-pages/banner/banner.component"
import { BannerComponent } from "../page-panels/home/banner/banner.component"
import { ContactFormComponent } from "../page-panels/contact-form/contact-form.component"
import {
  ActivatedRoute,
  Router,
  Event,
  NavigationEnd,
  NavigationError,
  NavigationStart,
  NavigationCancel
} from "@angular/router"
import { SeoService } from "../../_services/pages/seo.service"
import { ThreeColumnIconsComponent } from "../page-panels/inner-pages/three-column-icons/three-column-icons.component"
import { ImageWithDescriptionComponent } from "../page-panels/home/image-with-description/image-with-description.component"
import { SignupPanelComponent } from "../page-panels/home/signup-panel/signup-panel.component"
import { ParagraphsComponent } from "../page-panels/inner-pages/paragraphs/paragraphs.component"
import { ThreeColumnListComponent } from "../page-panels/inner-pages/three-column-list/three-column-list.component"
import { TwoColumnsWithImageAndAlternateListComponent } from "../page-panels/inner-pages/two-columns-with-image-and-alternate-list/two-columns-with-image-and-alternate-list.component"
import { GooglemapComponent } from "../page-panels/inner-pages/googlemap/googlemap.component"
import { MessageformWithContactdetailsComponent } from "../page-panels/inner-pages/messageform-with-contactdetails/messageform-with-contactdetails.component"
import { BannerPopupSignupComponent } from "../page-panels/inner-pages/banner-popup-signup/banner-popup-signup.component"
import { PageUnknownComponent } from "../page-panels/page-unknown/page-unknown.component"

import * as AOS from "aos"
import { PreLoaderService } from "../../_services"
import { first } from "rxjs/operators"

@Component({
  templateUrl: "./page.component.html",
  styleUrls: ["./page.component.scss"]
})
export class PageComponent implements OnInit {
  location: Location
  navbarOpen = false

  toggleNavbar() {
    this.navbarOpen = !this.navbarOpen
  }

  components = {
    banner: BannerComponent,
    "banner-inner": BannerInnerComponent,
    steps: StepsComponent,
    "home-panel-2": Panel2Component,
    "home-panel-3": Panel3Component,
    "home-panel-5": Panel5Component,
    "home-panel-6": Panel6Component,
    "home-panel-7": Panel7Component,
    "home-panel-8": Panel8Component,
    "contact-form": ContactFormComponent,
    "three-column-icons": ThreeColumnIconsComponent,
    "image-with-description": ImageWithDescriptionComponent,
    "signup-panel": SignupPanelComponent,
    paragraphs: ParagraphsComponent,
    "3-column-list": ThreeColumnListComponent,
    "2column-image-and-alternatelist": TwoColumnsWithImageAndAlternateListComponent,
    map: GooglemapComponent,
    "messageform-with-details": MessageformWithContactdetailsComponent,
    "banner-popup": BannerPopupSignupComponent,
    "page-404": PageUnknownComponent
  }
  panels = []
  path: string
  url: string = ""

  constructor(
    private http_service: HttpService,
    private router: Router,
    location: Location,
    private seoService: SeoService,
    private preLoaderService: PreLoaderService
  ) {
    this.location = location
    this.router.events.subscribe(async (event: Event) => {
      if (event instanceof NavigationEnd) {
        this.preLoaderService.startLoading()
        // Hide loading indicator
        this.url = event.url
        if (event.url === null || event.url === "" || event.url === "/") {
          this.url = "/home"
        }
        if (this.panels !== null) {
          this.panels = []
        }
        await this.getWebViews(this.url)
      }

      if (event instanceof NavigationError) {
        this.preLoaderService.stopLoading()
        // Present error to user
        console.log("error ", event.error)
      }
    })
  }

  ngOnInit() {
    AOS.init()
  }
  getWebViews(slug) {
    this.http_service
      .getBySlug(slug)
      .pipe(first())
      .subscribe(res => {
        if (res["page"] !== null) {
          res["webview"].map(r => {
            for (let key in this.components) {
              if (key === r["key"]) {
                r["key"] = this.components[key]
                if (r["content"] !== null && r.hasOwnProperty("content")) {
                  r["content"]["content"] = JSON.parse(r["content"]["content"])
                  if (r["content"]["title"] !== null && r["content"]["sub_title"] !== null) {
                    r["content"]["title"] = JSON.parse(r["content"]["title"])
                    r["content"]["sub_title"] = JSON.parse(r["content"]["sub_title"])
                  }
                }
                this.panels.push(r)
              }
            }
          })
          this.setMetaTags(res["page"])
          this.preLoaderService.stopLoading()
        } else {
          let obj = {
            key: PageUnknownComponent,
            content: {}
          }
          this.panels.push(obj)
          this.preLoaderService.stopLoading()
        }
      })
  }
  setMetaTags(data) {
    let meta = {}
    meta["title"] = data["meta_title"]
    meta["description"] = data["meta_desc"]
    meta["keywords"] = data["meta_keyword"]
    meta["og:title"] = data["meta_title"]
    meta["og:description"] = data["meta_desc"]
    meta["og:image"] = data["meta_image"]
    this.seoService.setMetaTags(meta)
  }
}
