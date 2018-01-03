import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonFooterComponent } from './button-footer.component';

describe('ButtonFooterComponent', () => {
  let component: ButtonFooterComponent;
  let fixture: ComponentFixture<ButtonFooterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ButtonFooterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ButtonFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
