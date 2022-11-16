import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeekprofileComponent } from './seekprofile.component';

describe('SeekprofileComponent', () => {
  let component: SeekprofileComponent;
  let fixture: ComponentFixture<SeekprofileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SeekprofileComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SeekprofileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
