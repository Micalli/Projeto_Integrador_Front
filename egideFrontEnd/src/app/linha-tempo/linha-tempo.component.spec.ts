import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LinhaTempoComponent } from './linha-tempo.component';

describe('LinhaTempoComponent', () => {
  let component: LinhaTempoComponent;
  let fixture: ComponentFixture<LinhaTempoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LinhaTempoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LinhaTempoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
