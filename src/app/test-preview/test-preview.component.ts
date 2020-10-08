import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup } from '@angular/forms';

import { testQuestion } from '../make-test/testQuestion.model';
import { TestQuestionService } from '../testQuestion.service';

@Component({
  selector: 'app-test-preview',
  templateUrl: './test-preview.component.html',
  styleUrls: ['./test-preview.component.css']
})
export class TestPreviewComponent implements OnInit {
  id: number;
  questionIndex = 0;
  previewForm: FormGroup;
  allQuestions: testQuestion[];

  constructor(private testQuestionService: TestQuestionService) { }

  ngOnInit(): void {
    this.allQuestions = this.testQuestionService.getTestQuestion();
    this.previewForm = new FormGroup({
      noOfQues: new FormControl({value: this.allQuestions.length, disabled: true}),
      eachTestCard: new FormArray([])
    });
    this.displayEachTest();
  }

  displayEachTest() {
    // tslint:disable-next-line: prefer-for-of
    for (let index = 0; index < this.allQuestions.length; index++) {
      const control = new FormGroup({
        previewAns: new FormControl(this.testQuestionService.getEachTestQuestion(index).correct),
        ansA: new FormControl(false),
        ansB: new FormControl(false),
        ansC: new FormControl(false),
        ansD: new FormControl(false)
      });
      (this.previewForm.get('eachTestCard') as FormArray).push(control);
    }
  }

  resetTestArr(index: number) {
    (this.previewForm.get('eachTestCard') as FormArray).controls[index].patchValue(
      {ansA: false, ansB: false, ansC: false, ansD: false}
    );
  }

  radioClickA(index: number) {
    this.resetTestArr(index);
    (this.previewForm.get('eachTestCard') as FormArray).controls[index].patchValue({ansA: true});
  }
  radioClickB(index: number) {
    this.resetTestArr(index);
    (this.previewForm.get('eachTestCard') as FormArray).controls[index].patchValue({ansB: true});
  }
  radioClickC(index: number) {
    this.resetTestArr(index);
    (this.previewForm.get('eachTestCard') as FormArray).controls[index].patchValue({ansC: true});
  }
  radioClickD(index: number) {
    this.resetTestArr(index);
    (this.previewForm.get('eachTestCard') as FormArray).controls[index].patchValue({ansD: true});
  }

  onSubmit() {
    let marks = 0;
    let attemptQuestion = 0;
    console.clear();
    // console.log('No.of Q.' + this.allQuestions.length);
    const questionNumber = 0;
    // tslint:disable-next-line: prefer-for-of
    for (let index = 0; index < this.allQuestions.length; index++) {
      const ansSelCorr = this.previewForm.value.eachTestCard[index].previewAns;
      let ansSelA = this.previewForm.value.eachTestCard[index].ansA;
      let ansSelB = this.previewForm.value.eachTestCard[index].ansB;
      let ansSelC = this.previewForm.value.eachTestCard[index].ansC;
      let ansSelD = this.previewForm.value.eachTestCard[index].ansD;
      if (ansSelA === true) {
        ansSelA = 'A';
      } else if (ansSelB === true) {
        ansSelB = 'B';
      } else if (ansSelC === true) {
        ansSelC = 'C';
      } else if (ansSelD === true) {
        ansSelD = 'D';
      }
      if ( ansSelA === ansSelCorr || ansSelB === ansSelCorr || ansSelC === ansSelCorr || ansSelD === ansSelCorr ) {
        marks = marks + 1;
      }
      if ( ansSelA === 'A' || ansSelB === 'B' || ansSelC === 'C' || ansSelD === 'D' ) {
        attemptQuestion = attemptQuestion + 1;
      } else {
        console.log('not');
      }
      // console.log((this.previewForm.get('eachTestCard') as FormArray).controls[index].patchValue({previewAns: 'hero'}));
      // console.log(ansSelCorr);
      // console.log(ansSelA);
      // console.log(ansSelB);
      // console.log(ansSelC);
      // console.log(ansSelD);
    }
    console.log('Correct: ' + marks);
    console.log('Attempted: ' + attemptQuestion );
    alert( 'Correct: ' + marks + '\n' + 'Attempted: ' + attemptQuestion);
  }
}
