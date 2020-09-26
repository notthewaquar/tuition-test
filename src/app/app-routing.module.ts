import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomePageComponent } from './home-page/home-page.component';
import { MakeTestComponent } from './make-test/make-test.component';
import { StudentTestComponent } from './student-test/student-test.component';
import { TestPreviewComponent } from './test-preview/test-preview.component';


const appRoutes: Routes = [
  { path: '', component: HomePageComponent, pathMatch: 'full' },
  { path: 'home-page', component: HomePageComponent },
  { path: 'make-test', component: MakeTestComponent },
  { path: 'preview-mode', component: TestPreviewComponent },
  { path: 'student-test', component: StudentTestComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
