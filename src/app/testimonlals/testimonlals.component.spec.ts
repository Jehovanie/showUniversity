import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestimonlalsComponent } from './testimonlals.component';

describe('TestimonlalsComponent', () => {
  let component: TestimonlalsComponent;
  let fixture: ComponentFixture<TestimonlalsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestimonlalsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestimonlalsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
