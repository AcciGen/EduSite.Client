import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuizGetAllComponent } from './quiz-get-all.component';

describe('QuizGetAllComponent', () => {
  let component: QuizGetAllComponent;
  let fixture: ComponentFixture<QuizGetAllComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [QuizGetAllComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(QuizGetAllComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
