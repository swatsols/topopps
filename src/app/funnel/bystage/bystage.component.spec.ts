import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BystageComponent } from './bystage.component';

describe('BystageComponent', () => {
  let component: BystageComponent;
  let fixture: ComponentFixture<BystageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BystageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BystageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
