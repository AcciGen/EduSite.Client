import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuizDeleteComponent } from './quiz-delete.component';

describe('QuizDeleteComponent', () => {
  let component: QuizDeleteComponent;
  let fixture: ComponentFixture<QuizDeleteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [QuizDeleteComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(QuizDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
