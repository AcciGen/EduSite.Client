import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuestionDeleteComponent } from './question-delete.component';

describe('QuestionDeleteComponent', () => {
  let component: QuestionDeleteComponent;
  let fixture: ComponentFixture<QuestionDeleteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [QuestionDeleteComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(QuestionDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
