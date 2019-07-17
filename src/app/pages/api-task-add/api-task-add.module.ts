import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ApiTaskAddComponent} from './api-task-add.component';
import {AppExtModule} from '../../app.ext.module';

const routes: Routes = [
  {
    path: '',
    component: ApiTaskAddComponent,
  }
];

@NgModule({
  imports: [
    AppExtModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ApiTaskAddComponent]
})
export class ApiTaskAddModule {
}
