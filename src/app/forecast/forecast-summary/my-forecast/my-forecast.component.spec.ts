import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { MyForecaseComponent } from "./my-forecast.component";

describe("MyForecaseComponent", () => {
  let component: MyForecaseComponent;
  let fixture: ComponentFixture<MyForecaseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [MyForecaseComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyForecaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
