import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenufeedComponent } from './menufeed.component';

describe('MenufeedComponent', () => {
  let component: MenufeedComponent;
  let fixture: ComponentFixture<MenufeedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MenufeedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MenufeedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
