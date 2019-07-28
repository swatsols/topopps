import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-funnel",
  templateUrl: "./funnel.component.html",
  styleUrls: ["./funnel.component.scss"]
})
export class FunnelComponent implements OnInit {
  public tabItems = [
    { name: "BY STAGE" },
    { name: "BY FORECAST" },
    { name: "BY CLOSE DATE" },
    { name: "BY SALES REP" }
  ];

  public selectedTab = "BY STAGE";
  constructor() {}

  ngOnInit() {}

  onTabChange(tab) {
    this.selectedTab = tab.name;
  }
}
