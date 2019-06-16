import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-forecast",
  templateUrl: "./forecast.component.html",
  styleUrls: ["./forecast.component.scss"]
})
export class ForecastComponent implements OnInit {
  public tabItems = [
    { name: "FORECAST SUMMARY" },
    { name: "FUTURE FORECAST" },
    { name: "FORECAST WORKSHEET" }
  ];

  public selectedTab = "FORECAST SUMMARY";
  constructor() {}

  ngOnInit() {}

  onTabChange(tab) {
    this.selectedTab = tab.name;
  }
}
