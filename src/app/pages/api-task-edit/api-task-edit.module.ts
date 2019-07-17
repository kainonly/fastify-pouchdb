import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ApiTaskEditComponent} from './api-task-edit.component';
import {AppExtModule} from '../../app.ext.module';

const routes: Routes = [
  {
    path: '',
    component: ApiTaskEditComponent,
  }
];

@NgModule({
  imports: [
    AppExtModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ApiTaskEditComponent]
})
export class ApiTaskEditModule {
}
