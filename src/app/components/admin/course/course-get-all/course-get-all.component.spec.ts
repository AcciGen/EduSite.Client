import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseGetAllComponent } from './course-get-all.component';

describe('CourseGetAllComponent', () => {
  let component: CourseGetAllComponent;
  let fixture: ComponentFixture<CourseGetAllComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CourseGetAllComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CourseGetAllComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
