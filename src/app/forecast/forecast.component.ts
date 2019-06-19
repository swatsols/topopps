import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-forecast",
  templateUrl: "./forecast.component.html",
  styleUrls: ["./forecast.component.scss"]
})
export class ForecastComponent implements OnInit {
  public tabItems = [
    { name: "Forecast Summary" },
    { name: "Future Forecast" },
    { name: "Forecast Worksheet" }
  ];

  public selectedTab = "Forecast Summary";
  constructor() {}

  ngOnInit() {}

  onTabChange(tab) {
    this.selectedTab = tab.name;
  }
}
