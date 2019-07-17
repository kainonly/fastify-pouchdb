import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {QueueTaskAddComponent} from './queue-task-add.component';
import {AppExtModule} from '../../app.ext.module';

const routes: Routes = [
  {
    path: '',
    component: QueueTaskAddComponent,
  }
];

@NgModule({
  imports: [
    AppExtModule,
    RouterModule.forChild(routes)
  ],
  declarations: [QueueTaskAddComponent]
})
export class QueueTaskAddModule {
}
