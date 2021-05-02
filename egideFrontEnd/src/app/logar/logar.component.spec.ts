import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LogarComponent } from './logar.component';

describe('LogarComponent', () => {
  let component: LogarComponent;
  let fixture: ComponentFixture<LogarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LogarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LogarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
