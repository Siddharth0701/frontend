import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SinghComponent } from './singh.component';

describe('SinghComponent', () => {
  let component: SinghComponent;
  let fixture: ComponentFixture<SinghComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SinghComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SinghComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
