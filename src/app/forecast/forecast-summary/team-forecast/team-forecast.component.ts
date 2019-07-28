import { Component, OnInit, Output, EventEmitter, Input } from "@angular/core";

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
    personImg: "person1",
    role: "Sales Lead, Vancouver, CA",
    email: "ethan.clark@topopps.com",
    curriculumCompleted: 2,
    curriculumTotal: 5,
    coursesCompleted: 3,
    coursesTotal: 10,
    coachingCompleted: 5,
    coachingTotal: 10
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
    personImg: "person2",
    role: "Sales Lead, Vancouver, CA",
    email: "jessy.r@topopps.com",
    curriculumCompleted: 4,
    curriculumTotal: 5,
    coursesCompleted: 8,
    coursesTotal: 10,
    coachingCompleted: 9,
    coachingTotal: 10
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
    personImg: "person3",
    role: "Sales Lead, Vancouver, CA",
    email: "willy.j@topopps.com",
    curriculumCompleted: 1,
    curriculumTotal: 5,
    coursesCompleted: 8,
    coursesTotal: 10,
    coachingCompleted: 2,
    coachingTotal: 10
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
    personImg: "person4",
    role: "Sales Lead, Vancouver, CA",
    email: "grath.m@topopps.com",
    curriculumCompleted: 3,
    curriculumTotal: 5,
    coursesCompleted: 2,
    coursesTotal: 10,
    coachingCompleted: 6,
    coachingTotal: 10
  },
  {
    index: 4,
    name: "Chrissy Holden",
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
    personImg: "person5",
    role: "Sales Lead, Vancouver, CA",
    email: "chrissy.h@topopps.com",
    curriculumCompleted: 5,
    curriculumTotal: 5,
    coursesCompleted: 9,
    coursesTotal: 10,
    coachingCompleted: 10,
    coachingTotal: 10
  },
  {
    index: 5,
    name: "Lynda Williams",
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
    personImg: "person6",
    role: "Sales Lead, Vancouver, CA",
    email: "lynda.m@topopps.com",
    curriculumCompleted: 5,
    curriculumTotal: 5,
    coursesCompleted: 4,
    coursesTotal: 10,
    coachingCompleted: 10,
    coachingTotal: 10
  },
  {
    index: 6,
    name: "Ray Harper",
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
    personImg: "person7",
    role: "Sales Lead, Vancouver, CA",
    email: "ray.h@topopps.com",
    curriculumCompleted: 5,
    curriculumTotal: 5,
    coursesCompleted: 10,
    coursesTotal: 10,
    coachingCompleted: 10,
    coachingTotal: 10
  },
  {
    index: 7,
    name: "John Morris",
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
    personImg: "person8",
    role: "Sales Lead, Vancouver, CA",
    email: "john.m@topopps.com",
    curriculumCompleted: 5,
    curriculumTotal: 5,
    coursesCompleted: 10,
    coursesTotal: 10,
    coachingCompleted: 10,
    coachingTotal: 10
  }
];

@Component({
  selector: "app-team-forecast",
  templateUrl: "./team-forecast.component.html",
  styleUrls: ["./team-forecast.component.scss"]
})
export class TeamForecastComponent implements OnInit {
  @Output()
  public showView = new EventEmitter<any>();
  public selectedMetric = "coursesCompleted";

  public selectedRowIndex = -1;

  @Input("rowIndex")
  set rowIndex(index) {
    this.selectedRowIndex = index;
    console.info(this.selectedRowIndex);
  }

  public showPopup = false;
  displayedColumns: string[] = [
    "name",
    "forecast",
    "selfReporting",
    "mngrReporting",
    "won",
    // "curriculum",
    // "courses",
    // "stagePipeline",
    // "categoryPipeline",
    "commit",
    "bestCase",
    "mostLikely"
  ];
  public columnInfo = [
    { key: "forecast", label: "FORECAST" },
    { key: "selfReporting", label: "SELF REPORTING" },
    { key: "mngrReporting", label: "MNGR REPORTING" },
    { key: "won", label: "WON" },
    // { key: "curriculum", label: "CURRICULUM" },
    // { key: "courses", label: "COURSES" },
    { key: "commit", label: "COMMIT" },
    { key: "bestCase", label: "BEST CASE" },
    { key: "mostLikely", label: "MOST LIKELY" }
  ];
  dataSource = ELEMENT_DATA;
  constructor() {}

  ngOnInit() {}

  onEdit(data) {
    this.showView.emit(data);
    this.selectedRowIndex = data.index;
    this.showPopup = true;
  }
}
