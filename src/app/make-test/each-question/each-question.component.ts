import { Component, Input, OnInit } from '@angular/core';
import { testQuestion } from '../../shared/model/test-question.model';

@Component({
  selector: 'app-each-question',
  templateUrl: './each-question.component.html',
  styleUrls: ['./each-question.component.css']
})
export class EachQuestionComponent implements OnInit {


  constructor() { }

  ngOnInit(): void {
  }
}
