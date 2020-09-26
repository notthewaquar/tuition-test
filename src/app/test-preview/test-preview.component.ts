import { Component, Input, OnInit } from '@angular/core';

import { testQuestion } from '../make-test/testQuestion.model';
import { TestQuestionService } from '../testQuestion.service';

@Component({
  selector: 'app-test-preview',
  templateUrl: './test-preview.component.html',
  styleUrls: ['./test-preview.component.css']
})
export class TestPreviewComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
