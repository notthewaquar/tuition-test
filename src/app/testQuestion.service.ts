
import { EventEmitter } from '@angular/core';

import { testQuestion } from './make-test/testQuestion.model';

export class TestQuestionService {
  testQuestionChanged = new EventEmitter<testQuestion[]>();
  questionNumber = 0;

  private allQuestions: testQuestion[] = [
    new testQuestion(
      'What is the Capital of India?',
      'Kolkata',
      'Chennai',
      'New Delhi',
      'Mumbai' ,
      'C'
    ),
    new testQuestion(
      'Sun rises from the _____ ?',
      'East',
      'West',
      'North',
      'South' ,
      'A'
    )
  ];

  getTestQuestion() {
    return this.allQuestions.slice();
  }

  // tslint:disable-next-line: no-shadowed-variable
  addTestQuestion(testQuestion: testQuestion) {
    this.allQuestions.push(testQuestion);
    this.testQuestionChanged.emit(this.allQuestions.slice());
  }
}
