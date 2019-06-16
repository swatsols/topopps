import { Component, OnInit } from "@angular/core";

const ELEMENT_DATA = [
  {
    name: "Ethan Clark",
    forecast: "$2.1 M",
    selfReporting: "$1.3 M",
    mngrReporting: "$2.4 M",
    won: "$529 K",
    stagePipeline: "$9.2 M",
    categoryPipeline: "$10.5 M",
    commit: "$2.5 M",
    bestCase: "$1.0 M",
    mostLikely: "$1.3 M",
    percent: 50
  },
  {
    name: "Jessy Rose",
    forecast: "$1.88 M",
    selfReporting: "$1.0 M",
    mngrReporting: "$3.2 M",
    won: "$413 K",
    stagePipeline: "$5.4 M",
    categoryPipeline: "$8.5 M",
    commit: "$1.8 M",
    bestCase: "$2.1 M",
    mostLikely: "$1.3 M",
    percent: 30
  },
  {
    name: "Willy James",
    forecast: "$2.3 M",
    selfReporting: "$2.1 M",
    mngrReporting: "$2.7 M",
    won: "$720 K",
    stagePipeline: "$7.0 M",
    categoryPipeline: "$9.5 M",
    commit: "$2.0 M",
    bestCase: "$1.9 M",
    mostLikely: "$1.3 M",
    percent: 10
  },
  {
    name: "Mc Grith",
    forecast: "$2.1 M",
    selfReporting: "$1.3 M",
    mngrReporting: "$2.4 M",
    won: "$529 K",
    stagePipeline: "$9.2 M",
    categoryPipeline: "$10.5 M",
    commit: "$2.5 M",
    bestCase: "$1.0 M",
    mostLikely: "$1.3 M",
    percent: 50
  },
  {
    name: "Ethan Clark",
    forecast: "$1.88 M",
    selfReporting: "$1.0 M",
    mngrReporting: "$3.2 M",
    won: "$413 K",
    stagePipeline: "$5.4 M",
    categoryPipeline: "$8.5 M",
    commit: "$1.8 M",
    bestCase: "$2.1 M",
    mostLikely: "$1.3 M",
    percent: 30
  },
  {
    name: "Jessy Rose",
    forecast: "$2.3 M",
    selfReporting: "$2.1 M",
    mngrReporting: "$2.7 M",
    won: "$720 K",
    stagePipeline: "$7.0 M",
    categoryPipeline: "$9.5 M",
    commit: "$2.0 M",
    bestCase: "$1.9 M",
    mostLikely: "$1.3 M",
    percent: 20
  },
  {
    name: "Willy James",
    forecast: "$2.3 M",
    selfReporting: "$2.1 M",
    mngrReporting: "$2.7 M",
    won: "$720 K",
    stagePipeline: "$7.0 M",
    categoryPipeline: "$9.5 M",
    commit: "$2.0 M",
    bestCase: "$1.9 M",
    mostLikely: "$1.3 M",
    percent: 50
  },
  {
    name: "Mc Grith",
    forecast: "$2.1 M",
    selfReporting: "$1.3 M",
    mngrReporting: "$2.4 M",
    won: "$529 K",
    stagePipeline: "$9.2 M",
    categoryPipeline: "$10.5 M",
    commit: "$2.5 M",
    bestCase: "$1.0 M",
    mostLikely: "$1.3 M",
    percent: 10
  }
];

@Component({
  selector: "app-team-forecast",
  templateUrl: "./team-forecast.component.html",
  styleUrls: ["./team-forecast.component.scss"]
})
export class TeamForecastComponent implements OnInit {
  public selectedTimePeriod = "Q1-2019";
  displayedColumns: string[] = [
    "name",
    "forecast",
    "selfReporting",
    "mngrReporting",
    "won",
    "stagePipeline",
    "categoryPipeline",
    "commit",
    "bestCase",
    "mostLikely"
  ];
  public columnInfo = [
    { key: "forecast", label: "FORECAST" },
    { key: "selfReporting", label: "SELF REPORTING" },
    { key: "mngrReporting", label: "MNGR REPORTING" },
    { key: "won", label: "WON" },
    { key: "stagePipeline", label: "STAGE PIPELINE" },
    { key: "categoryPipeline", label: "CATEGORY PIPELINE" },
    { key: "commit", label: "COMMMIT" },
    { key: "bestCase", label: "BEST CASE" },
    { key: "mostLikely", label: "MOST LIKELY" }
  ];
  dataSource = ELEMENT_DATA;
  constructor() {}

  ngOnInit() {}
}
