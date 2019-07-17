import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ApiTaskComponent} from './api-task.component';
import {AppExtModule} from '../../app.ext.module';

const routes: Routes = [
  {
    path: '',
    component: ApiTaskComponent,
  }
];

@NgModule({
  imports: [
    AppExtModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ApiTaskComponent]
})
export class ApiTaskModule {
}
