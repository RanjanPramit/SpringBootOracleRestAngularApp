import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeDetailInfoComponent } from './employee-detail-info.component';

describe('EmployeeDetailInfoComponent', () => {
  let component: EmployeeDetailInfoComponent;
  let fixture: ComponentFixture<EmployeeDetailInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmployeeDetailInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeeDetailInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
