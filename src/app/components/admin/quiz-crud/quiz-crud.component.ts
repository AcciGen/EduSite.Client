import { Component } from '@angular/core';

@Component({
  selector: 'app-quiz-crud',
  templateUrl: './quiz-crud.component.html',
  styleUrl: './quiz-crud.component.scss'
})
export class QuizCRUDComponent {
  currentComponent: string = 'quiz-create';

  showCreateComponent() {
    this.currentComponent = 'quiz-create';
  }

  showUpdateComponent() {
    this.currentComponent = 'quiz-update';
  }

  showGetAllComponent() {
    this.currentComponent = 'quiz-get-all';
  }

  showDeleteComponent() {
    this.currentComponent = 'quiz-delete';
  }
}
