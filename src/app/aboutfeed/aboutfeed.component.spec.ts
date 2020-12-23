import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutfeedComponent } from './aboutfeed.component';

describe('AboutfeedComponent', () => {
  let component: AboutfeedComponent;
  let fixture: ComponentFixture<AboutfeedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AboutfeedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutfeedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
