import {
  Component,
  OnInit,
  Input,
  AfterViewInit,
  ViewChild,
  ElementRef
} from "@angular/core";

@Component({
  selector: "app-stage",
  templateUrl: "./stage.component.html",
  styleUrls: ["./stage.component.scss"]
})
export class StageComponent implements OnInit, AfterViewInit {
  @Input("pipelineData") data;

  @ViewChild("oppbody", { static: false }) oppBody: ElementRef<any>;

  constructor() {}

  ngOnInit() {
    console.info(this.data);
  }

  ngAfterViewInit() {
    let elementRef = this.oppBody.nativeElement;
    let offsetTop = elementRef.offsetTop;
    console.info(elementRef);
    elementRef.style.height = `calc(100vh - ${offsetTop + 20}px)`;
  }
}
