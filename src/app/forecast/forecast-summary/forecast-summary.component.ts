import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-forecast-summary",
  templateUrl: "./forecast-summary.component.html",
  styleUrls: ["./forecast-summary.component.scss"]
})
export class ForecastSummaryComponent implements OnInit {
  public selectedIndex = 0;
  constructor() {}

  ngOnInit() {}

  tabChanged(event) {
    this.selectedIndex = event.index;
  }
}
