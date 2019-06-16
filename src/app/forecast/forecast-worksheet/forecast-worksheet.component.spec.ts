import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ForecastWorksheetComponent } from './forecast-worksheet.component';

describe('ForecastWorksheetComponent', () => {
  let component: ForecastWorksheetComponent;
  let fixture: ComponentFixture<ForecastWorksheetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ForecastWorksheetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ForecastWorksheetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
