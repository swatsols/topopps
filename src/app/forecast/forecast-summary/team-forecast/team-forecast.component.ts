import { Component, OnInit } from "@angular/core";

const ELEMENT_DATA = [
  {
    index: 0,
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
    percent: 50,
    personImg: "person1"
  },
  {
    index: 1,
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
    percent: 30,
    personImg: "person2"
  },
  {
    index: 2,
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
    percent: 10,
    personImg: "person3"
  },
  {
    index: 3,
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
    percent: 50,
    personImg: "person1"
  },
  {
    index: 4,
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
    percent: 30,
    personImg: "person3"
  },
  {
    index: 5,
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
    percent: 20,
    personImg: "person2"
  },
  {
    index: 6,
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
    percent: 50,
    personImg: "person1"
  },
  {
    index: 7,
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
    percent: 10,
    personImg: "person3"
  }
];

@Component({
  selector: "app-team-forecast",
  templateUrl: "./team-forecast.component.html",
  styleUrls: ["./team-forecast.component.scss"]
})
export class TeamForecastComponent implements OnInit {
  public selectedTimePeriod = "Q1-2019";
  public selectedRowIndex = -1;
  public showPopup = false;
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
    { key: "forecast", label: "Forecast" },
    { key: "selfReporting", label: "Self Reporting" },
    { key: "mngrReporting", label: "Mngr Reporting" },
    { key: "won", label: "Won" },
    { key: "stagePipeline", label: "Stage Pipeline" },
    { key: "categoryPipeline", label: "Category Pipeline" },
    { key: "commit", label: "Commit" },
    { key: "bestCase", label: "Best Case" },
    { key: "mostLikely", label: "Most Likely" }
  ];
  dataSource = ELEMENT_DATA;
  constructor() {}

  ngOnInit() {}

  onEdit(data) {
    this.selectedRowIndex = data.index;
    this.showPopup = true;
  }

  closePopup() {
    this.showPopup = false;
    this.selectedRowIndex = -1;
  }
}
