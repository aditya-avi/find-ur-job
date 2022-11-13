import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignupseekComponent } from './signupseek.component';

describe('SignupseekComponent', () => {
  let component: SignupseekComponent;
  let fixture: ComponentFixture<SignupseekComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SignupseekComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SignupseekComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
