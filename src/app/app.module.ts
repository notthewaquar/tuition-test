import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
// routing
import { AppRoutingModule } from './app-routing.module';
// component
import { AppComponent } from './app.component';
import { MakeTestComponent } from './make-test/make-test.component';
import { StudentTestComponent } from './student-test/student-test.component';
import { EditQuestionComponent } from './make-test/edit-question/edit-question.component';
import { AddQuestionComponent } from './make-test/add-question/add-question.component';
import { EachQuestionComponent } from './make-test/each-question/each-question.component';
import { HomePageComponent } from './home-page/home-page.component';
import { TestPreviewComponent } from './test-preview/test-preview.component';
import { HeaderComponent } from './header/header.component';
// services
import { TestQuestionService } from './testQuestion.service';

@NgModule({
  declarations: [
    AppComponent,
    MakeTestComponent,
    StudentTestComponent,
    EditQuestionComponent,
    AddQuestionComponent,
    EachQuestionComponent,
    HomePageComponent,
    TestPreviewComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  providers: [
    TestQuestionService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
