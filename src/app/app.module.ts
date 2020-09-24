import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MakeTestComponent } from './make-test/make-test.component';
import { StudentTestComponent } from './student-test/student-test.component';
import { EditQuestionComponent } from './make-test/edit-question/edit-question.component';
import { AddQuestionComponent } from './make-test/add-question/add-question.component';
import { EachQuestionComponent } from './make-test/each-question/each-question.component';
import { HomePageComponent } from './home-page/home-page.component';
import { TestPreviewComponent } from './test-preview/test-preview.component';
import { HeaderComponent } from './header/header.component';

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
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
