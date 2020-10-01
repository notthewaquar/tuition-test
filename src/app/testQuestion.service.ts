import { Subject } from 'rxjs';

import { testQuestion } from './make-test/testQuestion.model';

export class TestQuestionService {
  testQuestionChanged = new Subject<testQuestion[]>();
  startedEditing = new Subject<number>();
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
  getEachTestQuestion(index: number){
    return this.allQuestions[index];
  }

  // tslint:disable-next-line: no-shadowed-variable
  addTestQuestion(testQuestion: testQuestion) {
    this.allQuestions.push(testQuestion);
    this.testQuestionChanged.next(this.allQuestions.slice());
  }

  updateTestQuestion(index: number, editTestQuestion: testQuestion) {
    this.allQuestions[index] = editTestQuestion;
    this.testQuestionChanged.next(this.allQuestions.slice());
  }
  deleteTestQuestion(index: number) {
    this.allQuestions.splice(index, 1);
    this.testQuestionChanged.next(this.allQuestions.slice());
  }
}
