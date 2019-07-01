import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {TimingTaskComponent} from './timing-task.component';
import {AppExtModule} from '../../app.ext.module';

const routes: Routes = [
  {
    path: '',
    component: TimingTaskComponent,
  }
];

@NgModule({
  imports: [
    AppExtModule,
    RouterModule.forChild(routes)
  ],
  declarations: [TimingTaskComponent]
})
export class TimingTaskModule {
}
