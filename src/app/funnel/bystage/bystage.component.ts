import { Component, OnInit } from "@angular/core";
import { data } from "./pipeline.constants";

@Component({
  selector: "app-bystage",
  templateUrl: "./bystage.component.html",
  styleUrls: ["./bystage.component.scss"]
})
export class BystageComponent implements OnInit {
  public pipelineData = [];
  constructor() {}

  ngOnInit() {
    let map: any = {};
    data.forEach((item: any) => {
      let name = item.stage.title;
      if (map[name]) {
        map[name].items.push(item);
      } else {
        map[name] = {};
        map[name].items = [item];
      }
    });
    this.pipelineData.push({
      name: "Closed Won",
      data: map["Closed Won"].items,
      value: "$934,038",
      trend: ""
    });
    this.pipelineData.push({
      name: "Legal",
      data: map["Legal"].items,
      trend: "+14 / -0",
      value: "$1,990,178"
    });
    this.pipelineData.push({
      name: "Proposal",
      data: map["Proposal"].items,
      trend: "+33 / -4",
      value: "$3,648,868"
    });
    this.pipelineData.push({
      name: "Decision Maker",
      data: map["Decision Maker"].items,
      trend: "+75 / -2",
      value: "$8,473,963"
    });
    this.pipelineData.push({
      name: "Proposal",
      data: map["Proposal"].items,
      trend: "+38 / -1",
      value: "$3,393,913"
    });
    this.pipelineData.push({
      name: "Value Proposition",
      data: map["Value Proposition"].items,
      trend: "+3 / -8",
      value: "$2,164,326"
    });
    this.pipelineData.push({
      name: "Qualification",
      data: map["Qualification"].items,
      trend: "+72 / -3",
      value: "$9,471,383"
    });
    this.pipelineData.push({
      name: "SAL",
      data: map["SAL"].items,
      trend: "+48 / -4",
      value: "$12,700,386"
    });
    this.pipelineData.push({
      name: "SQL",
      data: map["SQL"].items,
      trend: "+88 / -0",
      value: "$13,191,777"
    });
    console.info(this.pipelineData);
  }
}
