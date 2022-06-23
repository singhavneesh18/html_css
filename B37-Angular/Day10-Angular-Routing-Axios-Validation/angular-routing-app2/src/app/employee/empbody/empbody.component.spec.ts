import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpbodyComponent } from './empbody.component';

describe('EmpbodyComponent', () => {
  let component: EmpbodyComponent;
  let fixture: ComponentFixture<EmpbodyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmpbodyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmpbodyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
