import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecHomeComponent } from './rec-home.component';

describe('RecHomeComponent', () => {
  let component: RecHomeComponent;
  let fixture: ComponentFixture<RecHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecHomeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RecHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
