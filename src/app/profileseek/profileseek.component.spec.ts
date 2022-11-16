import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileseekComponent } from './profileseek.component';

describe('ProfileseekComponent', () => {
  let component: ProfileseekComponent;
  let fixture: ComponentFixture<ProfileseekComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfileseekComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProfileseekComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
