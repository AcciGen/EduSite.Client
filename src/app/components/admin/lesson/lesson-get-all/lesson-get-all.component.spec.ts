import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LessonGetAllComponent } from './lesson-get-all.component';

describe('LessonGetAllComponent', () => {
  let component: LessonGetAllComponent;
  let fixture: ComponentFixture<LessonGetAllComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LessonGetAllComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LessonGetAllComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
