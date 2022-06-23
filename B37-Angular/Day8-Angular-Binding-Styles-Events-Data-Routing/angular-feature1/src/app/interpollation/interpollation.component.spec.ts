import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InterpollationComponent } from './interpollation.component';

describe('InterpollationComponent', () => {
  let component: InterpollationComponent;
  let fixture: ComponentFixture<InterpollationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InterpollationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InterpollationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
