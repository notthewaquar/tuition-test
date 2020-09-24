import {
  Component,
  ElementRef,
  EventEmitter,
  OnInit,
  Output,
  ViewChild
} from '@angular/core';

import { testQuestion } from '../testQuestion.model';

@Component({
  selector: 'app-add-question',
  templateUrl: './add-question.component.html',
  styleUrls: ['./add-question.component.css']
})
export class AddQuestionComponent implements OnInit {
  @ViewChild('examQuestion') questionInputRef: ElementRef;
  @ViewChild('examAns1') ans1InputRef: ElementRef;
  @ViewChild('examAns2') ans2InputRef: ElementRef;
  @ViewChild('examAns3') ans3InputRef: ElementRef;
  @ViewChild('examAns4') ans4InputRef: ElementRef;
  @ViewChild('selectAnswer') selectAnswerInputRef: ElementRef;
  // tslint:disable-next-line: no-output-on-prefix
  @Output() questionAdded = new EventEmitter<testQuestion>();

  constructor() { }

  ngOnInit(): void {
  }

  addQuestion() {
    const question = this.questionInputRef.nativeElement.value;
    const ans1 = this.ans1InputRef.nativeElement.value;
    const ans2 = this.ans2InputRef.nativeElement.value;
    const ans3 = this.ans3InputRef.nativeElement.value;
    const ans4 = this.ans4InputRef.nativeElement.value;
    const selectAnswer = this.selectAnswerInputRef.nativeElement.value;
    const newQuestion = new testQuestion(
      question,
      ans1,
      ans2,
      ans3,
      ans4,
      selectAnswer
    );
    this.questionAdded.emit(newQuestion);
    console.log('question =' + question,
                'answer 1 =' + ans1,
                'answer 2 =' + ans2,
                'asnwer 3 =' + ans3,
                'asnwer 4 =' + ans4,
                'correct Ans =' + selectAnswer);
    // console.log(newQuestion);
  }
}
