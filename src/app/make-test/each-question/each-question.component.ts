import { Component, Input, OnInit } from '@angular/core';
import { testQuestion } from '../testQuestion.model';

@Component({
  selector: 'app-each-question',
  templateUrl: './each-question.component.html',
  styleUrls: ['./each-question.component.css']
})
export class EachQuestionComponent implements OnInit {
  @Input() eachQuestion: testQuestion;
  // @Input() question: string;
  // @Input() ans1: string;
  // @Input() ans2: string;
  // @Input() ans3: string;
  // @Input() ans4: string;
  // @Input() id: number;

  constructor() { }

  ngOnInit(): void {
  }

}
