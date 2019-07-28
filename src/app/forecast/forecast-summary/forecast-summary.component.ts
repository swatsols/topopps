import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-forecast-summary",
  templateUrl: "./forecast-summary.component.html",
  styleUrls: ["./forecast-summary.component.scss"]
})
export class ForecastSummaryComponent implements OnInit {
  public selectedIndex = 0;
  public showPopup = false;
  public salesRepData;
  public rowIndex = -1;
  constructor() {}

  ngOnInit() {}

  tabChanged(event) {
    this.selectedIndex = event.index;
  }

  ShowSalesRepView($event) {
    this.salesRepData = $event;
    this.showPopup = true;
  }

  closePopup() {
    this.showPopup = false;
    this.rowIndex = -1;
  }
}
