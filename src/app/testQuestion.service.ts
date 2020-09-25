import { EventEmitter } from 'events';

import { testQuestion } from './make-test/testQuestion.model';

export class TestQuestionService {

  // testQuestionSelected = new EventEmitter<testQuestion>();

  private allQuestions: testQuestion[] = [
    new testQuestion(
      'What is the Capital of India?',
      'Kolkata',
      'Chennai',
      'New Delhi',
      'Mumbai' ,
      'C'
    )
  ];

  getTestQuestion() {
    return this.allQuestions.slice();
  }
}
