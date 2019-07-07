import { Component, OnInit, Input, Output } from "@angular/core";
import { EventEmitter } from "@angular/core";

@Component({
  selector: "app-navigation-tab",
  templateUrl: "./navigation-tab.component.html",
  styleUrls: ["./navigation-tab.component.scss"]
})
export class NavigationTabComponent implements OnInit {
  public chevronPosition = "78px";
  @Input()
  public tabItems;
  public selectedIndex = 0;

  @Output()
  public tabChange = new EventEmitter();
  constructor() {}

  ngOnInit() {}

  updateTab(tab, index: number) {
    this.selectedIndex = index;
    this.chevronPosition = 180 * index + 78 + "px";
    this.tabChange.emit(tab);
  }
}
