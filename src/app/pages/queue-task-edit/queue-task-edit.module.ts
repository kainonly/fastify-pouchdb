import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {QueueTaskEditComponent} from './queue-task-edit.component';
import {AppExtModule} from '../../app.ext.module';

const routes: Routes = [
  {
    path: '',
    component: QueueTaskEditComponent,
  }
];

@NgModule({
  imports: [
    AppExtModule,
    RouterModule.forChild(routes)
  ],
  declarations: [QueueTaskEditComponent]
})
export class QueueTaskEditModule {
}
