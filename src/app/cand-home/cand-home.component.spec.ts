import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CandHomeComponent } from './cand-home.component';

describe('CandHomeComponent', () => {
  let component: CandHomeComponent;
  let fixture: ComponentFixture<CandHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CandHomeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CandHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
