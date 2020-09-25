import { Component, OnInit} from '@angular/core';
import { TestQuestionService } from '../testQuestion.service';

import { testQuestion } from './testQuestion.model';
@Component({
  selector: 'app-make-test',
  templateUrl: './make-test.component.html',
  styleUrls: ['./make-test.component.css'],
  providers: [TestQuestionService]
})
export class MakeTestComponent implements OnInit {
  allQuestions: testQuestion[];
  // allQuestions: testQuestion[] = [
  //   new testQuestion(
  //     'What is the Capital of India?',
  //     'Kolkata',
  //     'Chennai',
  //     'New Delhi',
  //     'Mumbai' ,
  //     'C'
  //   )
  // ];

  constructor(private testQuestionService: TestQuestionService) { }

  ngOnInit(): void {
    this.allQuestions = this.testQuestionService.getTestQuestion();
  }

  onSubmit(){
    // console.log(this.testForm);
  }

  onQuestionAdded(newQuestion: testQuestion){
    console.log('new Q got in parent');
    this.allQuestions.push(newQuestion);
  }

}
