import {
  Component,
  OnDestroy,
  OnInit
} from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { trigger, state, style, animate, transition } from '@angular/animations';

import { TestQuestionService } from '../testQuestion.service';
import { testQuestion } from './testQuestion.model';
@Component({
  selector: 'app-make-test',
  templateUrl: './make-test.component.html',
  styleUrls: ['./make-test.component.css'],
  animations: [
    trigger(
      'inOutAnimation',
      [
        transition(':enter', [
          style({transform: 'scale(0.8)', opacity: .3}),
          animate('100ms', style({transform: 'scale(1)', opacity: 1}))
        ]),
        transition(':leave', [
          style({transform: 'scale(1)', opacity: 1}),
          animate('100ms', style({transform: 'scale(0.8)', opacity: .3}))
        ])
      ]
    ),
    trigger(
      'popUp',
      [
        transition(':enter', [
          style({transform: 'scale(0.5)', opacity: .3}),
          animate('80ms', style({transform: 'scale(1)', opacity: 1}))
        ]),
        transition(':leave', [
          style({transform: 'scale(1)', opacity: 1}),
          animate('80ms', style({transform: 'scale(0.5)', opacity: .3}))
        ])
      ]
    )
  ]
})
export class MakeTestComponent implements OnInit, OnDestroy {
  id: number;
  allQuestions: testQuestion[];
  // public editModal = false;
  public deleteModal = false;
  private testQuestionSub: Subscription;
  testQuestionForm: FormGroup;
  subscription: Subscription;
  editMode = false;
  deleteMode = false;
  editedItemIndex: number;
  editedItem: testQuestion;
  // forbiddenOptions = ['0', '1'];

  constructor(private testQuestionService: TestQuestionService) { }

  ngOnInit(): void {
    this.allQuestions = this.testQuestionService.getTestQuestion();
    this.testQuestionSub = this.testQuestionService.testQuestionChanged
      .subscribe(
        (allQuestions: testQuestion[]) => {
          this.allQuestions = allQuestions;
        }
    );
    this.subscription = this.testQuestionService.startedEditing
      .subscribe(
        (index: number) => {
          this.editedItemIndex = index;
          this.editMode = true;
          this.editedItem = this.testQuestionService.getEachTestQuestion(index);
          this.testQuestionForm.patchValue({
            editQuestionDiv: {
              editQuestion: this.editedItem.question,
              editAns1: this.editedItem.ans1,
              editAns2: this.editedItem.ans2,
              editAns3: this.editedItem.ans3,
              editAns4: this.editedItem.ans4,
              editAnswer: this.editedItem.correct
            }
          });
        }
      );
    this.testQuestionForm = new FormGroup({
      examClassDiv: new FormGroup({
        selectClass: new FormControl(null, Validators.required),
        noQues: new FormControl(null),
        eachQuesMark: new FormControl(null),
      }),
      examTimeDiv: new FormGroup({
        examDate: new FormControl(null),
        examStartTime: new FormControl('09:00'),
        examEndTime: new FormControl('10:00')
      }),
      makeQuestionDiv: new FormGroup({
        makeQuestion: new FormControl(null),
        makeAns1: new FormControl(null),
        makeAns2: new FormControl(null),
        makeAns3: new FormControl(null),
        makeAns4: new FormControl(null),
        selectAnswer: new FormControl(0)
      }),
      editQuestionDiv: new FormGroup({
        editQuestion: new FormControl(null),
        editAns1: new FormControl(null),
        editAns2: new FormControl(null),
        editAns3: new FormControl(null),
        editAns4: new FormControl(null),
        editAnswer: new FormControl(0)
      }),
      test: new FormArray([]),
    });
  }
  ngOnDestroy(): void {
    this.testQuestionSub.unsubscribe();
    this.subscription.unsubscribe();
  }

  addQuestion() {
    const question = this.testQuestionForm.get('makeQuestionDiv.makeQuestion').value;
    const ans1 = this.testQuestionForm.get('makeQuestionDiv.makeAns1').value;
    const ans2 = this.testQuestionForm.get('makeQuestionDiv.makeAns2').value;
    const ans3 = this.testQuestionForm.get('makeQuestionDiv.makeAns3').value;
    const ans4 = this.testQuestionForm.get('makeQuestionDiv.makeAns4').value;
    const selectAnswer = this.testQuestionForm.get('makeQuestionDiv.selectAnswer').value;
    const newQuestion = new testQuestion(
      question,
      ans1,
      ans2,
      ans3,
      ans4,
      selectAnswer
    );
    this.testQuestionService.addTestQuestion(newQuestion);
    this.resetQuestion();
  }
  // each question

  // edit question
  editEachQuestion(index: number){
    console.log(index);
    this.testQuestionService.startedEditing.next(index);
  }
  onSubmit(){
    console.log(this.testQuestionForm);
  }
  updateTest() {
    const question = this.testQuestionForm.get('editQuestionDiv.editQuestion').value;
    const ans1 = this.testQuestionForm.get('editQuestionDiv.editAns1').value;
    const ans2 = this.testQuestionForm.get('editQuestionDiv.editAns2').value;
    const ans3 = this.testQuestionForm.get('editQuestionDiv.editAns3').value;
    const ans4 = this.testQuestionForm.get('editQuestionDiv.editAns4').value;
    const selectAnswer = this.testQuestionForm.get('editQuestionDiv.editAnswer').value;
    const editTestQuestion = new testQuestion(
      question,
      ans1,
      ans2,
      ans3,
      ans4,
      selectAnswer
    );
    this.testQuestionService.updateTestQuestion(this.editedItemIndex, editTestQuestion);
    this.editMode = false;
    this.testQuestionForm.patchValue({
      editQuestionDiv: {
        editQuestion: null,
        editAns1: null,
        editAns2: null,
        editAns3: null,
        editAns4: null,
        editAnswer: null
      }
    });
  }

  deleteTest() {
     this.testQuestionService.deleteTestQuestion(this.editedItemIndex);
     this.deleteMode = false;
    }
  deleteTestCard(index: number){
    console.log(index);
    this.testQuestionService.startedEditing.next(index);
  }
  resetQuestion() {
    this.testQuestionForm.reset();
  }
  // forbiddenOption(control: FormControl): {[s: string]: Boolean} {
  //   if (this.forbiddenOptions.indexOf(control.value)) {
  //     return {'option is forbidden': true};
  //   }
  //   return null;
  // }
  // newbtn(){
  //   const control = new FormControl(null);
  //   (this.testQuestionForm.get('test') as FormArray).push(control);
  // }
}
