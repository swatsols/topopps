import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TeamForecastComponent } from './team-forecast.component';

describe('TeamForecastComponent', () => {
  let component: TeamForecastComponent;
  let fixture: ComponentFixture<TeamForecastComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TeamForecastComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TeamForecastComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
