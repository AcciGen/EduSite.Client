import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuestionGetAllComponent } from './question-get-all.component';

describe('QuestionGetAllComponent', () => {
  let component: QuestionGetAllComponent;
  let fixture: ComponentFixture<QuestionGetAllComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [QuestionGetAllComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(QuestionGetAllComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
