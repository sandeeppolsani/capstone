import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JouneyformComponent } from './jouneyform.component';

describe('JouneyformComponent', () => {
  let component: JouneyformComponent;
  let fixture: ComponentFixture<JouneyformComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JouneyformComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JouneyformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
