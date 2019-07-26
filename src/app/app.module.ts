import { BrowserModule } from "@angular/platform-browser"
import { NgModule } from "@angular/core"

import { AppRoutingModule } from "./app-routing.module"
import { AppComponent } from "./app.component"

import { PageModule } from "./pages/page/page.module"
import { AgmCoreModule } from "@agm/core"
import { FormsModule, ReactiveFormsModule } from "@angular/forms"
import { MatButtonModule } from "@angular/material/button"
import { MatFormFieldModule } from "@angular/material/form-field"
import { MatInputModule } from "@angular/material/input"
import { MatStepperModule } from "@angular/material/stepper"
import { MatSelectModule } from "@angular/material/select"
import { HttpClientModule } from "@angular/common/http"
import { BrowserAnimationsModule } from "@angular/platform-browser/animations"
import { MatProgressSpinnerModule, MatProgressBarModule } from "@angular/material"
import { MatToolbarModule } from "@angular/material/toolbar"
import { MatSidenavModule } from "@angular/material/sidenav"
import { MatListModule } from "@angular/material/list"
import { MatTabsModule } from "@angular/material/tabs"
import { MatMenuModule } from "@angular/material/menu"

import { ScrollToModule } from "@nicky-lenaers/ngx-scroll-to"

import { NgxStripeModule } from "ngx-stripe"
import { environment } from "../environments/environment"
import { PreLoaderComponent } from "./_components/pre-loader/pre-loader.component"

@NgModule({
  declarations: [AppComponent, PreLoaderComponent],
  imports: [
    BrowserModule.withServerTransition({ appId: "noac-frontend" }),
    BrowserAnimationsModule, // required animations module
    ReactiveFormsModule,
    FormsModule,
    MatTabsModule,
    MatListModule,
    MatMenuModule,
    MatSidenavModule,
    MatToolbarModule,
    MatSelectModule,
    MatStepperModule,
    MatProgressSpinnerModule,
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule,
    MatProgressBarModule,
    AppRoutingModule,
    PageModule,
    HttpClientModule,
    AgmCoreModule.forRoot({
      apiKey: "AIzaSyA772B9MXSAPE6whMxGvE71W3bXqqxsUWY"
    }),
    ScrollToModule.forRoot(),
  ],
  providers: [
    //
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
