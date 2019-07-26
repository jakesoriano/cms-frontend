import { Component, OnInit, OnDestroy } from "@angular/core"
import { Subscription } from "rxjs"
import { PreLoaderService } from '../../_services';

@Component({
  selector: "app-pre-loader",
  templateUrl: "./pre-loader.component.html",
  styleUrls: ["./pre-loader.component.scss"]
})
export class PreLoaderComponent implements OnInit, OnDestroy {
  loading: boolean = true
  loadingSubscription: Subscription

  constructor(private preLoaderService: PreLoaderService) {}

  ngOnInit() {
    this.loadingSubscription = this.preLoaderService.loadingStatus.subscribe(value => {
      this.loading = value
    })
  }

  ngOnDestroy() {
    this.loadingSubscription.unsubscribe()
  }
}
