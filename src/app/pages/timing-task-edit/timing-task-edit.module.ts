import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {TimingTaskEditComponent} from './timing-task-edit.component';
import {AppExtModule} from '../../app.ext.module';

const routes: Routes = [
  {
    path: '',
    component: TimingTaskEditComponent,
  }
];

@NgModule({
  imports: [
    AppExtModule,
    RouterModule.forChild(routes)
  ],
  declarations: [TimingTaskEditComponent]
})
export class TimingTaskEditModule {
}
