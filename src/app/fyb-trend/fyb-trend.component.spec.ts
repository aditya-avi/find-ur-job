import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FybTrendComponent } from './fyb-trend.component';

describe('FybTrendComponent', () => {
  let component: FybTrendComponent;
  let fixture: ComponentFixture<FybTrendComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FybTrendComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FybTrendComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
