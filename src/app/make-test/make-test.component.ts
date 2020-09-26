import { Component, OnInit} from '@angular/core';
import { TestQuestionService } from '../testQuestion.service';

import { testQuestion } from './testQuestion.model';
@Component({
  selector: 'app-make-test',
  templateUrl: './make-test.component.html',
  styleUrls: ['./make-test.component.css']
})
export class MakeTestComponent implements OnInit {
  allQuestions: testQuestion[];

  constructor(private testQuestionService: TestQuestionService) { }

  ngOnInit(): void {
    this.allQuestions = this.testQuestionService.getTestQuestion();
    this.testQuestionService.testQuestionChanged
      .subscribe(
        (allQuestions: testQuestion[]) => {
          this.allQuestions = allQuestions;
        }
      );
  }

  onSubmit(){
    //
  }

}
