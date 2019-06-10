import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-navigation-tab",
  templateUrl: "./navigation-tab.component.html",
  styleUrls: ["./navigation-tab.component.scss"]
})
export class NavigationTabComponent implements OnInit {
  public chevronPosition = "63px";
  public selectedIndex = 0;
  constructor() {}

  ngOnInit() {}

  updateTab($event, index: number) {
    this.selectedIndex = index;
    this.chevronPosition = 150 * index + 63 + "px";
  }
}
