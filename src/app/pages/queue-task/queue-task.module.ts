import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {QueueTaskComponent} from './queue-task.component';
import {AppExtModule} from '../../app.ext.module';

const routes: Routes = [
  {
    path: '',
    component: QueueTaskComponent,
  }
];

@NgModule({
  imports: [
    AppExtModule,
    RouterModule.forChild(routes)
  ],
  declarations: [QueueTaskComponent]
})
export class QueueTaskModule {
}
