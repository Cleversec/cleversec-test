import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FillCardDetailsComponent } from './fill-card-details.component';

describe('FillCardDetailsComponent', () => {
  let component: FillCardDetailsComponent;
  let fixture: ComponentFixture<FillCardDetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FillCardDetailsComponent]
    });
    fixture = TestBed.createComponent(FillCardDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
