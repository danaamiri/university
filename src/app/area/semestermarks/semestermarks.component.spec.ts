import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SemestermarksComponent } from './semestermarks.component';

describe('SemestermarksComponent', () => {
  let component: SemestermarksComponent;
  let fixture: ComponentFixture<SemestermarksComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SemestermarksComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SemestermarksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
