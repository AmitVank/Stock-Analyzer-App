import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactfeedComponent } from './contactfeed.component';

describe('ContactfeedComponent', () => {
  let component: ContactfeedComponent;
  let fixture: ComponentFixture<ContactfeedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContactfeedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactfeedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
