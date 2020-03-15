import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WelcomeEmployeeAppComponent } from './welcome-employee-app.component';

describe('WelcomeEmployeeAppComponent', () => {
  let component: WelcomeEmployeeAppComponent;
  let fixture: ComponentFixture<WelcomeEmployeeAppComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WelcomeEmployeeAppComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WelcomeEmployeeAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
