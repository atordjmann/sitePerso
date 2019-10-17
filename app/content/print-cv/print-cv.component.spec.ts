import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrintCvComponent } from './print-cv.component';

describe('PrintCvComponent', () => {
  let component: PrintCvComponent;
  let fixture: ComponentFixture<PrintCvComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrintCvComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrintCvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
