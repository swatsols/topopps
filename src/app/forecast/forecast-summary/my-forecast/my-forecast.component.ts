import { Component, OnInit, AfterViewInit } from "@angular/core";

const ELEMENT_DATA = [
  {
    name: "LMI Technologies Inc - Retry 2",
    stage: "Qualification",
    foreCast: "BEST CASE",
    oppAmount: "$9,100",
    customReporting: "0"
  },
  {
    name: "Spexx - NB",
    stage: "Compelling Need",
    foreCast: "BEST CASE",
    oppAmount: "$11,720",
    customReporting: "0"
  },
  {
    name: "YouEarnedIt - NB",
    stage: "All Sponsor Demo",
    foreCast: "REP COMMIT",
    oppAmount: "$13,300",
    customReporting: "$13,300"
  },
  {
    name: "SmartSense By Digi - NB",
    stage: "Pricing Agreement",
    foreCast: "BEST CASE",
    oppAmount: "$19,000",
    customReporting: "$19,000"
  },
  {
    name: "Fidelis Cybersecurity - Retry",
    stage: "All Sponsor Demo",
    foreCast: "REP COMMIT",
    oppAmount: "$35,000",
    customReporting: "$35,000"
  },
  {
    name: "BioPharm Communications LLC - NB",
    stage: "Pricing Agreement",
    foreCast: "BEST CASE",
    oppAmount: "$7,300",
    customReporting: "$7,300"
  }
];

const ELEMENT_DATA1 = [
  {
    category: "Won",
    opportunities: 3,
    amount: "$1,000,000",
    changesSince: "+ $504,000",
    amountPercent: "70",
    changePercent: "100"
  },
  {
    category: "Rep Commit",
    opportunities: 10,
    amount: "$912,000",
    changesSince: "- $120,000",
    amountPercent: "80",
    changePercent: "80"
  },
  {
    category: "Commit Suggestion",
    opportunities: 26,
    amount: "$160,000",
    changesSince: "+ $110,500",
    amountPercent: "100",
    changePercent: "100"
  },
  {
    category: "Engaged",
    opportunities: 50,
    amount: "$414,241",
    changesSince: "- $201,120",
    amountPercent: "60",
    changePercent: "60"
  },
  {
    category: "Commit Suggestion",
    opportunities: 26,
    amount: "$160,000",
    changesSince: "+ $110,000",
    amountPercent: "100",
    changePercent: "100"
  },
  {
    category: "Engaged",
    opportunities: 50,
    amount: "$414,241",
    changesSince: "- $114,200",
    amountPercent: "60",
    changePercent: "60"
  }
];
@Component({
  selector: "app-my-forecast",
  templateUrl: "./my-forecast.component.html",
  styleUrls: ["./my-forecast.component.scss"]
})
export class MyForecaseComponent implements OnInit, AfterViewInit {
  displayedColumns: string[] = [
    "opportunityInfo",
    "forecast",
    "oppAmount",
    "customReporting"
  ];

  displayedColumns1: string[] = [
    "category",
    "opportunities",
    "amount",
    "changesSince"
  ];

  dataSource = ELEMENT_DATA;
  dataSource1 = ELEMENT_DATA1;
  public selectedTimePeriod = "Q1-2019";

  constructor() {}

  ngOnInit() {}

  ngAfterViewInit() {
    google.charts.load("current", { packages: ["corechart", "line"] });
    google.charts.setOnLoadCallback(drawCurveTypes);

    function drawCurveTypes() {
      var data = new google.visualization.DataTable();
      data.addColumn("string", "X");
      data.addColumn("number", "x");
      data.addColumn("number", "y");
      data.addColumn("number", "z");

      data.addRows([
        ["Jan, 19", 1, 0.2, 3],
        ["Feb, 19", 0.4, 2.2, 3.6],
        ["Mar, 19", 3.7, 1.5, 1.8]
      ]);

      var options: any = {
        hAxis: {},
        vAxis: {
          format: "$#M"
        },
        series: {},
        legend: { position: "none" },
        tooltip: { isHtml: true }
      };

      var chart = new google.visualization.LineChart(
        document.getElementById("chart_div")
      );
      chart.draw(data, options);
    }
  }
}
