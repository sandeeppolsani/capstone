import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScreencoverComponent } from './screencover.component';

describe('ScreencoverComponent', () => {
  let component: ScreencoverComponent;
  let fixture: ComponentFixture<ScreencoverComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScreencoverComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScreencoverComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
