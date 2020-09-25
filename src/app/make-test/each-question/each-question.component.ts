import { Component, Input, OnInit } from '@angular/core';
import { testQuestion } from '../testQuestion.model';

@Component({
  selector: 'app-each-question',
  templateUrl: './each-question.component.html',
  styleUrls: ['./each-question.component.css']
})
export class EachQuestionComponent implements OnInit {
  @Input() eachQuestion: testQuestion;
  @Input() id: number;

  constructor() { }

  ngOnInit(): void {
  }
  editEachQuestion(){
    //
  }
}
