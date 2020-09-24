import { Component, OnInit} from '@angular/core';

import { testQuestion } from './testQuestion.model';
@Component({
  selector: 'app-make-test',
  templateUrl: './make-test.component.html',
  styleUrls: ['./make-test.component.css']
})
export class MakeTestComponent implements OnInit {
  allQuestions: testQuestion[] = [
    new testQuestion(
      'What is the Capital of India?',
      'Kolkata',
      'Chennai',
      'New Delhi',
      'Mumbai' ,
      'C'
    )
  ];

  constructor() { }

  ngOnInit(): void {
    //
  }

  onSubmit(){
    // console.log(this.testForm);
  }

  onQuestionAdded(newQuestion: testQuestion){
    console.log('new Q got in parent');
    this.allQuestions.push(newQuestion);
  }

}
