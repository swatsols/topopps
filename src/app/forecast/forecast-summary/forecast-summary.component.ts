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
  constructor() {}

  ngOnInit() {}

  tabChanged(event) {
    this.selectedIndex = event.index;
  }

  ShowSalesRepView($event) {
    console.info($event);
    this.salesRepData = $event;
    this.showPopup = true;
    console.info(this.showPopup);
  }

  closePopup() {
    this.showPopup = false;
  }
}
